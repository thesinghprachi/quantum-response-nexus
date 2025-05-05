
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Prediction from "./pages/Prediction";
import ResourceMap from "./pages/ResourceMap";
import DroneControl from "./pages/DroneControl";
import Alerts from "./pages/Alerts";
import Blockchain from "./pages/Blockchain";
import Analytics from "./pages/Analytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/resource-map" element={<ResourceMap />} />
          <Route path="/drone-control" element={<DroneControl />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/analytics" element={<Analytics />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
