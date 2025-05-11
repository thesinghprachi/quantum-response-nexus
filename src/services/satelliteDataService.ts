
import { supabase } from "@/integrations/supabase/client";
import { SatelliteData } from "@/types/database";

export const saveSatelliteData = async (satelliteData: SatelliteData) => {
  try {
    const { data, error } = await supabase
      .from('satellite_data')
      .insert(satelliteData)
      .select().single();
    
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
      .select()
      .order('created_at', { ascending: false });
    
    if (error) {
      throw error;
    }
    
    return { data, error: null };
  } catch (error) {
    console.error('Error getting satellite data:', error);
    return { data: null, error };
  }
};

export const fetchSatelliteAnalysis = async (location: {name: string, coordinates: {lat: number, lng: number}}, dataType: string) => {
  try {
    const { data, error } = await supabase.functions.invoke('satellite-data', {
      body: { location, dataType }
    });
    
    if (error) {
      throw error;
    }
    
    // Store the fetched data in the database
    if (data) {
      await saveSatelliteData(data as SatelliteData);
    }
    
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching satellite analysis:', error);
    return { data: null, error };
  }
};
