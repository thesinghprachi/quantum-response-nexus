
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Droplets, Gauge, Wind } from 'lucide-react';

const QuickPulse = () => (
  <div className="animate-pulse flex space-x-4">
    <div className="flex-1 space-y-4 py-1">
      <div className="h-4 bg-accent/20 rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-accent/20 rounded"></div>
        <div className="h-4 bg-accent/20 rounded w-5/6"></div>
      </div>
    </div>
  </div>
);

const DisasterPrediction = () => {
  return (
    <Tabs defaultValue="current" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="current">Current</TabsTrigger>
        <TabsTrigger value="predicted">Quantum Predicted</TabsTrigger>
        <TabsTrigger value="historical">Historical</TabsTrigger>
      </TabsList>
      
      <TabsContent value="current">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <AlertTriangle className="h-5 w-5 text-secondary" />
              Current Disasters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <DisasterAlert
                type="Flood"
                location="Riverside County, Eastern Region"
                severity="High"
                impact="12,000 residents affected, 3 critical infrastructure points compromised"
                icon={<Droplets className="h-5 w-5 text-blue-400" />}
                color="blue"
              />
              
              <DisasterAlert
                type="Earthquake"
                location="Mountain Valley, Western Ridge"
                severity="Medium"
                impact="Potential damage to 5,000 structures, roads may be affected"
                icon={<Gauge className="h-5 w-5 text-yellow-400" />}
                color="yellow"
              />

              <DisasterAlert
                type="Hurricane"
                location="Coastal Town, Southern Peninsula"
                severity="High"
                impact="25,000 residents in evacuation zone, critical power infrastructure at risk"
                icon={<Wind className="h-5 w-5 text-red-400" />}
                color="red"
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="predicted">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-lg">
              <div className="relative mr-2">
                <div className="h-5 w-5 rounded-full quantum-animation"></div>
                <div className="absolute inset-0 animate-ping h-5 w-5 rounded-full bg-accent/30"></div>
              </div>
              Quantum AI Predictions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <DisasterAlert
                type="Flash Flood"
                location="Northeastern Valley, Highland County"
                severity="High (87% probability)"
                impact="Estimated 8,000-10,000 residents at risk, critical infrastructure endangered"
                icon={<Droplets className="h-5 w-5 text-blue-400" />}
                color="blue"
                predicted={true}
                timeframe="12-24 hours"
              />
              
              <DisasterAlert
                type="Aftershock"
                location="Mountain Valley, Western Ridge"
                severity="Medium (63% probability)"
                impact="Potential damage to already weakened structures"
                icon={<Gauge className="h-5 w-5 text-yellow-400" />}
                color="yellow"
                predicted={true}
                timeframe="36-48 hours"
              />
              
              <div className="mt-4">
                <h4 className="text-sm font-medium text-accent mb-1">Quantum Processing Analysis</h4>
                <QuickPulse />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="historical">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Historical Disaster Log</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold">May 2nd, 2025:</span> Flood in Riverside County, 10,000 affected
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold">April 15th, 2025:</span> Earthquake in Mountain Region, 5.2 magnitude
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold">March 28th, 2025:</span> Wildfire in Northern Forest, 2,000 acres
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold">February 10th, 2025:</span> Severe storm, coastal flooding
              </div>
            </div>
            <div className="mt-4 text-accent text-sm font-medium cursor-pointer">View full disaster history →</div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

interface DisasterAlertProps {
  type: string;
  location: string;
  severity: string;
  impact: string;
  icon: React.ReactNode;
  color: string;
  predicted?: boolean;
  timeframe?: string;
}

const DisasterAlert = ({ type, location, severity, impact, icon, color, predicted = false, timeframe }: DisasterAlertProps) => {
  return (
    <div className={`border-l-4 ${color === 'red' ? 'border-red-500' : color === 'yellow' ? 'border-yellow-500' : 'border-blue-500'} p-3 bg-card rounded-r-md`}>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-medium">{type}</span>
        </div>
        <div className={`text-xs px-2 py-1 rounded-full ${color === 'red' ? 'bg-red-500/20 text-red-300' : color === 'yellow' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-blue-500/20 text-blue-300'}`}>
          {severity}
        </div>
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{location}</div>
      {predicted && timeframe && (
        <div className="mt-1 text-xs text-accent">Predicted timeframe: {timeframe}</div>
      )}
      <div className="mt-2 text-xs">{impact}</div>
    </div>
  );
};

export default DisasterPrediction;
