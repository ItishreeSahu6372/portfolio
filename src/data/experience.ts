export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "cttc",
    role: "Data Analytics Intern",
    company: "CTTC Bhubaneswar",
    period: "2 — 30 June 2025",
    description:
      "Hands-on internship focused on the full data analytics lifecycle — from raw data to actionable business insights.",
    highlights: [
      "Data cleaning and preprocessing with Python and Excel",
      "Exploratory data analysis on real-world datasets",
      "Built visualizations, reports, and interactive dashboards",
      "Delivered actionable insights to support decision-making",
    ],
  },
  {
    id: "edunet",
    role: "Machine Learning Intern",
    company: "Edunet Foundation (AICTE Virtual Internship)",
    period: "Dec 2025 — Jan 2026",
    description:
      "Virtual internship building and evaluating supervised machine learning models with Python and Scikit-learn.",
    highlights: [
      "ML projects with Python and Scikit-learn",
      "Dataset preprocessing and feature engineering",
      "Supervised model implementation and evaluation",
      "Performance tuning and result interpretation",
    ],
  },
];
