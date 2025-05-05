
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bell, MessageSquare, CheckCircle2, AlertTriangle, Phone, SatelliteDish } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AlertProps {
  id: string;
  type: string;
  region: string;
  sent: number;
  delivered: number;
  status: 'active' | 'completed' | 'pending';
  method: 'sms' | 'emergency broadcast' | 'app notification';
  time: string;
}

const AlertItem = ({ id, type, region, sent, delivered, status, method, time }: AlertProps) => {
  const statusColor = {
    active: 'bg-green-500/20 text-green-500',
    completed: 'bg-blue-500/20 text-blue-500',
    pending: 'bg-yellow-500/20 text-yellow-500'
  };

  const methodIcon = {
    'sms': <MessageSquare className="h-3 w-3" />,
    'emergency broadcast': <SatelliteDish className="h-3 w-3" />,
    'app notification': <Bell className="h-3 w-3" />,
  };

  return (
    <div className="border rounded-md p-3 bg-card">
      <div className="flex items-center justify-between">
        <div className="font-medium text-sm">{type}</div>
        <Badge variant="outline" className={`text-xs ${statusColor[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>
      <div className="text-xs text-muted-foreground mt-1">Region: {region}</div>
      <div className="flex justify-between mt-2 text-xs">
        <div className="flex items-center gap-1">
          {methodIcon[method]}
          <span className="capitalize">{method}</span>
        </div>
        <div>
          <span className="text-green-400">{delivered}</span>/{sent} delivered
        </div>
      </div>
      <div className="text-xs text-muted-foreground mt-1">
        Sent {time}
      </div>
    </div>
  );
};

const AlertStatus = () => {
  const navigate = useNavigate();
  
  const alerts = [
    {
      id: 'ALT-001',
      type: 'Evacuation Warning',
      region: 'Riverside County, Eastern Region',
      sent: 12000,
      delivered: 11750,
      status: 'active' as const,
      method: 'sms' as const,
      time: '45 minutes ago'
    },
    {
      id: 'ALT-002',
      type: 'Shelter Location Alert',
      region: 'Riverside County, All Areas',
      sent: 15000,
      delivered: 15000,
      status: 'completed' as const,
      method: 'emergency broadcast' as const,
      time: '2 hours ago'
    },
    {
      id: 'ALT-003',
      type: 'Resource Distribution',
      region: 'Mountain Valley, Western Ridge',
      sent: 5000,
      delivered: 4200,
      status: 'pending' as const,
      method: 'app notification' as const,
      time: '30 minutes ago'
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Bell className="h-5 w-5 text-accent" />
          Alert Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map(alert => (
            <AlertItem key={alert.id} {...alert} />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full text-accent border-accent/20 hover:bg-accent/10"
          onClick={() => navigate('/alerts')}
        >
          Manage Alerts
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AlertStatus;
