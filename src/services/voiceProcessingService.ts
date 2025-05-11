
import { VoiceCommand } from '@/types/database';
import { saveVoiceCommand } from '@/services/voiceCommandService';
import { supabase } from "@/integrations/supabase/client";

export async function processVoiceRecording(audioBlob: Blob) {
  // Convert blob to base64 for sending to the API
  return new Promise<VoiceCommand>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(audioBlob);
    reader.onloadend = async () => {
      try {
        const base64Audio = reader.result?.toString().split(',')[1];
        
        if (!base64Audio) {
          throw new Error('Failed to encode audio data');
        }
        
        // Call our Supabase Edge Function
        const { data, error } = await supabase.functions.invoke('voice-processing', {
          body: {
            audioData: base64Audio,
            sourceLanguage: 'auto' // Auto-detect language
          }
        });
        
        if (error) {
          console.error('Edge function error:', error);
          throw new Error(error.message || 'Error processing voice command');
        }
        
        if (!data) {
          throw new Error('No data returned from voice processing');
        }
        
        // Create command data from the response
        const voiceCommandData: VoiceCommand = {
          id: crypto.randomUUID(),
          command_text: data.text || "No text detected",
          original_language: data.detectedLanguage || "en",
          translated_text: data.translatedText,
          target_language: data.targetLanguage,
          urgency_level: data.urgencyLevel || "low",
          location_data: { lat: 37.7749, lng: -122.4194 }, // This would ideally come from device GPS
          created_at: new Date().toISOString()
        };
        
        resolve(voiceCommandData);
      } catch (error: any) {
        console.error('Error in processVoiceRecording:', error.message || error);
        reject(error.message || error);
      }
    };
    
    reader.onerror = (error) => {
      console.error('File reader error:', error);
      reject('Failed to read audio file');
    };
  });
}

export async function saveAndProcessVoiceCommand(audioBlob: Blob) {
  try {
    const voiceCommandData = await processVoiceRecording(audioBlob);
    
    const { data, error } = await saveVoiceCommand(voiceCommandData);
    
    if (error) {
      console.error('Error saving processed voice command:', error);
      throw new Error(error.toString());
    }
    
    return { data: voiceCommandData, error: null };
  } catch (error: any) {
    console.error('Service error in saveAndProcessVoiceCommand:', error.message || error);
    return { data: null, error: error.message || "Unknown error processing voice command" };
  }
}
