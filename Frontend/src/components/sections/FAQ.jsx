import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
const faqs = [{
  question: "Who can apply to KodeKurrent 2.0?",
  answer: "Any student with a valid college ID card can apply. We welcome students from all backgrounds, whether you're a coding wizard or a complete beginner!"
}, {
  question: "Do I need prior development experience?",
  answer: "Not at all! Hackathons are the best place to learn. We'll have mentors and workshops to guide you through your journey."
}, {
  question: "Can a college have multiple teams?",
  answer: "Yes, there is no limit on the number of teams from a single college. However, each person can only be part of one team."
}, {
  question: "What is the team size?",
  answer: "You can form a team of 2-4 members. If you don't have a team, don't worry! We'll have a team formation session before the event starts."
}, {
  question: "What are the selection criteria?",
  answer: "Teams will be shortlisted based on their GitHub profiles, past projects, and the quality of their idea submission on Devfolio."
}];
export function FAQ() {
  return <section id="faq" className="py-20">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl md:text-5xl font-pixel text-center mb-16 text-white">
        Frequently Asked <br /><span className="text-primary">Questions</span>
      </h2>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
          <AccordionItem value={`item-${index}`} className="border border-white/10 bg-card/30 rounded-lg px-4 data-[state=open]:border-primary/50 transition-colors hover:border-primary/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <AccordionTrigger className="font-mono text-lg hover:text-primary hover:no-underline text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-sans text-base leading-relaxed pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        </motion.div>)}
      </Accordion>
    </div>
  </section>;
}