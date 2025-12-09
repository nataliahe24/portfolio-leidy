import Link from "next/link";
import { Github, Linkedin, Codepen } from "lucide-react";
import { socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="w-full py-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-800">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Leidy's Portfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-8 w-8 text-cyan-500 transition-all duration-300 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
          </Link>
          <Link
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-8 w-8 text-cyan-500 transition-all duration-300 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
          </Link>
          <Link
            href={socialLinks.codepen}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Codepen"
          >
            <Codepen className="h-8 w-8 text-cyan-500 transition-all duration-300 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
