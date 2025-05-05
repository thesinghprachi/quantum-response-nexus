
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Drone, Battery, Package, AlertCircle, RefreshCw, Plus, BarChart3, Zap, Map, Wrench } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const DroneControl = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Autonomous Drone Control</h1>
        <p className="text-muted-foreground">
          Manage and monitor drone fleet for disaster response
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Drone className="h-5 w-5 text-accent" />
                Active Drone Missions
                <div className="ml-auto flex gap-2">
                  <Button size="sm" variant="outline">
                    <RefreshCw className="h-4 w-4 mr-1" />
                    Refresh
                  </Button>
                  <Button size="sm" className="bg-accent hover:bg-accent/80">
                    <Plus className="h-4 w-4 mr-1" />
                    New Mission
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DroneCard
                  id="DR-101"
                  model="Quantum Eagle X1"
                  status="active"
                  battery={78}
                  mission="Delivering Water Supplies to Riverside County"
                  lastUpdate="2 minutes ago"
                  altitude="120m"
                  speed="45 km/h"
                />
                <DroneCard
                  id="DR-102"
                  model="Quantum Eagle X1"
                  status="returning"
                  battery={45}
                  mission="Returning from Medical Supply Delivery"
                  lastUpdate="5 minutes ago"
                  altitude="90m"
                  speed="50 km/h"
                />
                <DroneCard
                  id="DR-103"
                  model="Quantum Falcon S2"
                  status="charging"
                  battery={22}
                  mission="Standby for Next Mission"
                  lastUpdate="30 minutes ago"
                  altitude="0m"
                  speed="0 km/h"
                />
                <DroneCard
                  id="DR-104"
                  model="Quantum Falcon S2"
                  status="maintenance"
                  battery={95}
                  mission="Scheduled Maintenance Check"
                  lastUpdate="1 hour ago"
                  altitude="0m"
                  speed="0 km/h"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <BarChart3 className="h-5 w-5 text-accent" />
                Fleet Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col items-center justify-center bg-card border p-3 rounded-md">
                    <div className="text-sm text-muted-foreground">Total Drones</div>
                    <div className="text-2xl font-bold mt-1">8</div>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-card border p-3 rounded-md">
                    <div className="text-sm text-muted-foreground">Active</div>
                    <div className="text-2xl font-bold mt-1 text-green-500">2</div>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-card border p-3 rounded-md">
                    <div className="text-sm text-muted-foreground">Charging</div>
                    <div className="text-2xl font-bold mt-1 text-yellow-500">4</div>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-card border p-3 rounded-md">
                    <div className="text-sm text-muted-foreground">Maintenance</div>
                    <div className="text-2xl font-bold mt-1 text-red-500">2</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Battery Status</h4>
                  <div className="h-2 bg-muted rounded-full w-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Average: 60%</span>
                    <span>4 drones charging</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">System Health</h4>
                  <div className="h-2 bg-muted rounded-full w-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>All systems operational</span>
                    <span>95%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="justify-start">
                  <Map className="h-4 w-4 mr-2" />
                  View Map
                </Button>
                <Button variant="outline" className="justify-start">
                  <Zap className="h-4 w-4 mr-2" />
                  Emergency Recall
                </Button>
                <Button variant="outline" className="justify-start">
                  <Package className="h-4 w-4 mr-2" />
                  Load Resources
                </Button>
                <Button variant="outline" className="justify-start">
                  <Wrench className="h-4 w-4 mr-2" />
                  Diagnostics
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg">
            Drone Command Center
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="mission" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mission">Mission Planning</TabsTrigger>
              <TabsTrigger value="telemetry">Telemetry Data</TabsTrigger>
              <TabsTrigger value="payload">Payload Management</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mission" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">Mission Type</label>
                  <select className="w-full bg-muted rounded-md p-2 text-sm border border-border">
                    <option>Resource Delivery</option>
                    <option>Surveillance</option>
                    <option>Search and Rescue</option>
                    <option>Infrastructure Assessment</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Drone</label>
                  <select className="w-full bg-muted rounded-md p-2 text-sm border border-border">
                    <option>DR-103 (Charging)</option>
                    <option>DR-105 (Ready)</option>
                    <option>DR-106 (Ready)</option>
                    <option>DR-107 (Ready)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Target Location</label>
                  <select className="w-full bg-muted rounded-md p-2 text-sm border border-border">
                    <option>Riverside County</option>
                    <option>Mountain Valley</option>
                    <option>Coastal Town</option>
                    <option>Forest Junction</option>
                    <option>Custom Coordinates</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Flight Altitude</label>
                  <select className="w-full bg-muted rounded-md p-2 text-sm border border-border">
                    <option>100m (Standard)</option>
                    <option>50m (Low Altitude)</option>
                    <option>150m (High Altitude)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Priority Level</label>
                  <select className="w-full bg-muted rounded-md p-2 text-sm border border-border">
                    <option>Normal</option>
                    <option>High Priority</option>
                    <option>Emergency</option>
                  </select>
                </div>
                <div className="md:col-span-3 flex justify-end mt-2">
                  <Button className="bg-accent hover:bg-accent/80">
                    Schedule Mission
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="telemetry" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card border rounded-md p-3">
                  <h3 className="font-medium text-sm mb-3">Real-time Telemetry Data</h3>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">GPS Coordinates:</div>
                      <div>34.0522° N, 118.2437° W</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">Altitude:</div>
                      <div>120m</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">Ground Speed:</div>
                      <div>45 km/h</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">Battery Level:</div>
                      <div>78%</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">Signal Strength:</div>
                      <div>98%</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">Wind Speed:</div>
                      <div>8 km/h</div>
                    </div>
                  </div>
                </div>
                <div className="bg-card border rounded-md p-3">
                  <h3 className="font-medium text-sm mb-3">Environmental Data</h3>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">Temperature:</div>
                      <div>24°C</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">Humidity:</div>
                      <div>65%</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">Pressure:</div>
                      <div>1013 hPa</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">Visibility:</div>
                      <div>Good</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">Air Quality:</div>
                      <div>Moderate</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">Precipitation:</div>
                      <div>None</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="payload" className="mt-4">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Payload Type</label>
                    <select className="w-full bg-muted rounded-md p-2 text-sm border border-border">
                      <option>Water Supplies</option>
                      <option>Medical Kits</option>
                      <option>Food Packs</option>
                      <option>Communication Equipment</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Quantity</label>
                    <input 
                      type="number" 
                      className="w-full bg-muted rounded-md p-2 text-sm border border-border" 
                      placeholder="Enter quantity"
                      defaultValue={10}
                      min={1} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Weight (kg)</label>
                    <input 
                      type="number" 
                      className="w-full bg-muted rounded-md p-2 text-sm border border-border" 
                      placeholder="Enter weight"
                      defaultValue={5}
                      step={0.1}
                      min={0.1} 
                    />
                  </div>
                </div>
                
                <div className="bg-card border rounded-md p-3">
                  <h3 className="font-medium text-sm mb-2">Current Payload Status</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                    <div className="flex flex-col items-center justify-center bg-muted p-2 rounded-md">
                      <Drone className="h-5 w-5 text-accent mb-1" />
                      <div className="text-xs text-muted-foreground">Max Capacity</div>
                      <div className="text-sm font-medium">15 kg</div>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-muted p-2 rounded-md">
                      <Package className="h-5 w-5 text-blue-400 mb-1" />
                      <div className="text-xs text-muted-foreground">Current Load</div>
                      <div className="text-sm font-medium">8 kg</div>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-muted p-2 rounded-md">
                      <Battery className="h-5 w-5 text-green-400 mb-1" />
                      <div className="text-xs text-muted-foreground">Flight Range</div>
                      <div className="text-sm font-medium">45 km</div>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-muted p-2 rounded-md">
                      <Zap className="h-5 w-5 text-yellow-400 mb-1" />
                      <div className="text-xs text-muted-foreground">Est. Flight Time</div>
                      <div className="text-sm font-medium">40 min</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">Clear Payload</Button>
                  <Button className="bg-accent hover:bg-accent/80">Load Payload</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

