import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceBg } from "@/components/SectionBackgrounds";
import { GradientOrbs } from "@/components/GradientOrbs";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-28 overflow-hidden">
      <ExperienceBg className="opacity-30" />
      <GradientOrbs className="opacity-60" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Hands-on internships"
          description="Real-world data analytics and machine learning work."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-primary/30 to-transparent" />

          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-14 mb-10 last:mb-0"
            >
              {/* Node */}
              <div className="absolute left-4 -translate-x-1/2 top-7 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-card border-2 border-accent shadow-md">
                <Briefcase className="h-4 w-4 text-accent" />
              </div>

              {/* Card */}
              <div className="rounded-2xl bg-card border border-border p-5 md:p-6 card-glow">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base md:text-lg font-bold font-display">{item.role}</h3>
                    <p className="text-sm text-primary font-medium mt-0.5">{item.company}</p>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-muted text-xs font-medium text-muted-foreground whitespace-nowrap">
                    {item.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.highlights.map((highlight, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
