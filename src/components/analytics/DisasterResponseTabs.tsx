
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PerformanceMetricItem from './PerformanceMetricItem';

const DisasterResponseTabs = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <LineChart className="h-5 w-5 text-accent" />
          Response Performance by Disaster Type
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="flood" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="flood">Flood</TabsTrigger>
            <TabsTrigger value="earthquake">Earthquake</TabsTrigger>
            <TabsTrigger value="fire">Fire</TabsTrigger>
            <TabsTrigger value="hurricane">Hurricane</TabsTrigger>
          </TabsList>
          
          <TabsContent value="flood" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="h-64 bg-muted rounded-md flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="h-12 w-12 mx-auto text-muted-foreground/50 mb-2" />
                    <p className="text-muted-foreground">
                      Trend chart visualization would display here
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-4">
                  <PerformanceMetricItem
                    name="Evacuation Efficiency"
                    value={92}
                    previousValue={87}
                    unit="%"
                  />
                  <PerformanceMetricItem
                    name="Resource Deployment"
                    value={24}
                    previousValue={32}
                    unit="min"
                    goodDecrease={true}
                  />
                  <PerformanceMetricItem
                    name="Alert Response"
                    value={98.5}
                    previousValue={96.0}
                    unit="%"
                  />
                  <PerformanceMetricItem
                    name="Affected People Helped"
                    value={96}
                    previousValue={92}
                    unit="%"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="earthquake" className="mt-4">
            <div className="text-center text-muted-foreground py-12">
              Earthquake response performance data would be displayed here
            </div>
          </TabsContent>
          
          <TabsContent value="fire" className="mt-4">
            <div className="text-center text-muted-foreground py-12">
              Fire response performance data would be displayed here
            </div>
          </TabsContent>
          
          <TabsContent value="hurricane" className="mt-4">
            <div className="text-center text-muted-foreground py-12">
              Hurricane response performance data would be displayed here
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DisasterResponseTabs;
