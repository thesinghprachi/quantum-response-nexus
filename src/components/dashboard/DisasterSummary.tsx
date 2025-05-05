
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Home, AlertTriangle, HelpingHand } from 'lucide-react';

interface StatItemProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change?: string;
  changeType?: 'increase' | 'decrease';
  color: string;
}

const StatItem = ({ title, value, icon, change, changeType, color }: StatItemProps) => (
  <div className="flex items-center space-x-4">
    <div className={`rounded-full p-3 ${color}`}>
      {icon}
    </div>
    <div>
      <div className="text-sm font-medium text-muted-foreground">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
      {change && (
        <div className={`text-xs ${changeType === 'increase' ? 'text-green-500' : 'text-red-500'} flex items-center`}>
          {changeType === 'increase' ? '↑' : '↓'} {change}
        </div>
      )}
    </div>
  </div>
);

const DisasterSummary = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <AlertTriangle className="h-5 w-5 text-secondary" />
          Disaster Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatItem 
            title="Affected People" 
            value="47,500" 
            icon={<User className="h-5 w-5 text-blue-400" />}
            change="3,200 in last 6 hours"
            changeType="increase"
            color="bg-blue-500/20"
          />
          <StatItem 
            title="Damaged Buildings" 
            value="1,250" 
            icon={<Home className="h-5 w-5 text-yellow-400" />}
            change="120 in last 6 hours"
            changeType="increase"
            color="bg-yellow-500/20"
          />
          <StatItem 
            title="Active Disasters" 
            value="3" 
            icon={<AlertTriangle className="h-5 w-5 text-red-400" />}
            color="bg-red-500/20"
          />
          <StatItem 
            title="Resources Deployed" 
            value="68%" 
            icon={<HelpingHand className="h-5 w-5 text-green-400" />}
            change="12% in last 12 hours"
            changeType="increase"
            color="bg-green-500/20"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default DisasterSummary;
