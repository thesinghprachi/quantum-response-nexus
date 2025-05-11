
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { location, dataType } = await req.json();

    if (!location || !dataType) {
      throw new Error('Location and data type are required');
    }

    console.log("Processing satellite data request:", { location, dataType });
    
    // In a production system, this would connect to actual satellite data APIs
    // or machine learning models for disaster prediction
    const riskLevel = calculateRiskLevel(dataType);
    const evacuationRoutes = generateEvacuationRoutes(location.coordinates, riskLevel);
    
    const simulatedResponse = {
      id: crypto.randomUUID(),
      location_name: location.name || "Unknown",
      coordinates: location.coordinates || { lat: 37.7749, lng: -122.4194 },
      data_type: dataType,
      risk_level: riskLevel,
      imagery_url: `https://example.com/satellite/${dataType}/${Date.now()}.jpg`,
      prediction_data: {
        flood_probability: dataType === 'flood' ? generateProbability(0.5, 0.9) : generateProbability(0.1, 0.4),
        landslide_probability: dataType === 'landslide' ? generateProbability(0.5, 0.9) : generateProbability(0.1, 0.4),
        safe_evacuation_routes: evacuationRoutes
      },
      created_at: new Date().toISOString()
    };

    console.log("Generated satellite data response");
    
    return new Response(
      JSON.stringify(simulatedResponse),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    );
  } catch (error) {
    console.error("Error retrieving satellite data:", error.message);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
});

// Helper functions for generating simulated disaster data
function calculateRiskLevel(dataType: string): string {
  const riskLevels = ["low", "medium", "high"];
  // Weight towards higher risk for certain disaster types
  if (dataType === 'flood' || dataType === 'fire') {
    const weights = [0.1, 0.3, 0.6]; // Higher chance of high risk
    const rand = Math.random();
    if (rand < weights[0]) return riskLevels[0];
    if (rand < weights[0] + weights[1]) return riskLevels[1];
    return riskLevels[2];
  }
  
  // More balanced risk for other types
  const index = Math.floor(Math.random() * riskLevels.length);
  return riskLevels[index];
}

function generateProbability(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function generateEvacuationRoutes(coordinates: {lat: number, lng: number}, riskLevel: string) {
  // Generate 1-3 evacuation routes based on risk level
  const routeCount = riskLevel === "high" ? 3 : riskLevel === "medium" ? 2 : 1;
  const routes = [];
  
  for (let i = 0; i < routeCount; i++) {
    // Generate random path point offsets
    const path = [
      [coordinates.lat, coordinates.lng], // Starting point
      [
        coordinates.lat + (Math.random() * 0.02 - 0.01), 
        coordinates.lng + (Math.random() * 0.02 - 0.01)
      ],
      [
        coordinates.lat + (Math.random() * 0.04 - 0.02), 
        coordinates.lng + (Math.random() * 0.04 - 0.02)
      ]
    ];
    
    // Assign route risk level (safer routes for lower risk scenarios)
    let routeRisk;
    if (i === 0 && riskLevel !== "high") {
      routeRisk = "low";
    } else if (i === routes.length - 1 && riskLevel === "high") {
      routeRisk = "medium";
    } else {
      routeRisk = ["low", "medium"][Math.floor(Math.random() * 2)];
    }
    
    routes.push({ path, risk: routeRisk });
  }
  
  return routes;
}
