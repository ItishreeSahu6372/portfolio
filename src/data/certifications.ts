export interface Certification {
  id: string;
  title: string;
  issuer: string;
  image: string;
  imageAlt: string;
  certificateUrl: string;
}

export const certifications: Certification[] = [
  {
    id: "deloitte",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    image: "src/assets/images/certificates/deloitte-certificate.png",
    imageAlt: "Deloitte Data Analytics Job Simulation certificate",
    certificateUrl: "#",
  },
  {
    id: "hackerrank-sql",
    title: "SQL (Basic) Certification",
    issuer: "HackerRank",
    image: "src/assets/images/certificates/hackerrank-sql-certificate.png",
    imageAlt: "HackerRank SQL Basic certification",
    certificateUrl: "#",
  },
];
