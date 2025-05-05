
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, MessageSquare, CheckCircle2, AlertTriangle, Phone, SatelliteDish, Users, Map, Send } from 'lucide-react';

const Alerts = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Alert Management System</h1>
        <p className="text-muted-foreground">
          Create and manage emergency alerts for disaster areas
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bell className="h-5 w-5 text-accent" />
                Active Alerts
                <div className="ml-auto">
                  <Button className="bg-accent hover:bg-accent/80">
                    <Bell className="h-4 w-4 mr-1" />
                    Create Alert
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <AlertItem
                  id="ALT-001"
                  type="Evacuation Warning"
                  region="Riverside County, Eastern Region"
                  sent={12000}
                  delivered={11750}
                  status="active"
                  method="sms"
                  time="45 minutes ago"
                  severity="high"
                  message="URGENT: Evacuation required for all residents in Eastern Riverside County due to rising flood levels. Proceed to designated shelters immediately."
                />
                
                <AlertItem
                  id="ALT-002"
                  type="Shelter Location Alert"
                  region="Riverside County, All Areas"
                  sent={15000}
                  delivered={15000}
                  status="completed"
                  method="emergency broadcast"
                  time="2 hours ago"
                  severity="medium"
                  message="Emergency shelters are open at: 1) Riverside Community Center, 2) Eastern High School, 3) County Hospital Complex. All have supplies, medical aid, and space available."
                />
                
                <AlertItem
                  id="ALT-003"
                  type="Resource Distribution"
                  region="Mountain Valley, Western Ridge"
                  sent={5000}
                  delivered={4200}
                  status="pending"
                  method="app notification"
                  time="30 minutes ago"
                  severity="medium"
                  message="Water and food supplies will be distributed at Mountain Valley Town Square today from 2pm-7pm. Please bring ID if possible."
                />
                
                <AlertItem
                  id="ALT-004"
                  type="Aftershock Warning"
                  region="Mountain Valley, All Areas"
                  sent={8000}
                  delivered={7850}
                  status="active"
                  method="sms"
                  time="15 minutes ago"
                  severity="high"
                  message="ALERT: Possible aftershocks expected in Mountain Valley region in the next 24 hours. Take precautions and stay away from damaged structures."
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                Alert Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col items-center justify-center bg-card border p-3 rounded-md">
                    <div className="text-sm text-muted-foreground">Total Alerts</div>
                    <div className="text-2xl font-bold mt-1">12</div>
                    <div className="text-xs text-muted-foreground">Last 24h</div>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-card border p-3 rounded-md">
                    <div className="text-sm text-muted-foreground">Active</div>
                    <div className="text-2xl font-bold mt-1 text-secondary">4</div>
                    <div className="text-xs text-muted-foreground">Ongoing</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Delivery Rate</h4>
                  <div className="h-2 bg-muted rounded-full w-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>38,800 / 40,000 delivered</span>
                    <span>96%</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Delivery Methods</h4>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <div className="text-muted-foreground">SMS: 65%</div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="text-muted-foreground">App: 20%</div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="text-muted-foreground">Broadcast: 15%</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                Quick Alert Templates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-card border rounded-md p-3 hover:border-accent cursor-pointer transition-colors">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-secondary" />
                    <div className="text-sm font-medium">Evacuation Order</div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Immediate evacuation notice with directions to nearest shelter
                  </div>
                </div>
                
                <div className="bg-card border rounded-md p-3 hover:border-accent cursor-pointer transition-colors">
                  <div className="flex items-center gap-2">
                    <Map className="h-4 w-4 text-blue-500" />
                    <div className="text-sm font-medium">Shelter Locations</div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    List of emergency shelters with addresses and facilities
                  </div>
                </div>
                
                <div className="bg-card border rounded-md p-3 hover:border-accent cursor-pointer transition-colors">
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-green-500" />
                    <div className="text-sm font-medium">Resource Distribution</div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Information about aid distribution points and times
                  </div>
                </div>
                
                <div className="bg-card border rounded-md p-3 hover:border-accent cursor-pointer transition-colors">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <div className="text-sm font-medium">Weather Warning</div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Severe weather warning with safety instructions
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg">
            Create New Alert
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Alert Title</label>
                <input 
                  type="text" 
                  className="w-full bg-muted rounded-md p-2 text-sm border border-border" 
                  placeholder="Enter alert title"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Alert Type</label>
                <select className="w-full bg-muted rounded-md p-2 text-sm border border-border">
                  <option>Evacuation Order</option>
                  <option>Weather Warning</option>
                  <option>Resource Distribution</option>
                  <option>Shelter Information</option>
                  <option>Safety Instructions</option>
                  <option>All Clear</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Target Region</label>
                <select className="w-full bg-muted rounded-md p-2 text-sm border border-border">
                  <option>All Regions</option>
                  <option>Riverside County</option>
                  <option>Mountain Valley</option>
                  <option>Coastal Town</option>
                  <option>Forest Junction</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Severity</label>
                <select className="w-full bg-muted rounded-md p-2 text-sm border border-border">
                  <option>High - Emergency</option>
                  <option>Medium - Warning</option>
                  <option>Low - Advisory</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Delivery Methods</label>
                <div className="flex gap-2">
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-1" defaultChecked />
                    SMS
                  </label>
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-1" defaultChecked />
                    App
                  </label>
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-1" />
                    Broadcast
                  </label>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Alert Message</label>
              <textarea 
                className="w-full min-h-[120px] bg-muted rounded-md p-2 text-sm border border-border" 
                placeholder="Enter alert message content"
              ></textarea>
            </div>
            
            <div className="flex justify-end gap-3">
              <Button variant="outline">Save Draft</Button>
              <Button variant="secondary">Preview</Button>
              <Button className="bg-accent hover:bg-accent/80">
                <Send className="h-4 w-4 mr-1" />
                Send Alert
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

