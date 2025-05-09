
import { supabase } from "@/integrations/supabase/client";
import { VoiceCommand } from "@/types/database";

export const saveVoiceCommand = async (voiceCommand: VoiceCommand) => {
  try {
    const { data, error } = await supabase
      .from('voice_commands')
      .insert(voiceCommand);
    
    if (error) {
      throw error;
    }
    
    return { data, error: null };
  } catch (error) {
    console.error('Error saving voice command:', error);
    return { data: null, error };
  }
};

export const getVoiceCommands = async () => {
  try {
    const { data, error } = await supabase
      .from('voice_commands')
      .select();
    
    if (error) {
      throw error;
    }
    
    return { data, error: null };
  } catch (error) {
    console.error('Error getting voice commands:', error);
    return { data: null, error };
  }
};
