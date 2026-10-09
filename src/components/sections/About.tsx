import { motion } from "framer-motion";
import { Film, Music, Palette, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AboutBg } from "@/components/SectionBackgrounds";
import { GradientOrbs } from "@/components/GradientOrbs";
import { personal } from "@/data/personal";
import type { LucideIcon } from "lucide-react";

const hobbyIcons: Record<string, LucideIcon> = {
  Movies: Film,
  Music: Music,
  Painting: Palette,
};

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      <AboutBg className="opacity-40" />
      <GradientOrbs className="opacity-70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Turning curiosity into clarity"
          description="A snapshot of who I am, what drives me, and the journey so far."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[800px] text-center space-y-5"
        >
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            {personal.about}
          </p>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Hobbies & Interests
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {personal.hobbies.map((hobby) => {
                const Icon = hobbyIcons[hobby] ?? TrendingUp;
                return (
                  <span
                    key={hobby}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-sm font-medium card-glow"
                  >
                    <Icon className="h-4 w-4 text-accent" />
                    {hobby}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
