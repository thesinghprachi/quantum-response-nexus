
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Home, 
  MapPin, 
  Radar, 
  Drone, 
  MessageSquare, 
  Database, 
  Settings, 
  HelpCircle 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Radar, label: 'Disaster Prediction', path: '/prediction' },
    { icon: MapPin, label: 'Resource Map', path: '/resource-map' },
    { icon: Drone, label: 'Drone Control', path: '/drone-control' },
    { icon: MessageSquare, label: 'Alerts', path: '/alerts' },
    { icon: Database, label: 'Blockchain Ledger', path: '/blockchain' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: HelpCircle, label: 'Help', path: '/help' },
  ];

  return (
    <aside
      className={cn(
        'fixed left-0 top-16 bottom-0 z-40 bg-card border-r border-border transition-all duration-300 ease-in-out',
        isOpen ? 'w-64' : 'w-16'
      )}
    >
      <div className="flex flex-col h-full py-4">
        <nav className="space-y-1 px-2">
          {menuItems.map((item) => (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                'flex items-center py-2 px-3 rounded-lg cursor-pointer transition-colors',
                location.pathname === item.path
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <item.icon size={20} className="min-w-5" />
              {isOpen && <span className="ml-3 whitespace-nowrap">{item.label}</span>}
            </div>
          ))}
        </nav>
        
        <div className="mt-auto px-2">
          <div className="p-3 bg-muted/30 rounded-lg">
            {isOpen ? (
              <div className="text-xs text-muted-foreground">
                <p className="font-semibold text-accent">Quantum Processing</p>
                <p>Status: Online</p>
                <div className="w-full bg-muted rounded-full h-1.5 mt-2">
                  <div className="bg-accent h-1.5 rounded-full w-3/4"></div>
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <div className="h-2 w-2 rounded-full bg-accent"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
