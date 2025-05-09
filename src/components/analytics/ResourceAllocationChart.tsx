
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart } from 'lucide-react';
import ResourceAllocationItem from './ResourceAllocationItem';

const ResourceAllocationChart = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <PieChart className="h-5 w-5 text-accent" />
          Resource Allocation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-48 bg-muted rounded-md flex items-center justify-center mb-4">
          <div className="text-center">
            <PieChart className="h-12 w-12 mx-auto text-muted-foreground/50 mb-2" />
            <p className="text-muted-foreground text-sm">
              Pie chart visualization would display here
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <ResourceAllocationItem
            name="Water Supplies"
            percentage={35}
            color="bg-blue-500"
          />
          <ResourceAllocationItem
            name="Medical Kits"
            percentage={20}
            color="bg-green-500"
          />
          <ResourceAllocationItem
            name="Food Supplies"
            percentage={30}
            color="bg-orange-500"
          />
          <ResourceAllocationItem
            name="Shelter Equipment"
            percentage={15}
            color="bg-yellow-500"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceAllocationChart;
