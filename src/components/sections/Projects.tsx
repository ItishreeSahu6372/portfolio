import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ImageIcon, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectsBg } from "@/components/SectionBackgrounds";
import { GradientOrbs } from "@/components/GradientOrbs";
import { Lightbox } from "@/components/Lightbox";
import { useImageError } from "@/hooks/use-image-error";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  index,
  onImageClick,
}: {
  project: Project;
  index: number;
  onImageClick: (src: string) => void;
}) {
  const hasError = useImageError(project.image);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col rounded-2xl bg-card border border-border overflow-hidden card-glow"
    >
      {/* Image / placeholder */}
      <button
        onClick={() => !hasError && onImageClick(project.image)}
        className={cn(
          "relative aspect-video overflow-hidden bg-muted",
          !hasError && "cursor-zoom-in",
        )}
        aria-label={hasError ? `${project.title} — image not available` : `Zoom into ${project.title}`}
      >
        {!hasError ? (
          <>
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 text-foreground text-xs font-semibold">
                <ZoomIn className="h-3.5 w-3.5" />
                View
              </span>
            </div>
          </>
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2 text-muted-foreground">
            <ImageIcon className="h-10 w-10 opacity-40" />
            <span className="text-xs font-medium opacity-60">Screenshot coming soon</span>
          </div>
        )}
      </button>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        <h3 className="text-base md:text-lg font-bold font-display leading-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[11px] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-5">
          <Button size="sm" variant="outline" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1.5 h-3.5 w-3.5" />
              GitHub
            </a>
          </Button>
          {project.liveDemo && (
            <Button size="sm" asChild>
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden">
      <ProjectsBg className="opacity-30" />
      <GradientOrbs className="opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Data projects that tell a story"
          description="A selection of analytics, visualization, and forecasting work."
        />

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onImageClick={setLightboxSrc}
            />
          ))}
        </div>
      </div>

      <Lightbox
        src={lightboxSrc}
        alt={projects.find((p) => p.image === lightboxSrc)?.imageAlt ?? "Project screenshot"}
        onClose={() => setLightboxSrc(null)}
      />
    </section>
  );
}
