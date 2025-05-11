
import { supabase } from "@/integrations/supabase/client";
import { VoiceCommand } from "@/types/database";

export const saveVoiceCommand = async (voiceCommand: VoiceCommand) => {
  try {
    // Validate the required fields for a voice command
    if (!voiceCommand.command_text || !voiceCommand.original_language) {
      throw new Error("Missing required fields: command_text and original_language are required");
    }
    
    const { data, error } = await supabase
      .from('voice_commands')
      .insert(voiceCommand)
      .select()
      .single();
    
    if (error) {
      console.error('Supabase error saving voice command:', error);
      throw error;
    }
    
    return { data, error: null };
  } catch (error: any) {
    console.error('Error saving voice command:', error.message || error);
    return { data: null, error: error.message || "Unknown error saving voice command" };
  }
};

export const getVoiceCommands = async () => {
  try {
    const { data, error } = await supabase
      .from('voice_commands')
      .select()
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Supabase error getting voice commands:', error);
      throw error;
    }
    
    return { data, error: null };
  } catch (error: any) {
    console.error('Error getting voice commands:', error.message || error);
    return { data: null, error: error.message || "Unknown error retrieving voice commands" };
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
      console.error('Supabase error getting high urgency commands:', error);
      throw error;
    }
    
    return { data, error: null };
  } catch (error: any) {
    console.error('Error getting high urgency commands:', error.message || error);
    return { data: null, error: error.message || "Unknown error retrieving urgent commands" };
  }
};
