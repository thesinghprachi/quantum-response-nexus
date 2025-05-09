
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3 } from 'lucide-react';
import { ChartContainer } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ChartTooltip } from 'recharts';

interface PerformanceMetricsChartProps {
  data: Array<{
    name: string;
    value: number;
    fill: string;
  }>;
}

const PerformanceMetricsChart = ({ data }: PerformanceMetricsChartProps) => {
  return (
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
            <BarChart data={data}>
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
  );
};

export default PerformanceMetricsChart;
