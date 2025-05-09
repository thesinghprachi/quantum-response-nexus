
import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface PerformanceMetricItemProps {
  name: string;
  value: number;
  previousValue: number;
  unit: string;
  goodDecrease?: boolean;
}

const PerformanceMetricItem = ({ name, value, previousValue, unit, goodDecrease = false }: PerformanceMetricItemProps) => {
  const diff = value - previousValue;
  const isPositive = goodDecrease ? (diff < 0) : (diff > 0);
  
  return (
    <div className="bg-card border rounded-md p-3">
      <div className="text-sm">{name}</div>
      <div className="text-xl font-bold mt-1">
        {value}{unit}
      </div>
      <div className="flex items-center mt-1">
        <div className={`text-xs ${isPositive ? 'text-green-500' : 'text-red-500'} flex items-center`}>
          {diff > 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
          {Math.abs(diff)}{unit} from previous
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetricItem;
