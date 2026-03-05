import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iliass Sijelmassi | AI Researcher @ Stanford · ML Engineer",
  description: "AI Researcher at Stanford University specializing in deep learning for cardiology. ML Engineer with expertise in Python, PyTorch, and end-to-end ML pipelines. Joint Master @ École Polytechnique & HEC Paris.",
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
      <body className={`${inter.variable} antialiased font-sans bg-black text-white`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
