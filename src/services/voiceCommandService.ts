
import { supabase } from "@/integrations/supabase/client";
import { VoiceCommand } from "@/types/database";

export const saveVoiceCommand = async (voiceCommand: VoiceCommand) => {
  try {
    const { data, error } = await supabase
      .from('voice_commands')
      .insert(voiceCommand)
      .select()
      .single();
    
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
      .select()
      .order('created_at', { ascending: false });
    
    if (error) {
      throw error;
    }
    
    return { data, error: null };
  } catch (error) {
    console.error('Error getting voice commands:', error);
    return { data: null, error };
  }
};

export const getRecentHighUrgencyCommands = async (limit = 5) => {
  try {
    const { data, error } = await supabase
      .from('voice_commands')
      .select()
      .eq('urgency_level', 'high')
      .order('created_at', { ascending: false })
      .limit(limit);
    
    if (error) {
      throw error;
    }
    
    return { data, error: null };
  } catch (error) {
    console.error('Error getting high urgency commands:', error);
    return { data: null, error };
  }
};
