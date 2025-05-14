
import React from 'react';
import { Bell, Menu, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from '@/hooks/use-toast';

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    // Remove auth token
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_role');
    
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    });
    
    // Redirect to login page
    navigate('/sign-in');
  };

  return (
    <header className="bg-primary py-3 px-4 flex items-center justify-between shadow-md">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-2 text-primary-foreground">
          <Menu size={24} />
        </Button>
        <div className="flex items-center gap-2" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
          <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-white overflow-hidden relative">
            {/* Earth-inspired logo design */}
            <div className="absolute inset-0 bg-blue-500 rounded-full"></div>
            <div className="absolute inset-1 bg-green-500 rounded-full rotate-45 translate-x-1"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/80 to-transparent rounded-full"></div>
          </div>
          <h1 className="text-primary-foreground font-bold text-xl hidden sm:block">Soterra</h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="text-primary-foreground relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-secondary"></span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-primary-foreground">
              <User size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
