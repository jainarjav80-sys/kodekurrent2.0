import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";
import { RegistrationModal } from "@/pages/RegistrationModal";
import Shuffle from "@/components/ui/Shuffle";

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    // Target date: April 12, 2026
    const targetDate = new Date("2026-04-12T09:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
        minutes: Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
        seconds: Math.floor(distance % (1000 * 60) / 1000)
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[100px]" />
    </div>

    {/* Decorative Mouse Graphics */}
    <motion.div animate={{
      x: [0, 100, 50, 0],
      y: [0, 50, 150, 0]
    }} transition={{
      duration: 20,
      repeat: Infinity
    }} className="absolute top-1/4 left-1/4 z-0 opacity-20 hidden md:block">
      <MousePointer2 className="w-12 h-12 text-primary rotate-12" />
    </motion.div>
    <motion.div animate={{
      x: [0, -80, -20, 0],
      y: [0, 120, 40, 0]
    }} transition={{
      duration: 15,
      repeat: Infinity,
      delay: 2
    }} className="absolute bottom-1/4 right-1/4 z-0 opacity-20 hidden md:block">
      <MousePointer2 className="w-8 h-8 text-secondary -rotate-45" />
    </motion.div>

    <div className="container mx-auto px-4 z-10 flex flex-col items-center justify-center">
      <motion.div initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8
      }} className="text-center">

        <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-pixel leading-tight mb-8 md:mb-12 flex flex-col items-center relative z-20">
          <Shuffle
            text="Kode"
            tag="span"
            className="text-white mb-4 font-pixel whitespace-nowrap inline-block"
            shuffleDirection="right"
            duration={0.5}
            scrambleCharset="XYZ#@!&*"
            stagger={0.05}
            data-text="Kode"
          />
          <Shuffle
            text="Kurrent 2.0"
            tag="span"
            className="text-primary glitch-text font-pixel whitespace-nowrap inline-block"
            shuffleDirection="right"
            duration={0.6}
            scrambleCharset="01#@*&^%"
            stagger={0.04}
            data-text="Kurrent 2.0"
          />
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground font-mono mb-10 max-w-lg mx-auto">
          Enter the labyrinth of code.
          <br />
          <span className="text-accent mt-2 block">April 12th, 2026</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <RegistrationModal>
            <Button size="lg" className="font-pixel text-sm h-14 bg-primary hover:bg-primary/80 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] border-2 border-primary hover:scale-105 transition-transform">
              REGISTER
            </Button>
          </RegistrationModal>
        </div>

        <div className="mt-8 p-6 bg-card/50 border border-border rounded-xl backdrop-blur-sm">
          <p className="font-pixel text-xs text-center mb-4 text-muted-foreground">TIME LEFT TO REGISTER</p>
          <div className="grid grid-cols-4 gap-4 text-center">
            {[{
              label: "DAYS",
              value: timeLeft.days
            }, {
              label: "HRS",
              value: timeLeft.hours
            }, {
              label: "MIN",
              value: timeLeft.minutes
            }, {
              label: "SEC",
              value: timeLeft.seconds
            }].map(item => <div key={item.label} className="bg-background/50 rounded p-2 border border-primary/20">
              <div className="text-2xl md:text-3xl font-mono font-bold text-white">{String(item.value).padStart(2, '0')}</div>
              <div className="text-[10px] md:text-xs font-pixel text-primary mt-1">{item.label}</div>
            </div>)}
          </div>
        </div>
      </motion.div>
    </div>
  </section>;
}