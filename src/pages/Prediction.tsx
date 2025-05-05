
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Radar, AlertTriangle, Play, Pause, RefreshCw, Download } from 'lucide-react';

const Prediction = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Quantum AI Disaster Prediction</h1>
        <p className="text-muted-foreground">
          Advanced prediction system utilizing quantum computing algorithms
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Radar className="h-5 w-5 text-accent" />
            Prediction Controls
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Region Selection</label>
              <select className="w-full bg-muted rounded-md p-2 text-sm border border-border">
                <option>All Regions</option>
                <option>Riverside County</option>
                <option>Mountain Valley</option>
                <option>Coastal Town</option>
                <option>Forest Junction</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Disaster Type</label>
              <select className="w-full bg-muted rounded-md p-2 text-sm border border-border">
                <option>All Types</option>
                <option>Flood</option>
                <option>Earthquake</option>
                <option>Fire</option>
                <option>Hurricane</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Time Horizon</label>
              <select className="w-full bg-muted rounded-md p-2 text-sm border border-border">
                <option>24 Hours</option>
                <option>48 Hours</option>
                <option>72 Hours</option>
                <option>1 Week</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Prediction Actions</label>
              <div className="flex gap-2">
                <Button size="sm" className="bg-accent hover:bg-accent/80 flex-1">
                  <Play className="h-4 w-4 mr-1" />
                  Run
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <RefreshCw className="h-4 w-4 mr-1" />
                  Update
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="relative">
                  <div className="h-5 w-5 rounded-full quantum-animation"></div>
                  <div className="absolute inset-0 animate-ping h-5 w-5 rounded-full bg-accent/30"></div>
                </div>
                Quantum Processing Visualization
                <div className="ml-auto flex items-center gap-2">
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Pause className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-card border rounded-md h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block p-8 rounded-full quantum-animation mb-4"></div>
                  <div className="max-w-md">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-accent">
                          Quantum Processing
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-accent">
                          67%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-muted">
                      <div style={{ width: "67%" }} className="quantum-animation rounded"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      The quantum algorithm is currently processing environmental data, satellite imagery, 
                      and geological patterns to predict potential disaster occurrences.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertTriangle className="h-5 w-5 text-secondary" />
                Prediction Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="high" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="high">High Risk</TabsTrigger>
                  <TabsTrigger value="medium">Medium</TabsTrigger>
                  <TabsTrigger value="low">Low Risk</TabsTrigger>
                </TabsList>
                
                <TabsContent value="high" className="space-y-4 mt-4">
                  <PredictionItem 
                    type="Flash Flood" 
                    location="Northeastern Valley"
                    probability={87}
                    timeframe="12-24 hours"
                    impact="High - Critical infrastructure affected"
                  />
                  <PredictionItem 
                    type="Hurricane Intensification" 
                    location="Coastal Town"
                    probability={83}
                    timeframe="36-48 hours"
                    impact="High - Storm surge likely"
                  />
                </TabsContent>
                
                <TabsContent value="medium" className="space-y-4 mt-4">
                  <PredictionItem 
                    type="Aftershock" 
                    location="Mountain Valley"
                    probability={63}
                    timeframe="36-48 hours"
                    impact="Medium - Potential structure damage"
                  />
                  <PredictionItem 
                    type="Landslide" 
                    location="Western Ridge"
                    probability={58}
                    timeframe="48-72 hours"
                    impact="Medium - Major roads affected"
                  />
                </TabsContent>
                
                <TabsContent value="low" className="space-y-4 mt-4">
                  <PredictionItem 
                    type="Power Outage" 
                    location="Forest Junction"
                    probability={34}
                    timeframe="24-48 hours"
                    impact="Low - Temporary disruption"
                  />
                  <PredictionItem 
                    type="Minor Flooding" 
                    location="Southern Peninsula"
                    probability={22}
                    timeframe="48-72 hours"
                    impact="Low - Limited areas affected"
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg">
            Prediction Data Sources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <DataSource 
              name="Weather Satellite Data" 
              status="Connected"
              lastUpdate="5 minutes ago"
              reliability={98}
            />
            <DataSource 
              name="Geological Sensors" 
              status="Connected"
              lastUpdate="2 minutes ago"
              reliability={95}
            />
            <DataSource 
              name="Historical Disaster DB" 
              status="Connected"
              lastUpdate="1 hour ago"
              reliability={99}
            />
            <DataSource 
              name="River Level Sensors" 
              status="Connected"
              lastUpdate="30 seconds ago"
              reliability={97}
            />
          </div>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

interface PredictionItemProps {
  type: string;
  location: string;
  probability: number;
  timeframe: string;
  impact: string;
}

const PredictionItem = ({ type, location, probability, timeframe, impact }: PredictionItemProps) => {
  const getColorByProbability = (prob: number) => {
    if (prob > 80) return 'text-red-500';
    if (prob > 50) return 'text-yellow-500';
    return 'text-green-500';
  };

  return (
    <div className="bg-card border rounded-md p-3">
      <div className="flex justify-between items-start">
        <h4 className="font-medium">{type}</h4>
        <div className={`text-sm font-bold ${getColorByProbability(probability)}`}>
          {probability}%
        </div>
      </div>
      <div className="text-sm text-muted-foreground">Location: {location}</div>
      <div className="text-sm text-muted-foreground">Expected: {timeframe}</div>
      <div className="mt-2 text-xs flex items-center gap-1">
        <AlertTriangle className="h-3 w-3 text-secondary" />
        <span>{impact}</span>
      </div>
    </div>
  );
};

interface DataSourceProps {
  name: string;
  status: string;
  lastUpdate: string;
  reliability: number;
}

const DataSource = ({ name, status, lastUpdate, reliability }: DataSourceProps) => {
  return (
    <div className="bg-card border rounded-md p-3">
      <div className="flex justify-between">
        <h4 className="font-medium text-sm">{name}</h4>
        <div className="flex items-center">
          <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
          <span className="text-xs text-green-500">{status}</span>
        </div>
      </div>
      <div className="text-xs text-muted-foreground mt-2">Last update: {lastUpdate}</div>
      <div className="mt-2">
        <div className="flex mb-1 items-center justify-between">
          <span className="text-xs text-muted-foreground">Reliability</span>
          <span className="text-xs font-medium">{reliability}%</span>
        </div>
        <div className="overflow-hidden h-1 mb-1 text-xs flex rounded bg-muted">
          <div style={{ width: `${reliability}%` }} className="bg-accent rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
