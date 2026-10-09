import {
  AppWindow,
  Code2,
  Database,
  GitBranch,
  FileSpreadsheet,
  Braces,
  LineChart,
  Table2,
  Terminal,
  Boxes,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SkillGroup {
  heading: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    heading: "Languages",
    icon: Terminal,
    skills: ["Python", "SQL", "MySQL"],
  },
  {
    heading: "Libraries",
    icon: Boxes,
    skills: ["Pandas", "Matplotlib", "Scikit-learn"],
  },
  {
    heading: "Tools",
    icon: Wrench,
    skills: ["Microsoft Excel", "Git", "VS Code", "Jupyter Notebook", "Windows"],
  },
];

// Keep imports used by skillGroups available for potential future use
export const _skillIcons: Record<string, LucideIcon> = {
  Python: Code2,
  SQL: Database,
  MySQL: Database,
  Pandas: Braces,
  Matplotlib: LineChart,
  "Scikit-learn": LineChart,
  "Microsoft Excel": FileSpreadsheet,
  Git: GitBranch,
  "VS Code": Code2,
  "Jupyter Notebook": Table2,
  Windows: AppWindow,
};
