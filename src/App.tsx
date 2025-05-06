
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Prediction from "./pages/Prediction";
import ResourceMap from "./pages/ResourceMap";
import DroneControl from "./pages/DroneControl";
import Alerts from "./pages/Alerts";
import Blockchain from "./pages/Blockchain";
import Analytics from "./pages/Analytics";
import SignIn from "./pages/SignIn";

const queryClient = new QueryClient();

// Simple authentication check
const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('auth_token');
  
  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<RequireAuth><Index /></RequireAuth>} />
          <Route path="/prediction" element={<RequireAuth><Prediction /></RequireAuth>} />
          <Route path="/resource-map" element={<RequireAuth><ResourceMap /></RequireAuth>} />
          <Route path="/drone-control" element={<RequireAuth><DroneControl /></RequireAuth>} />
          <Route path="/alerts" element={<RequireAuth><Alerts /></RequireAuth>} />
          <Route path="/blockchain" element={<RequireAuth><Blockchain /></RequireAuth>} />
          <Route path="/analytics" element={<RequireAuth><Analytics /></RequireAuth>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