interface AlertItemProps {
  id: string;
  type: string;
  region: string;
  sent: number;
  delivered: number;
  status: 'active' | 'completed' | 'pending';
  method: 'sms' | 'emergency broadcast' | 'app notification';
  time: string;
  severity: 'high' | 'medium' | 'low';
  message: string;
}

const AlertItem = ({ id, type, region, sent, delivered, status, method, time, severity, message }: AlertItemProps) => {
  const statusColor = {
    active: 'bg-green-500/20 text-green-500',
    completed: 'bg-blue-500/20 text-blue-500',
    pending: 'bg-yellow-500/20 text-yellow-500'
  };

  const severityColor = {
    high: 'bg-red-500/20 text-red-500',
    medium: 'bg-yellow-500/20 text-yellow-500',
    low: 'bg-green-500/20 text-green-500'
  };

  const methodIcon = {
    'sms': <MessageSquare className="h-4 w-4" />,
    'emergency broadcast': <SatelliteDish className="h-4 w-4" />,
    'app notification': <Bell className="h-4 w-4" />,
  };

  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="bg-card border rounded-md p-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-medium flex items-center gap-2">
            {type}
            <Badge variant="outline" className={`${severityColor[severity]} ml-2`}>
              {severity.charAt(0).toUpperCase() + severity.slice(1)}
            </Badge>
          </h3>
          <div className="text-sm text-muted-foreground">Region: {region}</div>
        </div>
        <Badge variant="outline" className={`${statusColor[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>

      <div className={`text-sm ${expanded ? '' : 'line-clamp-2'}`}>
        {message}
      </div>
      
      {message.length > 100 && (
        <button 
          className="text-xs text-accent mt-1" 
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show less' : 'Show more'}
        </button>
      )}

      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="bg-muted/50 p-2 rounded-md">
          <div className="text-xs text-muted-foreground">Delivery</div>
          <div className="text-sm font-medium">
            {delivered}/{sent} ({Math.round((delivered/sent) * 100)}%)
          </div>
        </div>
        <div className="bg-muted/50 p-2 rounded-md flex items-center">
          <div className="mr-2">{methodIcon[method]}</div>
          <div>
            <div className="text-xs text-muted-foreground">Method</div>
            <div className="text-sm font-medium capitalize">
              {method === 'emergency broadcast' ? 'Broadcast' : method === 'app notification' ? 'App' : method}
            </div>
          </div>
        </div>
        <div className="bg-muted/50 p-2 rounded-md">
          <div className="text-xs text-muted-foreground">Sent</div>
          <div className="text-sm font-medium">{time}</div>
        </div>
      </div>
      
      <div className="flex justify-end mt-3 gap-2">
        <Button variant="ghost" size="sm" className="h-7 text-xs px-2">
          <Users className="h-3 w-3 mr-1" />
          Recipients
        </Button>
        <Button variant="ghost" size="sm" className="h-7 text-xs px-2">
          <Bell className="h-3 w-3 mr-1" />
          Resend
        </Button>
        <Button variant="ghost" size="sm" className="h-7 text-xs px-2">
          <AlertTriangle className="h-3 w-3 mr-1" />
          Revoke
        </Button>
      </div>
    </div>
  );
};

export default Alerts;
