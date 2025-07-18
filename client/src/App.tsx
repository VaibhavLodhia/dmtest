import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import { queryClient } from "@/lib/queryClient";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { SEOServices } from "./pages/SEOServices";
import { PPCServices } from "./pages/PPCServices";
import { SocialMediaServices } from "./pages/SocialMediaServices";
import { ContentMarketingServices } from "./pages/ContentMarketingServices";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Switch>
          <Route path="/" component={Index} />
          <Route path="/services/seo" component={SEOServices} />
          <Route path="/services/ppc" component={PPCServices} />
          <Route path="/services/social-media" component={SocialMediaServices} />
          <Route path="/services/content-marketing" component={ContentMarketingServices} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
