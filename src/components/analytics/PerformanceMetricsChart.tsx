
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  {
    name: 'Jan',
    responseTime: 65,
    resourceEfficiency: 78,
    successRate: 90,
  },
  {
    name: 'Feb',
    responseTime: 59,
    resourceEfficiency: 85,
    successRate: 92,
  },
  {
    name: 'Mar',
    responseTime: 80,
    resourceEfficiency: 81,
    successRate: 88,
  },
  {
    name: 'Apr',
    responseTime: 81,
    resourceEfficiency: 76,
    successRate: 94,
  },
  {
    name: 'May',
    responseTime: 56,
    resourceEfficiency: 85,
    successRate: 91,
  },
  {
    name: 'Jun',
    responseTime: 55,
    resourceEfficiency: 90,
    successRate: 95,
  },
];

const PerformanceMetricsChart = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="responseTime" name="Response Time" fill="#8884d8" />
            <Bar dataKey="resourceEfficiency" name="Resource Efficiency" fill="#82ca9d" />
            <Bar dataKey="successRate" name="Success Rate" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PerformanceMetricsChart;
