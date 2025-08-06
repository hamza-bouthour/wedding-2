import { Switch, Route } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import InvitationPage from "@/pages/invitation";

function Router() {
  return (
    <Switch>
      <Route path="/:guestName" component={InvitationPage} />
      <Route path="/" component={InvitationPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Router />
    </TooltipProvider>
  );
}

export default App;