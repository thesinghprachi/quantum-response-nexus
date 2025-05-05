
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Package, Droplets, LucideIcon, Pill, 
  Tent, Battery, Radio, Sandwich 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ResourceItemProps {
  name: string;
  total: number;
  allocated: number;
  remaining: number;
  Icon: LucideIcon;
  color: string;
  location: string;
}

const ResourceItem = ({ name, total, allocated, remaining, Icon, color, location }: ResourceItemProps) => {
  const percentage = (allocated / total) * 100;
  
  return (
    <div className="flex items-center p-3 border rounded-md bg-card">
      <div className={`rounded-full p-2 ${color}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="ml-3 flex-1">
        <div className="flex justify-between">
          <div className="font-medium text-sm">{name}</div>
          <div className="text-xs text-muted-foreground">{remaining} remaining</div>
        </div>
        <div className="text-xs text-muted-foreground mb-1">Deployed to: {location}</div>
        <Progress value={percentage} className="h-1" />
      </div>
    </div>
  );
};

const ResourceAllocation = () => {
  const navigate = useNavigate();
  
  const resources = [
    {
      name: 'Water Supplies',
      total: 1000,
      allocated: 650,
      remaining: 350,
      Icon: Droplets,
      color: 'bg-blue-500/20 text-blue-400',
      location: 'Riverside County'
    },
    {
      name: 'Medical Supplies',
      total: 500,
      allocated: 200,
      remaining: 300,
      Icon: Pill,
      color: 'bg-green-500/20 text-green-400',
      location: 'Mountain Valley'
    },
    {
      name: 'Emergency Shelter',
      total: 200,
      allocated: 180,
      remaining: 20,
      Icon: Tent,
      color: 'bg-yellow-500/20 text-yellow-400',
      location: 'Riverside & Coastal'
    },
    {
      name: 'Food Packs',
      total: 1500,
      allocated: 800,
      remaining: 700,
      Icon: Sandwich,
      color: 'bg-orange-500/20 text-orange-400',
      location: 'All Affected Areas'
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Package className="h-5 w-5 text-accent" />
          Resource Allocation
          <div className="ml-auto text-xs px-2 py-1 bg-primary/20 rounded-full text-primary-foreground">
            Blockchain Verified
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {resources.map((resource, index) => (
            <ResourceItem key={index} {...resource} />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full text-accent border-accent/20 hover:bg-accent/10"
          onClick={() => navigate('/resource-map')}
        >
          View All Resources
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceAllocation;
