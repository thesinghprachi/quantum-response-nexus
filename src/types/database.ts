
export interface VoiceCommand {
  id: string;
  user_id?: string;
  command_text: string;
  original_language: string;
  translated_text?: string;
  target_language?: string;
  urgency_level?: string;
  location_data?: { lat: number; lng: number };
  processed?: boolean;
  created_at?: string;
}

export interface SatelliteData {
  id: string;
  location_name?: string;
  coordinates: { lat: number; lng: number };
  data_type: string;
  risk_level?: string;
  imagery_url?: string;
  prediction_data?: {
    flood_probability?: number;
    landslide_probability?: number;
    safe_evacuation_routes?: Array<{
      path: Array<[number, number]>;
      risk: string;
    }>;
  };
  created_at?: string;
  updated_at?: string;
}
