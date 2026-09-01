import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sg",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jbm",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Iliass Sijelmassi | Quantitative Researcher @ WorldQuant · Visiting Researcher @ Stanford",
  description: "Quantitative Researcher Intern at WorldQuant (Millennium). Visiting Researcher at Stanford University working on deep learning for cardiology. MSc Data Science & AI @ École Polytechnique & HEC Paris.",
  keywords: ["AI research", "Stanford University", "data science", "machine learning", "deep learning", "python", "pytorch", "École Polytechnique", "HEC Paris", "cardiology AI"],
  authors: [{ name: "Iliass Sijelmassi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased font-sans bg-background text-foreground`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
