import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArcadeMachine3D } from "../ui/ArcadeMachine3D";
import { ArcadeGame } from "../ui/ArcadeGame";

export function About() {
  const [showGame, setShowGame] = useState(false);

  return (
    <section id="about" className="py-20 bg-black/20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <ArcadeMachine3D
              src="/images/arcade-machine.png"
              onClick={() => setShowGame(true)}
            />
            <div className="text-center mt-[-20px]">
              <motion.p
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="font-pixel text-primary text-xs tracking-widest uppercase"
              >
                Click to play
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-pixel mb-8 text-white">
              About <span className="text-primary">IEEE SB RGIPT</span>
            </h2>

            <div className="space-y-6 text-muted-foreground font-mono text-lg leading-relaxed text-justify">
              <p>
                IEEE Student Branch RGIPT is a dynamic community of passionate engineers, innovators, and researchers dedicated to advancing technology for humanity. Affiliated with IEEE, the world’s largest technical professional organization, our student branch aims to foster technical excellence, research culture, and professional development among students of Rajiv Gandhi Institute of Petroleum Technology.
              </p>
              <p>
                We organize workshops, seminars, hackathons, technical competitions, and industry interactions to enhance practical knowledge and bridge the gap between academics and real-world applications. Our mission is to empower students with technical skills, leadership qualities, and global exposure through active participation in IEEE initiatives.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.3)" }}
                className="p-4 bg-card border-l-4 border-primary rounded shadow-lg transition-shadow cursor-default"
              >
                <h3 className="text-3xl font-pixel text-white mb-1">300+</h3>
                <p className="text-sm font-mono text-primary">Members</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(236,72,153,0.3)" }}
                className="p-4 bg-card border-l-4 border-secondary rounded shadow-lg transition-shadow cursor-default"
              >
                <h3 className="text-3xl font-pixel text-white mb-1">75+</h3>
                <p className="text-sm font-mono text-secondary">Events</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showGame && (
          <ArcadeGame onClose={() => setShowGame(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}
