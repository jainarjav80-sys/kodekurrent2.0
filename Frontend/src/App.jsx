import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import RegistrationSuccess from "@/pages/registration-success";
import NotFound from "@/pages/not-found";
import TargetCursor from "@/components/ui/TargetCursor";
import GridScan from "@/components/ui/GridScan";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "wouter";
function Router() {
  const [location] = useLocation();
  return <AnimatePresence mode="wait">
    <motion.div key={location} initial={{
      opacity: 0,
      scale: 0.98
    }} animate={{
      opacity: 1,
      scale: 1
    }} exit={{
      opacity: 0,
      scale: 1.02
    }} transition={{
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1]
    }}>
      <Switch location={location}>
        <Route path="/" component={Home} />
        <Route path="/registration-success" component={RegistrationSuccess} />
        <Route component={NotFound} />
      </Switch>
    </motion.div>
  </AnimatePresence>;
}
function App() {
  return <QueryClientProvider client={queryClient}>
    <TooltipProvider>

      {/* Global Animated Target Cursor */}
      <TargetCursor targetSelector="a, button, input, select, textarea, img, svg, label, summary, .cursor-pointer, [role='button'], h1, h2, h3, h4, h5, h6, .interactive" />

      {/* Global Matrix Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#000000"
          gridScale={0.15}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      <Router />
      <Toaster />
      <SonnerToaster position="top-center" theme="dark" />

    </TooltipProvider>
  </QueryClientProvider>;
}
export default App;