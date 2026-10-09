export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  github: string;
  liveDemo?: string;
}

export const projects: Project[] = [
  {
    id: "shopease",
    title: "ShopEase E-Commerce Executive Decision Support System",
    description:
      "MySQL database and SQL data cleaning/analysis on the Olist Brazilian E-Commerce dataset. Built 4 interactive Excel dashboards (KPIs, PivotTables, Slicers, Timeline) with a rule-based decision-support layer recommending actions and their impact.",
    image: "src/assets/images/projects/shopease-dashboard.png",
    imageAlt: "ShopEase e-commerce executive dashboard showing KPIs and sales analytics",
    tags: ["MySQL", "SQL", "Excel", "GitHub"],
    github: "https://github.com/itishree-sahu/shopease-dashboard",
    liveDemo: undefined,
  },
  {
    id: "economic-analysis",
    title: "Global Economic Trend Analysis & Unemployment Forecasting",
    description:
      "World Bank data for 7 countries (2017–2024): cleaning, EDA, correlation analysis, and visualization. Linear Regression forecast of India's unemployment for 2025–2030.",
    image: "src/assets/images/projects/economic-analysis.png",
    imageAlt: "Global economic trend analysis dashboard with unemployment forecasting charts",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    github: "https://github.com/itishree-sahu/economic-analysis",
    liveDemo: undefined,
  },
  {
    id: "aqi-dashboard",
    title: "Indian AQI Insights Dashboard",
    description:
      "235,000+ air quality records analyzed with Python, SQL, and Excel. Cleaning, EDA, and trend analysis of pollution across Indian cities with an interactive Excel dashboard featuring KPIs.",
    image: "src/assets/images/projects/aqi-dashboard.png",
    imageAlt: "Indian air quality index dashboard showing pollution trends across cities",
    tags: ["Python", "SQL", "Excel"],
    github: "https://github.com/itishree-sahu/aqi-dashboard",
    liveDemo: undefined,
  },
  {
    id: "retail-dashboard",
    title: "Retail Sales Performance Dashboard",
    description:
      "Analyzed purchasing patterns, regional performance, and channel-wise sales. Built an Excel dashboard with Pivot Tables, Pivot Charts, KPIs, and Slicers, surfacing insights on customer segments, regions, and categories.",
    image: "src/assets/images/projects/retail-dashboard.png",
    imageAlt: "Retail sales performance dashboard with pivot charts and KPIs",
    tags: ["Excel"],
    github: "https://github.com/itishree-sahu/retail-dashboard",
    liveDemo: undefined,
  },
];
