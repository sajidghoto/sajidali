import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sajid Ali - Full-Stack Next.js Developer",
  description: "Full-Stack Next.js Developer specializing in building modern, scalable, and high-performance applications. Expert in React, TypeScript, Prisma, and PostgreSQL.",
  keywords: ["Next.js", "React", "Full-Stack Developer", "TypeScript", "Web Development"],
  authors: [{ name: "Sajid Ali" }],
  openGraph: {
    title: "Sajid Ali - Full-Stack Next.js Developer",
    description: "Building scalable, high-performance web applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        </body>
    </html>
  );
}