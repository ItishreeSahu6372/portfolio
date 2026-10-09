import { cn } from "@/lib/utils";

interface GradientOrbsProps {
  className?: string;
}

/** Soft blue-to-teal gradient orbs used as decorative section backgrounds. */
export function GradientOrbs({ className }: GradientOrbsProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-[100px]" />
      <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-accent/12 blur-[120px]" />
      <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-primary/8 blur-[100px]" />
    </div>
  );
}
