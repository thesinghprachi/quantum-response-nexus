
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/analytics/PageHeader';
import FilterBar from '@/components/analytics/FilterBar';
import MetricCardsSection from '@/components/analytics/MetricCardsSection';
import VoiceEmergencyInput from '@/components/analytics/VoiceEmergencyInput';
import SatelliteWeatherData from '@/components/analytics/SatelliteWeatherData';
import PerformanceMetricsChart from '@/components/analytics/PerformanceMetricsChart';
import ResourceAllocationChart from '@/components/analytics/ResourceAllocationChart';
import DisasterResponseTabs from '@/components/analytics/DisasterResponseTabs';

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
      <PageHeader />
      <FilterBar />
      <MetricCardsSection />

      {/* Voice input and satellite data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <VoiceEmergencyInput />
        <SatelliteWeatherData />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <PerformanceMetricsChart data={responseData} />
        </div>
        <div>
          <ResourceAllocationChart />
        </div>
      </div>

      <DisasterResponseTabs />
    </MainLayout>
  );
};

export default Analytics;
