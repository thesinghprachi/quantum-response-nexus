
import { supabase } from "@/integrations/supabase/client";
import { SatelliteData } from "@/types/database";

export const saveSatelliteData = async (satelliteData: SatelliteData) => {
  try {
    const { data, error } = await supabase
      .from('satellite_data')
      .insert(satelliteData);
    
    if (error) {
      throw error;
    }
    
    return { data, error: null };
  } catch (error) {
    console.error('Error saving satellite data:', error);
    return { data: null, error };
  }
};

export const getSatelliteData = async () => {
  try {
    const { data, error } = await supabase
      .from('satellite_data')
      .select();
    
    if (error) {
      throw error;
    }
    
    return { data, error: null };
  } catch (error) {
    console.error('Error getting satellite data:', error);
    return { data: null, error };
  }
};
