
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Database, Check, Clock, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TransactionProps {
  id: string;
  type: string;
  details: string;
  timestamp: string;
  status: 'verified' | 'pending' | 'processing';
  hash: string;
}

const Transaction = ({ id, type, details, timestamp, status, hash }: TransactionProps) => {
  const statusColor = {
    verified: 'bg-green-500/20 text-green-500',
    pending: 'bg-yellow-500/20 text-yellow-500',
    processing: 'bg-blue-500/20 text-blue-500'
  };

  const statusIcon = {
    verified: <Check className="h-3 w-3" />,
    pending: <Clock className="h-3 w-3" />,
    processing: <ShieldCheck className="h-3 w-3" />,
  };

  return (
    <div className="border rounded-md p-3 bg-card">
      <div className="flex items-center justify-between">
        <div className="font-medium text-sm">{type}</div>
        <Badge variant="outline" className={`text-xs ${statusColor[status]} flex items-center gap-1`}>
          {statusIcon[status]}
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>
      <div className="text-xs text-muted-foreground mt-1">{details}</div>
      <div className="mt-2 flex justify-between text-xs">
        <div>{timestamp}</div>
        <div className="text-muted-foreground font-mono">{hash.substring(0, 8)}...</div>
      </div>
    </div>
  );
};

const BlockchainLedger = () => {
  const navigate = useNavigate();
  
  const transactions = [
    {
      id: 'TX-001',
      type: 'Resource Deployment',
      details: 'Water Supplies to Riverside County',
      timestamp: '15:32:45 - 05/05/2025',
      status: 'verified' as const,
      hash: '8f7d56a123b7e9c4'
    },
    {
      id: 'TX-002',
      type: 'Drone Mission',
      details: 'Medical Supplies to Mountain Valley',
      timestamp: '14:58:22 - 05/05/2025',
      status: 'verified' as const,
      hash: '3e7a91c5f0d8b2e6'
    },
    {
      id: 'TX-003',
      type: 'Alert Distribution',
      details: 'Evacuation Alert to Coastal Town',
      timestamp: '14:45:03 - 05/05/2025',
      status: 'pending' as const,
      hash: '5c9e2d1a7f8b6e3d'
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Database className="h-5 w-5 text-accent" />
          Blockchain Ledger
          <div className="ml-auto text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
            16 blocks
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {transactions.map(transaction => (
            <Transaction key={transaction.id} {...transaction} />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full text-accent border-accent/20 hover:bg-accent/10"
          onClick={() => navigate('/blockchain')}
        >
          View Full Ledger
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlockchainLedger;
