
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Package, Droplets, LucideIcon, Pill, Tent, Battery, Radio, Sandwich, MapPin, Layers, ChevronDown, Filter } from 'lucide-react';

const ResourceMap = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Resource Allocation Map</h1>
        <p className="text-muted-foreground">
          Real-time tracking and allocation of emergency resources
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <div className="lg:col-span-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <MapPin className="h-5 w-5 text-accent" />
                Resource Map
                <div className="ml-auto flex items-center gap-2">
                  <Button size="sm" variant="outline" className="h-8 flex gap-1">
                    <Layers className="h-4 w-4" />
                    <span>Layers</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="outline" className="h-8 flex gap-1">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[600px] bg-[#1a2035] relative rounded-lg overflow-hidden map-container">
                {/* Simulated map background with grid */}
                <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
                  {Array.from({ length: 100 }).map((_, index) => (
                    <div key={index} className="border border-muted/30"></div>
                  ))}
                </div>

                {/* Resource distribution points */}
                <ResourcePoint 
                  type="water" 
                  position={{ x: 20, y: 30 }} 
                  name="Water Station Alpha" 
                  status="active" 
                />
                <ResourcePoint 
                  type="medical" 
                  position={{ x: 60, y: 40 }} 
                  name="Medical Center" 
                  status="active" 
                />
                <ResourcePoint 
                  type="food" 
                  position={{ x: 30, y: 70 }} 
                  name="Food Distribution" 
                  status="active" 
                />
                <ResourcePoint 
                  type="shelter" 
                  position={{ x: 80, y: 20 }} 
                  name="Emergency Shelter" 
                  status="active" 
                />
                <ResourcePoint 
                  type="water" 
                  position={{ x: 50, y: 60 }} 
                  name="Water Station Beta" 
                  status="scheduled" 
                />

                {/* Drone paths */}
                <svg className="absolute inset-0 w-full h-full z-[5]" style={{ pointerEvents: 'none' }}>
                  <path 
                    d="M 200,200 C 250,250 300,300 400,350" 
                    stroke="#38b2ac" 
                    strokeWidth="2" 
                    strokeDasharray="5,5" 
                    fill="none" 
                  />
                  <path 
                    d="M 500,200 C 450,300 400,350 300,400" 
                    stroke="#38b2ac" 
                    strokeWidth="2" 
                    strokeDasharray="5,5" 
                    fill="none" 
                  />
                </svg>

                {/* Map info */}
                <div className="absolute left-4 bottom-4 bg-card/80 text-white p-2 rounded text-xs">
                  <div className="font-semibold">Resource Points: 5</div>
                  <div>Total Capacity: 15,000 units</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Package className="h-5 w-5 text-accent" />
                Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="allocated">Allocated</TabsTrigger>
                  <TabsTrigger value="available">Available</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="space-y-4 mt-4">
                  <ResourceItem
                    name="Water Supplies"
                    total={1000}
                    allocated={650}
                    Icon={Droplets}
                    color="text-blue-400"
                  />
                  <ResourceItem
                    name="Medical Supplies"
                    total={500}
                    allocated={200}
                    Icon={Pill}
                    color="text-green-400"
                  />
                  <ResourceItem
                    name="Emergency Shelter"
                    total={200}
                    allocated={180}
                    Icon={Tent}
                    color="text-yellow-400"
                  />
                  <ResourceItem
                    name="Food Packs"
                    total={1500}
                    allocated={800}
                    Icon={Sandwich}
                    color="text-orange-400"
                  />
                  <Button variant="outline" size="sm" className="w-full">
                    View All Resources
                  </Button>
                </TabsContent>
                
                <TabsContent value="allocated" className="space-y-4 mt-4">
                  {/* Allocated resources content */}
                  <div className="text-center text-sm text-muted-foreground py-8">
                    Select a resource point on the map to view allocation details
                  </div>
                </TabsContent>
                
                <TabsContent value="available" className="space-y-4 mt-4">
                  {/* Available resources content */}
                  <div className="text-center text-sm text-muted-foreground py-8">
                    Select a resource type to view availability details
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                Blockchain Verification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold">Last verified:</span> 5 minutes ago
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold">Block hash:</span> 8f7d56a1...
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <span className="text-sm text-green-500">Resources verified</span>
                </div>
                <div className="mt-2">
                  <Button variant="outline" size="sm" className="w-full">
                    View Verification Log
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

interface ResourcePointProps {
  type: 'water' | 'medical' | 'food' | 'shelter';
  position: { x: number; y: number };
  name: string;
  status: 'active' | 'scheduled' | 'depleted';
}

const ResourcePoint = ({ type, position, name, status }: ResourcePointProps) => {
  const getColor = () => {
    switch (type) {
      case 'water': return 'bg-blue-500 text-blue-100';
      case 'medical': return 'bg-green-500 text-green-100';
      case 'food': return 'bg-orange-500 text-orange-100';
      case 'shelter': return 'bg-yellow-500 text-yellow-100';
      default: return 'bg-accent text-accent-foreground';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'water': return <Droplets className="h-3 w-3" />;
      case 'medical': return <Pill className="h-3 w-3" />;
      case 'food': return <Sandwich className="h-3 w-3" />;
      case 'shelter': return <Tent className="h-3 w-3" />;
      default: return <Package className="h-3 w-3" />;
    }
  };

  return (
    <div 
      className="absolute z-10 flex flex-col items-center cursor-pointer"
      style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%`, 
        transform: 'translate(-50%, -50%)' 
      }}
    >
      <div className={`h-8 w-8 rounded-full ${getColor()} flex items-center justify-center ${status === 'active' ? 'animate-pulse' : ''}`}>
        {getIcon()}
      </div>
      <span className="mt-1 text-xs font-semibold text-white bg-primary/80 px-1 rounded">
        {name}
      </span>
      {status === 'scheduled' && (
        <span className="mt-1 text-xs bg-yellow-500/20 text-yellow-400 px-1 rounded">
          Scheduled
        </span>
      )}
    </div>
  );
};

interface ResourceItemProps {
  name: string;
  total: number;
  allocated: number;
  Icon: LucideIcon;
  color: string;
}

const ResourceItem = ({ name, total, allocated, Icon, color }: ResourceItemProps) => {
  const percentage = (allocated / total) * 100;
  
  return (
    <div className="p-2 border rounded-md bg-card">
      <div className="flex items-center">
        <div className="rounded-full p-1.5 bg-muted mr-2">
          <Icon className={`h-4 w-4 ${color}`} />
        </div>
        <div className="font-medium text-sm">{name}</div>
      </div>
      <div className="mt-2">
        <div className="flex justify-between text-xs text-muted-foreground mb-1">
          <span>Allocated: {allocated}</span>
          <span>Total: {total}</span>
        </div>
        <div className="h-1.5 bg-muted rounded-full w-full overflow-hidden">
          <div 
            className="h-full bg-accent rounded-full" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ResourceMap;
