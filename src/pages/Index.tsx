
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Grid, Gauge } from 'lucide-react';
import DisasterMap from '@/components/dashboard/DisasterMap';
import DisasterPrediction from '@/components/dashboard/DisasterPrediction';
import DisasterSummary from '@/components/dashboard/DisasterSummary';
import ResourceAllocation from '@/components/dashboard/ResourceAllocation';
import DroneStatus from '@/components/dashboard/DroneStatus';
import AlertStatus from '@/components/dashboard/AlertStatus';
import BlockchainLedger from '@/components/dashboard/BlockchainLedger';

const Index = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Emergency Response Dashboard</h1>
        <p className="text-muted-foreground">
          Real-time disaster management and resource coordination
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <DisasterSummary />
        </div>
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <Gauge className="h-5 w-5 mr-2 text-accent" />
              <h2 className="font-medium">System Status</h2>
            </div>
            <div className="flex items-center">
              <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              <span className="text-xs text-muted-foreground">All systems operational</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col items-center justify-center bg-card p-3 rounded-md border">
              <div className="text-sm text-muted-foreground">Quantum Processor</div>
              <div className="text-xl font-bold mt-1">98%</div>
              <div className="text-xs text-green-500">Optimal</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-card p-3 rounded-md border">
              <div className="text-sm text-muted-foreground">Blockchain</div>
              <div className="text-xl font-bold mt-1">100%</div>
              <div className="text-xs text-green-500">Synced</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-card p-3 rounded-md border">
              <div className="text-sm text-muted-foreground">Drone Network</div>
              <div className="text-xl font-bold mt-1">95%</div>
              <div className="text-xs text-green-500">Active</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-card p-3 rounded-md border">
              <div className="text-sm text-muted-foreground">Alert System</div>
              <div className="text-xl font-bold mt-1">100%</div>
              <div className="text-xs text-green-500">Operational</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <Grid className="h-5 w-5 mr-2 text-accent" />
              <h2 className="font-medium">Disaster Map</h2>
            </div>
          </div>
          <DisasterMap />
        </div>
        <div>
          <DisasterPrediction />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ResourceAllocation />
        <DroneStatus />
        <AlertStatus />
        <BlockchainLedger />
      </div>
    </MainLayout>
  );
};

export default Index;
