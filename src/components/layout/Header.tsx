
import React from 'react';
import { Bell, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const navigate = useNavigate();

  return (
    <header className="bg-primary py-3 px-4 flex items-center justify-between shadow-md">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-2 text-primary-foreground">
          <Menu size={24} />
        </Button>
        <div className="flex items-center gap-2" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
          <div className="h-9 w-9 rounded-full bg-gradient-to-r from-accent to-secondary flex items-center justify-center text-white font-bold text-lg">
            DR
          </div>
          <h1 className="text-primary-foreground font-bold text-xl hidden sm:block">Disaster Response Nexus</h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="text-primary-foreground relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-secondary"></span>
        </Button>
        <Button variant="ghost" size="icon" className="text-primary-foreground">
          <User size={20} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