interface DroneCardProps {
  id: string;
  model: string;
  status: 'active' | 'returning' | 'charging' | 'maintenance';
  battery: number;
  mission: string;
  lastUpdate: string;
  altitude: string;
  speed: string;
}

const DroneCard = ({ id, model, status, battery, mission, lastUpdate, altitude, speed }: DroneCardProps) => {
  const statusColor = {
    active: 'bg-green-500/20 text-green-500',
    returning: 'bg-blue-500/20 text-blue-500',
    charging: 'bg-yellow-500/20 text-yellow-500',
    maintenance: 'bg-red-500/20 text-red-500'
  };

  const batteryColor = battery > 70 
    ? 'text-green-500' 
    : battery > 30 
    ? 'text-yellow-500' 
    : 'text-red-500';

  return (
    <div className="bg-card border rounded-md p-4">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <div className={`${status === 'active' || status === 'returning' ? 'animate-float-drone' : ''} mr-2`}>
            <Drone className="h-5 w-5 text-accent" />
          </div>
          <div>
            <div className="font-medium">{id}</div>
            <div className="text-xs text-muted-foreground">{model}</div>
          </div>
        </div>
        <Badge variant="outline" className={`${statusColor[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>
      
      <div className="mb-3">
        <div className="text-sm font-medium mb-1">Mission</div>
        <div className="text-xs text-muted-foreground">{mission}</div>
      </div>
      
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="bg-muted/50 p-2 rounded-md">
          <div className="text-xs text-muted-foreground">Battery</div>
          <div className={`text-sm font-medium flex items-center ${batteryColor}`}>
            <Battery className="h-3 w-3 mr-1" />
            {battery}%
          </div>
        </div>
        <div className="bg-muted/50 p-2 rounded-md">
          <div className="text-xs text-muted-foreground">Altitude</div>
          <div className="text-sm font-medium">{altitude}</div>
        </div>
        <div className="bg-muted/50 p-2 rounded-md">
          <div className="text-xs text-muted-foreground">Speed</div>
          <div className="text-sm font-medium">{speed}</div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="text-xs text-muted-foreground">
          Updated {lastUpdate}
        </div>
        <Button variant="ghost" size="sm" className="h-7 text-xs px-2">
          Details
        </Button>
      </div>
    </div>
  );
};

export default DroneControl;
