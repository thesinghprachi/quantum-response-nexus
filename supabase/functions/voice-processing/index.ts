
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
    const { audioData, sourceLanguage } = await req.json();

    if (!audioData) {
      throw new Error('Audio data is required');
    }

    // In a production environment, you would integrate with a real speech recognition API
    // This is a simulated response for demonstration purposes
    const simulatedResponse = {
      text: "Emergency reported at downtown area. Flooding in progress. Need immediate assistance.",
      detectedLanguage: sourceLanguage || "en",
      translatedText: "Emergency reported at downtown area. Flooding in progress. Need immediate assistance.",
      targetLanguage: "en",
      urgencyLevel: "high",
      confidence: 0.92
    };

    console.log("Processed voice command:", simulatedResponse);
    
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
