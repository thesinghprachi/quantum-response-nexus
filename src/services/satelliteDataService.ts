
import { supabase } from "@/integrations/supabase/client";
import { SatelliteData } from "@/types/database";

export const saveSatelliteData = async (satelliteData: SatelliteData) => {
  try {
    // Ensure the data has all required fields
    if (!satelliteData.coordinates || !satelliteData.data_type) {
      throw new Error("Missing required fields: coordinates and data_type are required");
    }
    
    const { data, error } = await supabase
      .from('satellite_data')
      .insert(satelliteData)
      .select().single();
    
    if (error) {
      console.error('Supabase error saving satellite data:', error);
      throw error;
    }
    
    return { data, error: null };
  } catch (error: any) {
    console.error('Error saving satellite data:', error.message || error);
    return { data: null, error: error.message || "Unknown error saving satellite data" };
  }
};

export const getSatelliteData = async () => {
  try {
    const { data, error } = await supabase
      .from('satellite_data')
      .select()
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Supabase error getting satellite data:', error);
      throw error;
    }
    
    return { data, error: null };
  } catch (error: any) {
    console.error('Error getting satellite data:', error.message || error);
    return { data: null, error: error.message || "Unknown error retrieving satellite data" };
  }
};

export const fetchSatelliteAnalysis = async (location: {name: string, coordinates: {lat: number, lng: number}}, dataType: string) => {
  try {
    if (!location || !location.coordinates || !dataType) {
      throw new Error("Missing required parameters: location and dataType are required");
    }
    
    const { data, error } = await supabase.functions.invoke('satellite-data', {
      body: { location, dataType }
    });
    
    if (error) {
      console.error('Edge function error:', error);
      throw error;
    }
    
    // Validate the response from the edge function
    if (!data) {
      throw new Error("No data returned from satellite analysis");
    }
    
    // Store the fetched data in the database
    const saveResult = await saveSatelliteData(data as SatelliteData);
    
    if (saveResult.error) {
      console.warn('Warning: Successfully retrieved satellite data but failed to save it:', saveResult.error);
    }
    
    return { data, error: null };
  } catch (error: any) {
    console.error('Error fetching satellite analysis:', error.message || error);
    return { data: null, error: error.message || "Unknown error in satellite analysis" };
  }
};
