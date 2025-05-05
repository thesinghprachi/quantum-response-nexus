
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Database, Check, Clock, ShieldCheck, Search, FileText, Package, Filter, ArrowUpDown, Download } from 'lucide-react';

const Blockchain = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Blockchain Resource Ledger</h1>
        <p className="text-muted-foreground">
          Transparent tracking of disaster response resource allocation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <div className="lg:col-span-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Database className="h-5 w-5 text-accent" />
                Blockchain Transactions
                <div className="ml-auto flex items-center gap-2">
                  <div className="relative">
                    <Search className="h-4 w-4 absolute left-2 top-2 text-muted-foreground" />
                    <input 
                      type="text" 
                      placeholder="Search transactions..." 
                      className="bg-muted pl-8 pr-4 py-1 text-sm rounded-md w-64 border border-border" 
                    />
                  </div>
                  <Button size="sm" variant="outline" className="h-8">
                    <Filter className="h-4 w-4 mr-1" />
                    Filter
                  </Button>
                  <Button size="sm" variant="outline" className="h-8">
                    <Download className="h-4 w-4 mr-1" />
                    Export
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <div className="grid grid-cols-12 gap-4 py-2 px-3 text-sm font-medium text-muted-foreground">
                  <div className="col-span-2">Timestamp</div>
                  <div className="col-span-2">Transaction ID</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-3">Details</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-1 text-right">Actions</div>
                </div>
                
                {transactions.map((transaction) => (
                  <TransactionRow key={transaction.id} transaction={transaction} />
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-muted-foreground">
                  Showing 1-10 of 86 transactions
                </div>
                <div className="flex gap-1">
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0" disabled>
                    &lt;
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-accent/10">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    3
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    &gt;
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <ShieldCheck className="h-5 w-5 text-accent" />
                Blockchain Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col items-center justify-center bg-card border p-3 rounded-md">
                  <div className="text-sm text-muted-foreground">Current Block</div>
                  <div className="text-2xl font-bold mt-1">21,458</div>
                  <div className="text-xs text-green-500">Fully Synced</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Network Status</span>
                    <span className="text-green-500 flex items-center">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-1"></span>
                      Healthy
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Nodes Connected</span>
                    <span>12/12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Last Block Time</span>
                    <span>1 min ago</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Consensus</span>
                    <span>100%</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Block Production</h4>
                  <div className="h-2 bg-muted rounded-full w-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full animate-pulse" style={{ width: '85%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>85% of capacity</span>
                    <span>~3s block time</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                Verification Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Search className="h-4 w-4 mr-2" />
                  Verify Transaction
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Package className="h-4 w-4 mr-2" />
                  Track Resource
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Database className="h-4 w-4 mr-2" />
                  View Network
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg">
            Resource Allocation Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="distribution">Distribution</TabsTrigger>
              <TabsTrigger value="validation">Validation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard 
                  title="Total Transactions"
                  value="86"
                  change="+12"
                  changeType="increase"
                />
                <StatCard 
                  title="Resources Tracked"
                  value="45,800 units"
                  change="+3,200"
                  changeType="increase"
                />
                <StatCard 
                  title="Delivery Success"
                  value="98.5%"
                  change="+0.3%"
                  changeType="increase"
                />
                <StatCard 
                  title="Verification Time"
                  value="2.4 seconds"
                  change="-0.3s"
                  changeType="decrease"
                />
              </div>
              
              <div className="mt-6">
                <h3 className="text-sm font-medium mb-3">Resource Distribution by Type</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <ResourceTypeCard
                    type="Water Supplies"
                    amount={15000}
                    percentage={35}
                    color="bg-blue-500"
                  />
                  <ResourceTypeCard
                    type="Medical Supplies"
                    amount={8500}
                    percentage={20}
                    color="bg-green-500"
                  />
                  <ResourceTypeCard
                    type="Food Supplies"
                    amount={12800}
                    percentage={30}
                    color="bg-orange-500"
                  />
                  <ResourceTypeCard
                    type="Shelter Equipment"
                    amount={6500}
                    percentage={15}
                    color="bg-yellow-500"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="distribution" className="mt-4">
              <div className="text-center text-sm text-muted-foreground py-8">
                Distribution data visualization would be displayed here
              </div>
            </TabsContent>
            
            <TabsContent value="validation" className="mt-4">
              <div className="text-center text-sm text-muted-foreground py-8">
                Validation metrics and analysis would be displayed here
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

interface Transaction {
  id: string;
  timestamp: string;
  type: string;
  details: string;
  status: 'verified' | 'pending' | 'processing';
  hash: string;
}

const transactions: Transaction[] = [
  {
    id: 'TX-001',
    timestamp: '05/05/2025 15:32:45',
    type: 'Resource Deployment',
    details: 'Water Supplies to Riverside County',
    status: 'verified',
    hash: '8f7d56a123b7e9c4'
  },
  {
    id: 'TX-002',
    timestamp: '05/05/2025 14:58:22',
    type: 'Drone Mission',
    details: 'Medical Supplies to Mountain Valley',
    status: 'verified',
    hash: '3e7a91c5f0d8b2e6'
  },
  {
    id: 'TX-003',
    timestamp: '05/05/2025 14:45:03',
    type: 'Alert Distribution',
    details: 'Evacuation Alert to Coastal Town',
    status: 'pending',
    hash: '5c9e2d1a7f8b6e3d'
  },
  {
    id: 'TX-004',
    timestamp: '05/05/2025 14:23:18',
    type: 'Resource Allocation',
    details: 'Emergency Shelter Setup at Community Center',
    status: 'verified',
    hash: '2a6b3c9e7d4f8a1b'
  },
  {
    id: 'TX-005',
    timestamp: '05/05/2025 13:56:42',
    type: 'Prediction Analysis',
    details: 'Quantum AI Flood Risk Assessment',
    status: 'processing',
    hash: '9d7c3b5a2e1f6g4h'
  },
  {
    id: 'TX-006',
    timestamp: '05/05/2025 13:32:07',
    type: 'Drone Mission',
    details: 'Surveillance of Damaged Infrastructure',
    status: 'verified',
    hash: '4h8g9f2d5s6a7q3w'
  },
  {
    id: 'TX-007',
    timestamp: '05/05/2025 13:14:53',
    type: 'Resource Deployment',
    details: 'Food Supplies to Evacuation Centers',
    status: 'verified',
    hash: '7j4k8l2m5n9p6q3r'
  },
  {
    id: 'TX-008',
    timestamp: '05/05/2025 12:47:21',
    type: 'Alert Distribution',
    details: 'Weather Warning Update to All Regions',
    status: 'verified',
    hash: '3s6d9f4g7h2j5k8l'
  },
  {
    id: 'TX-009',
    timestamp: '05/05/2025 12:23:59',
    type: 'Resource Allocation',
    details: 'Medical Team Deployment to Field Hospital',
    status: 'verified',
    hash: '8m5n2p7q4r1s3t6u'
  },
  {
    id: 'TX-010',
    timestamp: '05/05/2025 12:01:33',
    type: 'Infrastructure Assessment',
    details: 'Bridge Structural Integrity Evaluation',
    status: 'verified',
    hash: '5v8w1x4y7z2a3b6c'
  }
];

interface TransactionRowProps {
  transaction: Transaction;
}

const TransactionRow = ({ transaction }: TransactionRowProps) => {
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
    <div className="grid grid-cols-12 gap-4 py-3 px-3 border border-muted rounded-md mb-2 text-sm hover:bg-card">
      <div className="col-span-2">{transaction.timestamp}</div>
      <div className="col-span-2 font-mono">{transaction.id}</div>
      <div className="col-span-2">{transaction.type}</div>
      <div className="col-span-3">{transaction.details}</div>
      <div className="col-span-2">
        <Badge variant="outline" className={`${statusColor[transaction.status]} flex items-center gap-1`}>
          {statusIcon[transaction.status]}
          {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
        </Badge>
      </div>
      <div className="col-span-1 text-right">
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
          <Search className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
}

const StatCard = ({ title, value, change, changeType }: StatCardProps) => {
  return (
    <div className="bg-card border rounded-md p-4">
      <div className="text-sm text-muted-foreground">{title}</div>
      <div className="text-2xl font-bold mt-2">{value}</div>
      <div className={`text-xs ${changeType === 'increase' ? 'text-green-500' : 'text-red-500'} flex items-center mt-1`}>
        {changeType === 'increase' ? '↑' : '↓'} {change} from yesterday
      </div>
    </div>
  );
};

interface ResourceTypeCardProps {
  type: string;
  amount: number;
  percentage: number;
  color: string;
}

const ResourceTypeCard = ({ type, amount, percentage, color }: ResourceTypeCardProps) => {
  return (
    <div className="bg-card border rounded-md p-4">
      <div className="text-sm font-medium">{type}</div>
      <div className="text-xl font-bold mt-1">{amount.toLocaleString()} units</div>
      <div className="mt-2">
        <div className="h-2 bg-muted rounded-full w-full overflow-hidden">
          <div className={`h-full ${color} rounded-full`} style={{ width: `${percentage}%` }}></div>
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          {percentage}% of total resources
        </div>
      </div>
    </div>
  );
};

export default Blockchain;
