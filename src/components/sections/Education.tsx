import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { EducationBg } from "@/components/SectionBackgrounds";
import { GradientOrbs } from "@/components/GradientOrbs";
import { education } from "@/data/education";

export function EducationSection() {
  return (
    <section id="education" className="relative py-20 md:py-28 overflow-hidden">
      <EducationBg className="opacity-30" />
      <GradientOrbs className="opacity-50" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          description="A strong base in science, mathematics, and computer engineering."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/30 to-transparent md:-translate-x-1/2" />

          {education.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`relative pl-14 md:pl-0 mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              {/* Node */}
              <div
                className={`absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-card border-2 border-primary shadow-md`}
              >
                <GraduationCap className="h-4 w-4 text-primary" />
              </div>

              {/* Card */}
              <div className="rounded-2xl bg-card border border-border p-5 md:p-6 card-glow">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-base md:text-lg font-bold font-display leading-tight">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.institution}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-semibold whitespace-nowrap">
                    <Award className="h-3.5 w-3.5" />
                    {item.result} {item.resultLabel}
                  </span>
                </div>
                <p className="text-xs font-medium text-accent mt-3">{item.period}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
