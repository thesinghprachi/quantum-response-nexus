
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plane, Battery, Package, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DroneItemProps {
  id: string;
  model: string;
  status: 'active' | 'returning' | 'charging' | 'maintenance';
  battery: number;
  payload: string;
  mission: string;
  lastPing: string;
}

const DroneItem = ({ id, model, status, battery, payload, mission, lastPing }: DroneItemProps) => {
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
    <div className="border rounded-md p-3 bg-card">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Plane className="h-5 w-5 text-accent mr-2" />
          <span className="font-medium">{id}</span>
        </div>
        <Badge variant="outline" className={`text-xs ${statusColor[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>
      <div className="mt-2 text-xs text-muted-foreground">
        <div className="grid grid-cols-2 gap-1">
          <div>Model: {model}</div>
          <div className="flex items-center">
            Battery: 
            <Battery className={`h-3 w-3 ml-1 ${batteryColor}`} /> 
            <span className={`ml-1 ${batteryColor}`}>{battery}%</span>
          </div>
          <div>Payload: {payload}</div>
          <div>Last Ping: {lastPing}</div>
        </div>
        <div className="mt-1">Mission: {mission}</div>
      </div>
    </div>
  );
};

const DroneStatus = () => {
  const navigate = useNavigate();
  
  const drones = [
    {
      id: 'DR-101',
      model: 'Quantum Eagle X1',
      status: 'active' as const,
      battery: 78,
      payload: 'Water Supplies',
      mission: 'Delivering to Riverside County',
      lastPing: '2 minutes ago'
    },
    {
      id: 'DR-102',
      model: 'Quantum Eagle X1',
      status: 'returning' as const,
      battery: 45,
      payload: 'Medical Kit',
      mission: 'Returning from Mountain Valley',
      lastPing: '5 minutes ago'
    },
    {
      id: 'DR-103',
      model: 'Quantum Falcon S2',
      status: 'charging' as const,
      battery: 22,
      payload: 'None',
      mission: 'Standby',
      lastPing: '30 minutes ago'
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Plane className="h-5 w-5 text-accent" />
          Drone Fleet Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {drones.map(drone => (
            <DroneItem key={drone.id} {...drone} />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full text-accent border-accent/20 hover:bg-accent/10"
          onClick={() => navigate('/drone-control')}
        >
          Manage Drone Fleet
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DroneStatus;
