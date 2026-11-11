import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Fonts are self-hosted (SIL Open Font License, see ./fonts/OFL-*.txt) so the
// build does not depend on fetching them from Google Fonts.
const instrumentSans = localFont({
  variable: "--font-body",
  src: [
    { path: "./fonts/instrument-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/instrument-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
});

const instrumentSerif = localFont({
  variable: "--font-disp",
  adjustFontFallback: "Times New Roman",
  src: [
    { path: "./fonts/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
});

const jetbrainsMono = localFont({
  variable: "--font-jbm",
  adjustFontFallback: false,
  src: [
    { path: "./fonts/jetbrains-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/jetbrains-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
});

const title = "Iliass Sijelmassi — Machine Learning & Quantitative Research";
const description =
  "Machine learning and quantitative research. Quantitative Researcher Intern at WorldQuant; previously at Stanford. MSc, École Polytechnique & HEC Paris.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iliasssijelmassi.com"),
  title,
  description,
  authors: [{ name: "Iliass Sijelmassi" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Iliass Sijelmassi",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0C0F",
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
