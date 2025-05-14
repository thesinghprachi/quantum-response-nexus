
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertTriangle, LogIn } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SignIn = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For demo purposes, just simulate a login
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      
      // Demo credentials (in real app, this would be handled by backend)
      if (email === 'admin@soterra.com' && password === 'password') {
        // Store auth token in localStorage (in a real app, would be JWT)
        localStorage.setItem('auth_token', 'demo_token_123');
        localStorage.setItem('user_role', 'admin');
        
        toast({
          title: "Authentication successful",
          description: "Welcome to Soterra",
          variant: "default",
        });
        
        navigate('/');
      } else {
        toast({
          title: "Authentication failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-background to-background z-0"></div>
      <Card className="mx-auto max-w-md w-full relative z-10 border-border/50 bg-card/90 backdrop-blur-sm">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2 mb-2">
            {/* Earth-inspired logo design */}
            <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full"></div>
              <div className="absolute inset-1 bg-green-500 rounded-full rotate-45 translate-x-1"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/80 to-transparent rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-bold text-white text-lg relative z-10">ST</span>
              </div>
            </div>
            <span className="font-bold text-xl">Soterra</span>
          </div>
          <CardTitle className="text-2xl">Sign In</CardTitle>
          <CardDescription>
            Enter your credentials to access the dashboard
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="admin@soterra.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <button 
                  type="button" 
                  className="text-xs text-accent hover:underline"
                  onClick={() => toast({
                    title: "Password Reset",
                    description: "Contact your administrator to reset your password",
                  })}
                >
                  Forgot password?
                </button>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember" 
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked === true)}
              />
              <Label htmlFor="remember" className="text-sm">Remember me</Label>
            </div>
            
            <div className="bg-muted/50 rounded-md p-3 flex items-start space-x-3 text-xs">
              <AlertTriangle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Demo Credentials</p>
                <p>Email: admin@soterra.com</p>
                <p>Password: password</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              type="submit" 
              className="w-full"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <LogIn size={18} /> Sign in
                </span>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default SignIn;
