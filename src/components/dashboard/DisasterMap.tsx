
import React from 'react';
import { MapPin, AlertTriangle } from 'lucide-react';

const DisasterMap = () => {
  // This would normally connect to a mapping API like Mapbox or Google Maps
  // For our demo, we'll create a simple map representation

  const disasterPoints = [
    { id: 1, lat: 20, lng: 30, type: 'flood', severity: 'high', name: 'Riverside' },
    { id: 2, lat: 60, lng: 70, type: 'earthquake', severity: 'medium', name: 'Mountain Valley' },
    { id: 3, lat: 80, lng: 20, type: 'fire', severity: 'low', name: 'Forest Junction' },
    { id: 4, lat: 30, lng: 80, type: 'hurricane', severity: 'high', name: 'Coastal Town' },
  ];

  // Determine the color based on severity
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <div className="h-[400px] bg-[#1a2035] relative rounded-lg overflow-hidden map-container">
      {/* Simulated map background with grid */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
        {Array.from({ length: 100 }).map((_, index) => (
          <div key={index} className="border border-muted/30"></div>
        ))}
      </div>
      
      {/* Map disaster points */}
      {disasterPoints.map((point) => (
        <div 
          key={point.id}
          className="absolute z-10 flex flex-col items-center"
          style={{ 
            left: `${point.lng}%`, 
            top: `${point.lat}%`, 
            transform: 'translate(-50%, -50%)' 
          }}
        >
          <div className={`relative ${point.severity === 'high' ? 'disaster-alert' : ''}`}>
            <AlertTriangle 
              size={24} 
              className={`${point.severity === 'high' ? 'text-red-500' : 'text-yellow-500'}`} 
            />
            <span 
              className={`absolute bottom-0 right-0 h-3 w-3 rounded-full ${getSeverityColor(point.severity)}`}>
            </span>
          </div>
          <span className="mt-1 text-xs font-semibold text-white bg-primary/80 px-1 rounded">
            {point.name}
          </span>
        </div>
      ))}

      {/* Simulated drone path */}
      <svg className="absolute inset-0 w-full h-full z-[5]" style={{ pointerEvents: 'none' }}>
        <path 
          d="M 100,200 C 150,150 200,250 300,200" 
          stroke="#38b2ac" 
          strokeWidth="2" 
          strokeDasharray="5,5" 
          fill="none" 
        />
        <path 
          d="M 250,100 C 200,150 350,180 400,120" 
          stroke="#38b2ac" 
          strokeWidth="2" 
          strokeDasharray="5,5" 
          fill="none" 
        />
      </svg>

      {/* Drone icons */}
      <div className="absolute drone-marker animate-float-drone" style={{ left: '300px', top: '200px' }}>
        <div className="h-4 w-4 bg-accent rounded-full"></div>
      </div>
      <div className="absolute drone-marker animate-float-drone" style={{ left: '400px', top: '120px', animationDelay: '1s' }}>
        <div className="h-4 w-4 bg-accent rounded-full"></div>
      </div>

      {/* Map controls */}
      <div className="absolute right-4 top-4 flex flex-col gap-2">
        <button className="w-8 h-8 bg-card/80 rounded-md flex items-center justify-center text-white">+</button>
        <button className="w-8 h-8 bg-card/80 rounded-md flex items-center justify-center text-white">−</button>
      </div>

      {/* Map info */}
      <div className="absolute left-4 bottom-4 bg-card/80 text-white p-2 rounded text-xs">
        <div className="font-semibold">Active Disasters: 4</div>
        <div>Drones Deployed: 2</div>
      </div>
    </div>
  );
};

export default DisasterMap;
