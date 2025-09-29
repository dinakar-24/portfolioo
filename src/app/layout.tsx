import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default:
      "Dinakar Reddy - Full-stack Developer & AI Engineer | Professional Portfolio",
    template: "%s | Dinu Portfolio",
  },
  description:
    "Professional portfolio of Dinakar Reddy - Full-stack Developer & AI Engineer. 25+ automation projects, IoT systems, and AI-powered solutions. Available for internships.",
  keywords: [
    "Dinakar Reddy",
    "Full-stack Developer",
    "Python Developer",
    "AI Engineer",
    "Portfolio",
    "Software Developer",
    "Machine Learning",
    "IoT Developer",
    "Web Development",
    "Next.js",
    "React",
    "FastAPI",
    "Django",
    "Automation",
    "LangChain",
    "AI Chatbot",
    "Professional Portfolio",
    "Developer Portfolio",
    "Tech Portfolio",
    "Internship",
    "Python Automation",
    "Web Scraping",
    "API Development",
  ],
  authors: [
    {
      name: "Dinakar Reddy",
      url: "https://dinu-portfolio-two.vercel.app",
    },
  ],
  creator: "Dinakar Reddy",
  publisher: "Dinakar Reddy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dinu-portfolio-two.vercel.app",
    title:
      "Dinakar Reddy - Full-stack Developer & AI Engineer | Professional Portfolio",
    description:
      "Professional portfolio showcasing AI-powered projects, IoT systems, and full-stack development. 25+ automation projects. Available for internships.",
    siteName: "Dinakar Reddy Portfolio",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Dinakar Reddy - Professional Portfolio with AI Chatbot",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinakar Reddy - Full-stack Developer & AI Engineer",
    description:
      "Professional portfolio showcasing AI projects, IoT systems, and automation solutions. available for Fulltime Roles/Inteships.",
    creator: "@dinakarreddy",
    site: "@dinakarreddy",
    images: [
      {
        url: "",
        alt: "Dinakar Reddy Professional Portfolio",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://dinu-portfolio-two.vercel.app",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "google-site-verification": "your-google-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://dinu-portfolio-two.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dinakar Reddy",
              jobTitle: "Full-stack Developer & AI Engineer",
              url: "https://dinu-portfolio-two.vercel.app",
              image: "profile.jpeg",
              sameAs: [
                "https://github.com/dinakar-24",
                "https://linkedin.com/in/dinakar2407",
                "https://x.com/dinakarreddii",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              alumniOf: {
                "@type": "Organization",
                name: "SSE",
              },
              knowsAbout: [
                "Python Development",
                "AI Engineering",
                "Machine Learning",
                "IoT Systems",
                "Web Development",
                "Automation",
                "Full Stack Development",
              ],
              description:
                "Full-stack Developer & AI Engineer with expertise in building AI-powered solutions, IoT systems, and automation tools.",
            }),
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">{children}</main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
