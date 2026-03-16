import { motion } from "framer-motion";
import ElectricBorder from "@/components/ui/ElectricBorder";
const organizers = [{
  name: "Shashank",
  role: "Lead Organizer",
  image: "/images/gallery-1_1.png"
}, {
  name: "Vedant Singh",
  role: "Lead Organizer",
  image: "/images/gallery-1_2.png"
}, {
  name: "Sourabh",
  role: "Lead Organizer",
  image: "/images/gallery-1_3.png"
}];
export function Team() {
  return <section id="team" className="py-20 bg-black/30">
    <div className="container mx-auto px-4">

      <h2 className="text-3xl md:text-5xl font-pixel text-center mb-16 text-white">
        Lead <span className="text-accent">Organizers</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-10">

        {organizers.map((person, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.2
        }} viewport={{
          once: true
        }} className="w-72 group">
          {/* Electric Border Wrapper */}
          <ElectricBorder
            color="#FF9FFC"
            speed={1}
            chaos={0.12}
            borderRadius={12}
          >
            {/* CARD */}
            <div className="bg-card border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-primary/50 transition duration-500">

              {/* IMAGE CONTAINER */}
              <div className="h-64 w-full overflow-hidden">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>

              {/* TEXT */}
              <div className="text-center p-4">
                <h3 className="text-xl font-pixel text-white uppercase">
                  {person.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {person.role}
                </p>
              </div>

            </div>
          </ElectricBorder>
        </motion.div>)}


      </div>
    </div>
  </section>;
}