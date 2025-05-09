
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  goodDecrease?: boolean;
}

const MetricCard = ({ title, value, change, changeType, goodDecrease = false }: MetricCardProps) => {
  const isPositiveChange = (changeType === 'increase' && !goodDecrease) || (changeType === 'decrease' && goodDecrease);
  
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-sm text-muted-foreground">{title}</div>
        <div className="text-2xl font-bold mt-2">{value}</div>
        <div className={`text-xs flex items-center mt-1 ${isPositiveChange ? 'text-green-500' : 'text-red-500'}`}>
          {changeType === 'increase' ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
          {change} from last week
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
