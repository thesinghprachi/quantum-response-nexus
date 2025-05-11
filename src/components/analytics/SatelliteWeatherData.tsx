import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Cloud, Search, Download, RefreshCw } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { SatelliteData } from '@/types/database';
import { fetchSatelliteAnalysis } from '@/services/satelliteDataService';

const SatelliteWeatherData = () => {
  const [loading, setLoading] = useState(false);
  const [dataType, setDataType] = useState('flood');
  const [satelliteData, setSatelliteData] = useState<SatelliteData | null>(null);
  const { toast } = useToast();

  const fetchSatelliteData = async () => {
    setLoading(true);
    try {
      // In a real app, you would use the actual location from device GPS
      const location = {
        name: "San Francisco Bay Area",
        coordinates: { lat: 37.7749, lng: -122.4194 }
      };

      const { data, error } = await fetchSatelliteAnalysis(location, dataType);
      
      if (error) {
        throw error;
      }
      
      if (data) {
        setSatelliteData(data as SatelliteData);
        
        toast({
          title: "Satellite data retrieved",
          description: `${dataType.charAt(0).toUpperCase() + dataType.slice(1)} risk analysis complete`,
        });
      }
    } catch (error: any) {
      console.error('Error fetching satellite data:', error);
      toast({
        variant: "destructive",
        title: "Error retrieving satellite data",
        description: error.message || "An unknown error occurred",
      });
    } finally {
      setLoading(false);
    }
  };

  const getRiskColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-blue-500';
    }
  };

  const formatProbability = (value: number) => {
    return `${(value * 100).toFixed(1)}%`;
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Cloud className="h-5 w-5 text-accent" />
          Satellite Weather Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Select value={dataType} onValueChange={setDataType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select data type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="flood">Flood Risk</SelectItem>
                <SelectItem value="landslide">Landslide Risk</SelectItem>
                <SelectItem value="fire">Fire Spread</SelectItem>
                <SelectItem value="hurricane">Hurricane Path</SelectItem>
              </SelectContent>
            </Select>
            
            <Button onClick={fetchSatelliteData} disabled={loading}>
              {loading ? <RefreshCw className="h-4 w-4 animate-spin mr-2" /> : <Search className="h-4 w-4 mr-2" />}
              {loading ? "Analyzing..." : "Analyze"}
            </Button>
          </div>
          
          {satelliteData && (
            <div className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="text-sm text-muted-foreground mb-2">Location: {satelliteData.location_name}</div>
                <div className="flex items-center mb-2">
                  <span className="text-sm text-muted-foreground mr-2">Risk Level:</span>
                  <Badge className={getRiskColor(satelliteData.risk_level || 'low')}>
                    {satelliteData.risk_level?.toUpperCase()}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {dataType === 'flood' && satelliteData.prediction_data?.flood_probability !== undefined && (
                    <div className="bg-primary/20 p-2 rounded">
                      <div className="text-xs text-muted-foreground">Flood Probability</div>
                      <div className="text-lg font-semibold">
                        {formatProbability(satelliteData.prediction_data.flood_probability)}
                      </div>
                    </div>
                  )}
                  
                  {dataType === 'landslide' && satelliteData.prediction_data?.landslide_probability !== undefined && (
                    <div className="bg-primary/20 p-2 rounded">
                      <div className="text-xs text-muted-foreground">Landslide Probability</div>
                      <div className="text-lg font-semibold">
                        {formatProbability(satelliteData.prediction_data.landslide_probability)}
                      </div>
                    </div>
                  )}
                  
                  <div className="bg-primary/20 p-2 rounded">
                    <div className="text-xs text-muted-foreground">Safe Routes</div>
                    <div className="text-lg font-semibold">
                      {satelliteData.prediction_data?.safe_evacuation_routes?.length || 0}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-40 bg-card border rounded flex items-center justify-center relative">
                <div className="text-center">
                  <Cloud className="h-8 w-8 mx-auto text-muted-foreground/50 mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Satellite imagery visualization would display here
                  </p>
                </div>
                <Button variant="outline" size="sm" className="absolute bottom-2 right-2">
                  <Download className="h-3 w-3 mr-1" /> Download
                </Button>
              </div>
              
              <div className="text-xs text-muted-foreground">
                Data processed through quantum algorithm for disaster prediction
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SatelliteWeatherData;
