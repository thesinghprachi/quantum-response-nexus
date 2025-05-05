import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Bell, Package as PackageIcon } from 'lucide-react';

const Alerts = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Alerts & Notifications</h1>
        <p className="text-muted-foreground">
          Stay informed about critical events and system updates.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-yellow-500" />
              Recent Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <AlertCircle className="h-4 w-4 mt-1 text-red-500" />
                <div>
                  <p className="text-sm font-medium">
                    High Priority: Drone #DR-101 Offline
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Reported 5 minutes ago. Possible connection issue.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <PackageIcon className="h-4 w-4 mt-1 text-blue-500" />
                <div>
                  <p className="text-sm font-medium">
                    Resource Request: Medical Supplies Needed
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Requested by Riverside County. Urgency: High.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="h-4 w-4 mt-1 text-yellow-500" />
                <div>
                  <p className="text-sm font-medium">
                    Warning: Impending Storm in Mountain Valley
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Expected to hit in 3 hours. Prepare for evacuation.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-green-500" />
              System Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Bell className="h-4 w-4 mt-1 text-green-500" />
                <div>
                  <p className="text-sm font-medium">
                    Drone #DR-102: Battery Level Critical
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Returning to base for immediate charging.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Bell className="h-4 w-4 mt-1 text-green-500" />
                <div>
                  <p className="text-sm font-medium">
                    System Update: Blockchain Ledger Synced
                  </p>
                  <p className="text-xs text-muted-foreground">
                    All transactions verified and secured.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Bell className="h-4 w-4 mt-1 text-green-500" />
                <div>
                  <p className="text-sm font-medium">
                    Resource Map: Updated with Real-time Data
                  </p>
                  <p className="text-xs text-muted-foreground">
                    New resource locations added. Check for availability.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Alerts;
