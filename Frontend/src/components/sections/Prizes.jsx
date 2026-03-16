import { motion } from "framer-motion";
import { Trophy, Star, Gift } from "lucide-react";
export function Prizes() {
  return <section id="prizes" className="py-20 relative overflow-hidden">
    <div className="container mx-auto px-4 text-center">
      <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-3xl md:text-5xl font-pixel mb-16 text-white">
        Prizes & <span className="text-secondary">Challenges</span>
      </motion.h2>

      <div className="max-w-4xl mx-auto relative p-12 border border-primary/30 bg-card/30 rounded-2xl backdrop-blur-sm overflow-hidden group">
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />

        <div className="relative z-10 flex flex-col items-center justify-center gap-6">
          <motion.div animate={{
            rotate: [0, 10, -10, 0]
          }} transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut"
          }} className="w-32 h-32 md:w-48 md:h-48 mb-4">
            <img src="/images/trophy.png" alt="Trophy" className="w-full h-full object-contain" />
          </motion.div>

          <h3 className="text-4xl md:text-6xl font-pixel text-white glitch-text" data-text="COMING SOON">
            COMING SOON
          </h3>

          <p className="text-lg md:text-xl text-muted-foreground font-mono max-w-2xl mx-auto mt-4">
            We're making this iteration much better and bigger than last year – new challenges, bigger prizes,
            and more surprises are on the way. Stay tuned!
          </p>

          <div className="flex gap-4 mt-8">
            <motion.div
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(234,179,8,0.4)" }}
              className="flex flex-col items-center gap-2 p-4 bg-background/50 rounded-lg border border-white/10 w-24 md:w-32 cursor-default transition-colors hover:border-yellow-500/50"
            >
              <Trophy className="w-8 h-8 text-yellow-500" />
              <span className="text-xs font-pixel">Winner</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(156,163,175,0.4)" }}
              className="flex flex-col items-center gap-2 p-4 bg-background/50 rounded-lg border border-white/10 w-24 md:w-32 cursor-default transition-colors hover:border-gray-400/50"
            >
              <Star className="w-8 h-8 text-gray-400" />
              <span className="text-xs font-pixel">Runner Up</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(249,115,22,0.4)" }}
              className="flex flex-col items-center gap-2 p-4 bg-background/50 rounded-lg border border-white/10 w-24 md:w-32 cursor-default transition-colors hover:border-orange-500/50"
            >
              <Gift className="w-8 h-8 text-orange-500" />
              <span className="text-xs font-pixel">Goodies</span>
            </motion.div>
          </div>
        </div>

        {/* Decorative Corner Pixels */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary" />
      </div>
    </div>
  </section>;
}