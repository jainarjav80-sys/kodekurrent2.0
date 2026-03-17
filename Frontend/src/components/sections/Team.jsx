import { motion } from "framer-motion";
import ElectricBorder from "@/components/ui/ElectricBorder";
const organizers = [
  { name: "Member 1", role: "Organizer", image: "/organizers/member1.png" },
  { name: "Member 2", role: "Organizer", image: "/organizers/member2.png" },
  { name: "Member 3", role: "Organizer", image: "/organizers/member3.png" },
  { name: "Member 4", role: "Organizer", image: "/organizers/member4.png" },
  { name: "Member 5", role: "Organizer", image: "/organizers/member5.png" },
  { name: "Member 6", role: "Organizer", image: "/organizers/member6.png" },
  { name: "Member 7", role: "Organizer", image: "/organizers/member7.png" },
  { name: "Member 8", role: "Organizer", image: "/organizers/member8.png" },
  { name: "Member 9", role: "Organizer", image: "/organizers/member9.png" },
  { name: "Member 10", role: "Organizer", image: "/organizers/member10.png" },
  { name: "Member 11", role: "Organizer", image: "/organizers/member11.png" },
  { name: "Member 12", role: "Organizer", image: "/organizers/member12.png" },
  { name: "Member 13", role: "Organizer", image: "/organizers/member13.png" },
  { name: "Member 14", role: "Organizer", image: "/organizers/member14.png" },
  { name: "Member 15", role: "Organizer", image: "/organizers/member15.png" }
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-black/40 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-pixel text-center text-white">
          Organizers
        </h2>
      </div>

      <div className="relative flex w-full overflow-hidden">
        <motion.div
          className="flex gap-8 min-w-max px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, ease: "linear", repeat: Infinity }}
        >
          {/* Double the cards for seamless loop */}
          {[...organizers, ...organizers].map((person, index) => (
            <div
              key={`${person.name}-${index}`}
              className="w-56 md:w-64 group relative border-2 border-primary/20 hover:border-primary/60 transition-all duration-300 overflow-hidden rounded-xl bg-black/60 shadow-lg shadow-primary/5"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Info Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-pixel text-sm mb-1">{person.name}</p>
                <p className="text-primary/80 font-mono text-xs uppercase tracking-wider">{person.role}</p>
              </div>

              {/* Scanline pattern overlay (static) */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] opacity-20" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
