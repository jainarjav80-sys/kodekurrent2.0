import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Prizes } from "@/components/sections/Prizes";
import { Gallery } from "@/components/sections/Gallery";
import { Team } from "@/components/sections/Team";
import { Sponsors } from "@/components/sections/Sponsors";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { motion } from "framer-motion";
import { Gamepad2, Rocket, Cpu } from "lucide-react";
export default function Home() {
  return <div className="min-h-screen text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
    <Navbar />

    <main>
      <Hero />
      <About />
      <Timeline />
      <Sponsors />
      <Prizes />
      <Gallery />
      <Team />
      <FAQ />
      <Contact />
    </main>

    <footer className="relative py-20 bg-black/90 border-t border-primary/20 overflow-hidden">
      {/* Decorative Graphics */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <motion.div animate={{
          rotate: 360
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }} className="absolute -top-20 -left-20 text-primary">
          <Cpu size={150} />
        </motion.div>
        <motion.div animate={{
          y: [0, -20, 0]
        }} transition={{
          duration: 5,
          repeat: Infinity
        }} className="absolute top-40 right-10 text-secondary">
          <Rocket size={100} />
        </motion.div>
        <div className="absolute bottom-10 left-1/4 text-accent opacity-30">
          <Gamepad2 size={120} />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-3xl font-pixel text-primary glitch-text" data-text="IEEE SB RGIPT">
            IEEE SB RGIPT
          </h2>
          <div className="flex gap-6 mt-4">


            <a href="https://www.instagram.com/ieee_rgipt/" target="_blank" rel="noopener noreferrer" className="font-mono text-sm hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="font-mono text-sm hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="font-mono text-sm hover:text-primary transition-colors">Twitter</a>
          </div>
          <p className="font-pixel text-[10px] mt-8 text-white/30">
            © 2026 KodeKurrent. Powered by Innovation.
          </p>
        </div>
      </div>
    </footer>
  </div>;
}