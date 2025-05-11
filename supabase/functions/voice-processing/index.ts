
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
    const { audioData, sourceLanguage } = await req.json();

    if (!audioData) {
      throw new Error('Audio data is required');
    }

    console.log("Processing voice command - data length:", audioData?.length || 'undefined');
    console.log("Source language:", sourceLanguage || 'auto-detect');
    
    // In a production environment, this would connect to OpenAI's Whisper API or similar
    // Here's a simulated process for demonstration purposes
    
    // 1. Extract text from audio (simulation)
    const detectedText = simulateTextExtraction();
    
    // 2. Detect language if not provided (simulation)
    const detectedLanguage = sourceLanguage || detectLanguage(detectedText);
    
    // 3. Translate if needed (simulation)
    const translatedText = detectedLanguage !== 'en' 
      ? translateText(detectedText, detectedLanguage, 'en') 
      : detectedText;
    
    // 4. Analyze urgency based on content (simulation)
    const urgencyLevel = analyzeUrgency(translatedText);
    
    // 5. Save to database
    // In a production app, we would save this to the database
    // Using the Supabase client requires proper environment variables setup
    
    const processedData = {
      text: detectedText,
      detectedLanguage,
      translatedText,
      targetLanguage: "en",
      urgencyLevel,
      confidence: 0.92
    };
    
    return new Response(
      JSON.stringify(processedData),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    );
  } catch (error) {
    console.error("Error processing voice command:", error.message);
    
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

// Simulation functions for demonstration purposes
function simulateTextExtraction() {
  const possibleTexts = [
    "Emergency reported at downtown area. Flooding in progress. Need immediate assistance.",
    "Wildfire spotted near the eastern forest. Spreading quickly.",
    "Landslide has blocked the mountain pass. Several vehicles trapped.",
    "Hurricane approaching from the south coast. Evacuation needed.",
    "Building collapse at 5th Avenue. Multiple people trapped inside."
  ];
  return possibleTexts[Math.floor(Math.random() * possibleTexts.length)];
}

function detectLanguage(text: string) {
  // In production, this would use actual language detection
  return "en"; // Simulating English detection
}

function translateText(text: string, fromLang: string, toLang: string) {
  // In production, this would connect to a translation API
  return text; // Return original for simulation
}

function analyzeUrgency(text: string) {
  // Simple keyword-based simulation
  const highUrgencyKeywords = ["emergency", "immediate", "evacuation", "trapped", "danger"];
  const mediumUrgencyKeywords = ["flooding", "fire", "blocked", "approaching"];
  
  const textLower = text.toLowerCase();
  
  for (const keyword of highUrgencyKeywords) {
    if (textLower.includes(keyword)) return "high";
  }
  
  for (const keyword of mediumUrgencyKeywords) {
    if (textLower.includes(keyword)) return "medium";
  }
  
  return "low";
}
