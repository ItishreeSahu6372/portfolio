import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award, ImageIcon, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { CertBg } from "@/components/SectionBackgrounds";
import { GradientOrbs } from "@/components/GradientOrbs";
import { Lightbox } from "@/components/Lightbox";
import { useImageError } from "@/hooks/use-image-error";
import { certifications, type Certification } from "@/data/certifications";
import { cn } from "@/lib/utils";

function CertCard({
  cert,
  index,
  onImageClick,
}: {
  cert: Certification;
  index: number;
  onImageClick: (src: string) => void;
}) {
  const hasError = useImageError(cert.image);

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
        onClick={() => !hasError && onImageClick(cert.image)}
        className={cn(
          "relative aspect-[4/3] overflow-hidden bg-muted",
          !hasError && "cursor-zoom-in",
        )}
        aria-label={hasError ? `${cert.title} — image not available` : `Zoom into ${cert.title}`}
      >
        {!hasError ? (
          <>
            <img
              src={cert.image}
              alt={cert.imageAlt}
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
            <span className="text-xs font-medium opacity-60">Certificate coming soon</span>
          </div>
        )}
      </button>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 border border-accent/15">
            <Award className="h-4 w-4 text-accent" />
          </div>
          <span className="text-xs font-semibold text-accent uppercase tracking-wide">
            {cert.issuer}
          </span>
        </div>

        <h3 className="text-base md:text-lg font-bold font-display leading-tight flex-1">
          {cert.title}
        </h3>

        <div className="mt-5">
          <Button size="sm" variant="outline" asChild>
            <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
              View Certificate
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export function Certifications() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <section id="certifications" className="relative py-20 md:py-28 overflow-hidden">
      <CertBg className="opacity-30" />
      <GradientOrbs className="opacity-50" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified skills & certifications"
          description="Industry-recognized credentials in data analytics and SQL."
        />

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {certifications.map((cert, i) => (
            <CertCard
              key={cert.id}
              cert={cert}
              index={i}
              onImageClick={setLightboxSrc}
            />
          ))}
        </div>
      </div>

      <Lightbox
        src={lightboxSrc}
        alt={certifications.find((c) => c.image === lightboxSrc)?.imageAlt ?? "Certificate"}
        onClose={() => setLightboxSrc(null)}
      />
    </section>
  );
}
