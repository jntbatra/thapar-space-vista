export const SITE_URL = "https://thapar-space-vista.vercel.app";
export const SITE_NAME = "ThaparSAT";
export const SITE_DESCRIPTION =
  "ThaparSAT is the official student platform for Thapar Institute of Engineering and Technology (TIET), providing students with campus events, clubs, opportunities, resources, announcements, and community features.";
export const SITE_KEYWORDS = [
  "ThaparSAT",
  "Thapar Institute of Engineering and Technology",
  "TIET",
  "Thapar University",
  "Student Community",
  "Campus Events",
  "Student Clubs",
  "Student Opportunities",
  "Hackathons",
  "Campus Resources",
  "Patiala",
];
export const DEFAULT_OG_IMAGE = "/og-image.png";

export type SeoPage = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: "website" | "article";
  ogImage?: string;
};

export const APP_THEME_COLOR = "#0f172a";

export const absUrl = (path: string) => {
  const normalizedPath = path === "/" ? "" : path.replace(/\/+$/, "");
  return `${SITE_URL}${normalizedPath}`;
};
