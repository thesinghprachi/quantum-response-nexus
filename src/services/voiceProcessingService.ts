
import { VoiceCommand } from '@/types/database';
import { saveVoiceCommand } from '@/services/voiceCommandService';

export async function processVoiceRecording(audioBlob: Blob) {
  // Convert blob to base64 for sending to the API
  return new Promise<VoiceCommand>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(audioBlob);
    reader.onloadend = async () => {
      try {
        const base64Audio = reader.result?.toString().split(',')[1];
        
        // Simulated response for demo purposes
        const simulatedResponse = {
          text: "Flooding reported in southwest sector. Roads blocked. Need immediate evacuation assistance.",
          detectedLanguage: "en",
          translatedText: "Flooding reported in southwest sector. Roads blocked. Need immediate evacuation assistance.",
          targetLanguage: "en",
          urgencyLevel: "high"
        };
        
        // Create command data
        const voiceCommandData: VoiceCommand = {
          id: crypto.randomUUID(),
          command_text: simulatedResponse.text,
          original_language: simulatedResponse.detectedLanguage,
          translated_text: simulatedResponse.translatedText,
          target_language: simulatedResponse.targetLanguage,
          urgency_level: simulatedResponse.urgencyLevel,
          location_data: { lat: 37.7749, lng: -122.4194 }, // Simulated location
        };
        
        resolve(voiceCommandData);
      } catch (error) {
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
  } catch (error) {
    console.error('Service error:', error);
    return { data: null, error };
  }
}
