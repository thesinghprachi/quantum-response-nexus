
import React from 'react';

interface ResourceAllocationItemProps {
  name: string;
  percentage: number;
  color: string;
}

const ResourceAllocationItem = ({ name, percentage, color }: ResourceAllocationItemProps) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full w-full overflow-hidden">
        <div className={`h-full ${color} rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default ResourceAllocationItem;
