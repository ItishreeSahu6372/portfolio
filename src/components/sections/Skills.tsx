import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillsBg } from "@/components/SectionBackgrounds";
import { GradientOrbs } from "@/components/GradientOrbs";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden">
      <SkillsBg className="opacity-30" />
      <GradientOrbs className="opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills & Expertise"
          title="Tools and techniques I work with"
          description="A toolkit built through coursework, internships, and real-world data projects."
        />

        <div className="grid sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 md:p-6 rounded-2xl bg-[#0B1120] border border-border card-glow"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="text-base font-bold font-display">{group.heading}</h3>
                </div>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
