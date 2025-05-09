
import React from 'react';
import MetricCard from './MetricCard';

const MetricCardsSection = () => {
  return (
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
  );
};

export default MetricCardsSection;
