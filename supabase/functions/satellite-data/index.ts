
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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

    // In a production environment, you would integrate with a real satellite data API
    // This is a simulated response for demonstration purposes
    const simulatedResponse = {
      id: crypto.randomUUID(),
      location_name: location.name || "Unknown",
      coordinates: location.coordinates || { lat: 37.7749, lng: -122.4194 },
      data_type: dataType,
      risk_level: Math.random() > 0.5 ? "high" : "medium",
      imagery_url: `https://example.com/satellite/${dataType}/${Date.now()}.jpg`,
      prediction_data: {
        flood_probability: Math.random(),
        landslide_probability: Math.random(),
        safe_evacuation_routes: [
          { path: [[37.7749, -122.4194], [37.7750, -122.4180]], risk: "low" },
          { path: [[37.7749, -122.4194], [37.7740, -122.4170]], risk: "medium" }
        ]
      },
      created_at: new Date().toISOString()
    };

    console.log("Retrieved satellite data:", simulatedResponse);
    
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
