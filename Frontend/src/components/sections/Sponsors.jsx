import { motion } from "framer-motion";

const sponsors = [{
  name: "Coca Cola",
  logo: "/sponser 1.jpg"
}, {
  name: "GrabOn",
  logo: "/sponser 2.png"
}, {
  name: "Rabbitt AI",
  logo: "/sponsor 3.jpg"
}, {
  name: "Prodigal.ai",
  logo: "/sponser 4.png"
}, {
  name: "Roostoo",
  logo: "/sponser 5.png"
}];

export function Sponsors() {
  return (
    <section id="sponsors" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-pixel text-center mb-16 text-white uppercase transform-z-0">
          PAST <span className="text-primary">SPONSORS</span>
        </h2>

        <div className="relative flex w-full overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          >
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div key={`${sponsor.name}-${index}`} className="flex flex-col items-center gap-4 flex-shrink-0 group">
                <div className="w-[300px] h-[180px] bg-[#1a0b2e]/40 border-2 border-white/5 rounded-xl flex items-center justify-center p-8 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all cursor-pointer">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}