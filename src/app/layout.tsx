import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-disp",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
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
        className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased font-sans bg-background text-foreground`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
