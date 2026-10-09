import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personal } from "@/data/personal";
import { HeroBg } from "@/components/SectionBackgrounds";
import { GradientOrbs } from "@/components/GradientOrbs";
import { useImageError } from "@/hooks/use-image-error";
import { User } from "lucide-react";

const profileImage = "/profile.jpg";

export function Hero() {
  const hasError = useImageError(profileImage);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <HeroBg className="opacity-60" />
      <GradientOrbs />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Available for opportunities
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-balance">
              Hi, I'm{" "}
              <span className="gradient-text">Itishree Sahu</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg font-medium text-muted-foreground">
              {personal.tagline}
            </p>

            <p className="mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              {personal.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={() => scrollTo("#projects")}
                className="group"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <a href={personal.resumeUrl} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={() => scrollTo("#contact")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </motion.div>

          {/* Right — profile placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-[2rem] border border-primary/20 rotate-6" />
              <div className="absolute inset-0 rounded-[2rem] border border-accent/20 -rotate-3" />

              {/* Frame */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-border card-glow">
                {!hasError ? (
                  <img
                    src={profileImage}
                    alt="Portrait of Itishree Sahu"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                ) : (
                  <div className="h-full w-full flex flex-col items-center justify-center gap-4 text-muted-foreground">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                      <User className="h-12 w-12 text-primary/40" />
                    </div>
                    <p className="text-xs font-medium text-center px-6">
                      Profile photo placeholder
                      <br />
                      <span className="text-muted-foreground/60">
                        add /profile.jpg
                      </span>
                    </p>
                  </div>
                )}
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-card border border-border shadow-lg"
              >
                <p className="text-xs font-semibold text-foreground">Data Analyst</p>
                <p className="text-[10px] text-muted-foreground">CSE Student</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs">Scroll</span>
        <div className="h-8 w-5 rounded-full border border-border flex items-start justify-center p-1">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="h-2 w-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
