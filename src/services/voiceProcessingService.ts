
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
          command_text: data.text,
          original_language: data.detectedLanguage,
          translated_text: data.translatedText,
          target_language: data.targetLanguage,
          urgency_level: data.urgencyLevel,
          location_data: { lat: 37.7749, lng: -122.4194 }, // This would ideally come from device GPS
          created_at: new Date().toISOString()
        };
        
        resolve(voiceCommandData);
      } catch (error) {
        console.error('Error in processVoiceRecording:', error);
        reject(error);
      }
    };
    
    reader.onerror = (error) => {
      reject(error);
    };
  });
}

export async function saveAndProcessVoiceCommand(audioBlob: Blob) {
  try {
    const voiceCommandData = await processVoiceRecording(audioBlob);
    const { error } = await saveVoiceCommand(voiceCommandData);
    
    if (error) {
      throw error;
    }
    
    return { data: voiceCommandData, error: null };
  } catch (error: any) {
    console.error('Service error:', error);
    return { data: null, error };
  }
}
