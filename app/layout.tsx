import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { montserrat } from "@/lib/fonts";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata = {
  title: "Eklavya Popli – Portfolio | Web Developer, CA Aspirant, Startup Founder",
  description:
    "Eklavya Popli's personal portfolio showcasing web development projects, startup journey, AI & tech experiments, academic achievements, and career milestones. Explore HumKind Tech, CA Foundation preparation, and innovative tech solutions.",
  keywords: [
    "Eklavya Popli",
    "portfolio",
    "web developer",
    "React.js",
    "Next.js",
    "Node.js",
    "Fullstack development",
    "AI projects",
    "LangChain",
    "Startup founder",
    "HumKind Tech",
    "BSc Computer Science",
    "CA aspirant",
    "foundation exam",
    "student portfolio",
    "technology projects",
    "Indian startup",
    "coding portfolio",
    "software projects"
  ],
  authors: [{ name: "Eklavya Popli", url: "https://eklavyapopli.humkind.in" }],
  openGraph: {
    title: "Eklavya Popli – Portfolio | Web Developer, Startup Founder",
    description:
      "Explore Eklavya Popli's portfolio, including web development, AI projects, HumKind Tech startup, and academic milestones.",
    url: "https://eklavyapopli.humkind.in",
    siteName: "Eklavya Popli Portfolio",
    images: [
      {
        url: "https://eklavyapopli.humkind.in/favicon.ico",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eklavya Popli – Portfolio",
    description:
      "Showcasing web development projects, AI, CA preparation, and startup journey by Eklavya Popli.",
    site: "@EklavyaPopli",
    creator: "@EklavyaPopli",
    images: ["https://eklavyapopli.humkind.in/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className}`}
      >
        {children}
      </body>
    </html>
  );
}
