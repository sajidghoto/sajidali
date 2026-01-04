import React from "react";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © 2025 Sajid Ali. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/sajidali-dev"
            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/sajidali-dev"
            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
