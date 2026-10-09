import { Github, Linkedin, Heart } from "lucide-react";
import { personal } from "@/data/personal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-lg gradient-text">
              Itishree Sahu
            </p>
            <p className="text-sm text-muted-foreground mt-1 flex items-center justify-center md:justify-start gap-1.5">
              Designed & Developed by Itishree Sahu
              <span className="text-accent">
                <Heart className="h-3.5 w-3.5 fill-current" />
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {year} Itishree Sahu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
