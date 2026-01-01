import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iliass Sijelmassi | Data Scientist & ML Engineer",
  description: "Data Scientist & ML Engineer specializing in Python, PyTorch, and end-to-end ML pipelines. Joint MSc @ École Polytechnique & HEC Paris.",
  keywords: ["data science", "machine learning", "python", "pytorch", "École Polytechnique", "HEC Paris"],
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
