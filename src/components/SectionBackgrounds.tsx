import { cn } from "@/lib/utils";

interface SectionBgProps {
  className?: string;
}

/** Flowing data curves and nodes — Hero */
export function HeroBg({ className }: SectionBgProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("absolute inset-0 h-full w-full", className)}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="hero-curve" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--orb-blue))" stopOpacity="0.18" />
          <stop offset="100%" stopColor="hsl(var(--orb-teal))" stopOpacity="0.06" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M -100 ${200 + i * 120} C 300 ${100 + i * 130}, 600 ${400 + i * 90}, 900 ${200 + i * 110} S 1300 ${300 + i * 120}, 1400 ${250 + i * 100}`}
          fill="none"
          stroke="url(#hero-curve)"
          strokeWidth="1.5"
          opacity={0.5 - i * 0.06}
        />
      ))}
      {[
        [180, 260], [420, 180], [680, 340], [920, 220], [1080, 400],
        [300, 480], [560, 520], [800, 560], [1040, 600],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="3" fill="hsl(var(--orb-blue))" opacity="0.35" />
          <circle cx={cx} cy={cy} r="8" fill="none" stroke="hsl(var(--orb-teal))" strokeWidth="0.5" opacity="0.2" />
        </g>
      ))}
    </svg>
  );
}

/** Circles and grid — About */
export function AboutBg({ className }: SectionBgProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("absolute inset-0 h-full w-full", className)}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <circle
          key={i}
          cx="1000"
          cy="400"
          r={60 + i * 70}
          fill="none"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="0.5"
          opacity={0.12 - i * 0.01}
        />
      ))}
      <line x1="0" y1="100" x2="1200" y2="100" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />
      <line x1="0" y1="300" x2="1200" y2="300" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />
      <line x1="0" y1="500" x2="1200" y2="500" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />
      <line x1="0" y1="700" x2="1200" y2="700" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />
      <line x1="300" y1="0" x2="300" y2="800" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />
      <line x1="600" y1="0" x2="600" y2="800" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />
      <line x1="900" y1="0" x2="900" y2="800" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

/** Dotted timeline — Education */
export function EducationBg({ className }: SectionBgProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("absolute inset-0 h-full w-full", className)}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <pattern id="edu-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
        <circle cx="14" cy="14" r="1.2" fill="hsl(var(--muted-foreground))" opacity="0.2" />
      </pattern>
      <rect width="1200" height="800" fill="url(#edu-dots)" />
    </svg>
  );
}

/** Vertical lines — Experience */
export function ExperienceBg({ className }: SectionBgProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("absolute inset-0 h-full w-full", className)}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      {[200, 400, 600, 800, 1000].map((x, i) => (
        <line
          key={i}
          x1={x}
          y1="0"
          x2={x}
          y2="800"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="0.5"
          opacity={0.08 + i * 0.01}
        />
      ))}
    </svg>
  );
}

/** Chart lines — Projects */
export function ProjectsBg({ className }: SectionBgProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("absolute inset-0 h-full w-full", className)}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <polyline
        points="0,600 150,450 300,500 450,300 600,380 750,200 900,280 1050,120 1200,180"
        fill="none"
        stroke="hsl(var(--orb-blue))"
        strokeWidth="1.5"
        opacity="0.12"
      />
      <polyline
        points="0,650 150,550 300,580 450,420 600,460 750,350 900,400 1050,280 1200,320"
        fill="none"
        stroke="hsl(var(--orb-teal))"
        strokeWidth="1.5"
        opacity="0.1"
      />
      {[150, 300, 450, 600, 750, 900, 1050].map((x, i) => (
        <line key={i} x1={x} y1="0" x2={x} y2="800" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.15" />
      ))}
      {[150, 300, 450, 600, 750].map((y, i) => (
        <line key={i} x1="0" y1={y} x2="1200" y2={y} stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.15" />
      ))}
    </svg>
  );
}

/** Node network — Contact */
export function ContactBg({ className }: SectionBgProps) {
  const nodes: [number, number][] = [
    [150, 200], [300, 350], [500, 150], [700, 400], [900, 250],
    [1050, 450], [200, 550], [450, 600], [650, 650], [850, 580], [1080, 120],
  ];
  return (
    <svg
      aria-hidden="true"
      className={cn("absolute inset-0 h-full w-full", className)}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      {nodes.map(([x1, y1], i) =>
        nodes.slice(i + 1).map(([x2, y2], j) => {
          const dist = Math.hypot(x2 - x1, y2 - y1);
          if (dist > 320) return null;
          return (
            <line
              key={`${i}-${j}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="hsl(var(--orb-blue))"
              strokeWidth="0.5"
              opacity={Math.max(0.04, 0.15 - dist / 3000)}
            />
          );
        }),
      )}
      {nodes.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.5" fill="hsl(var(--orb-teal))" opacity="0.25" />
      ))}
    </svg>
  );
}

/** Skills background — soft scatter */
export function SkillsBg({ className }: SectionBgProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("absolute inset-0 h-full w-full", className)}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      {[
        [100, 150], [1100, 200], [200, 600], [1050, 650], [600, 100], [600, 700],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={80 + i * 20}
          fill="none"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="0.5"
          opacity="0.08"
        />
      ))}
    </svg>
  );
}

/** Certifications background */
export function CertBg({ className }: SectionBgProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("absolute inset-0 h-full w-full", className)}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <pattern id="cert-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" opacity="0.1" />
      </pattern>
      <rect width="1200" height="800" fill="url(#cert-grid)" />
    </svg>
  );
}
