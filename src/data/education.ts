export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  result: string;
  resultLabel: string;
  description: string;
}

export const education: EducationItem[] = [
  {
    id: "btech",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Ajay Binay Institute of Technology",
    period: "2023 — 2027",
    result: "8.93",
    resultLabel: "CGPA",
    description:
      "Pursuing Computer Science & Engineering with a focus on data structures, algorithms, databases, and analytics. Consistently maintaining academic excellence.",
  },
  {
    id: "xii",
    degree: "Class XII — Science",
    institution: "Tetrahedron Higher Secondary School",
    period: "2021 — 2023",
    result: "85.66%",
    resultLabel: "Percentage",
    description:
      "Completed higher secondary education in the Science stream with strong fundamentals in mathematics and statistics.",
  },
];
