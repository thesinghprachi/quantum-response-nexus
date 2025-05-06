import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, PieChart, LineChart, ArrowUp, ArrowDown, 
  Calendar, Clock, Download, Filter, RefreshCw,
  Volume, Cloud
} from 'lucide-react';
import VoiceEmergencyInput from '@/components/analytics/VoiceEmergencyInput';
import SatelliteWeatherData from '@/components/analytics/SatelliteWeatherData';
import { 
  ChartContainer, 
  ChartTooltip
} from '@/components/ui/chart'; 
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, TooltipProps } from 'recharts';

const Analytics = () => {
  // Sample data for the chart
  const responseData = [
    { name: 'Flood', value: 32, fill: '#3b82f6' },
    { name: 'Fire', value: 24, fill: '#ef4444' },
    { name: 'Earthquake', value: 18, fill: '#f59e0b' },
    { name: 'Hurricane', value: 27, fill: '#8b5cf6' },
    { name: 'Landslide', value: 14, fill: '#10b981' },
  ];

  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Response Analytics</h1>
        <p className="text-muted-foreground">
          Performance metrics and insights for disaster response operations
        </p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Last 7 days</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            <span>Refresh</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <MetricCard 
          title="Resources Deployed" 
          value="45,800" 
          change="+12.4%" 
          changeType="increase" 
        />
        <MetricCard 
          title="Response Time (avg)" 
          value="18m" 
          change="-15%" 
          changeType="decrease" 
          goodDecrease={true}
        />
        <MetricCard 
          title="People Assisted" 
          value="37,500" 
          change="+8.2%" 
          changeType="increase" 
        />
        <MetricCard 
          title="Resource Efficiency" 
          value="94%" 
          change="+2.5%" 
          changeType="increase" 
        />
      </div>

      {/* New row for voice input and satellite data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <VoiceEmergencyInput />
        <SatelliteWeatherData />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <BarChart3 className="h-5 w-5 text-accent" />
                Response Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                className="h-80"
                config={{
                  flood: { color: '#3b82f6' },
                  fire: { color: '#ef4444' },
                  earthquake: { color: '#f59e0b' },
                  hurricane: { color: '#8b5cf6' },
                  landslide: { color: '#10b981' },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={responseData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip />
                    <Bar dataKey="value" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Response Efficiency</div>
                  <div className="text-xl font-bold">92%</div>
                  <div className="text-xs text-green-500">+3.5%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Avg. Deployment Time</div>
                  <div className="text-xl font-bold">22 min</div>
                  <div className="text-xs text-red-500">+2 min</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                  <div className="text-xl font-bold">97%</div>
                  <div className="text-xs text-green-500">+1.2%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
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
        </div>
      </div>

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
    </MainLayout>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  goodDecrease?: boolean;
}

const MetricCard = ({ title, value, change, changeType, goodDecrease = false }: MetricCardProps) => {
  const isPositiveChange = (changeType === 'increase' && !goodDecrease) || (changeType === 'decrease' && goodDecrease);
  
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-sm text-muted-foreground">{title}</div>
        <div className="text-2xl font-bold mt-2">{value}</div>
        <div className={`text-xs flex items-center mt-1 ${isPositiveChange ? 'text-green-500' : 'text-red-500'}`}>
          {changeType === 'increase' ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
          {change} from last week
        </div>
      </CardContent>
    </Card>
  );
};

interface ResourceAllocationItemProps {
  name: string;
  percentage: number;
  color: string;
}

const ResourceAllocationItem = ({ name, percentage, color }: ResourceAllocationItemProps) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full w-full overflow-hidden">
        <div className={`h-full ${color} rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

interface PerformanceMetricItemProps {
  name: string;
  value: number;
  previousValue: number;
  unit: string;
  goodDecrease?: boolean;
}

const PerformanceMetricItem = ({ name, value, previousValue, unit, goodDecrease = false }: PerformanceMetricItemProps) => {
  const diff = value - previousValue;
  const isPositive = goodDecrease ? (diff < 0) : (diff > 0);
  
  return (
    <div className="bg-card border rounded-md p-3">
      <div className="text-sm">{name}</div>
      <div className="text-xl font-bold mt-1">
        {value}{unit}
      </div>
      <div className="flex items-center mt-1">
        <div className={`text-xs ${isPositive ? 'text-green-500' : 'text-red-500'} flex items-center`}>
          {diff > 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
          {Math.abs(diff)}{unit} from previous
        </div>
      </div>
    </div>
  );
};

export default Analytics;
