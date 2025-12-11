import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  gradient,
}: {
  title: string;
  description: string;
  tech: string[];
  link: string;
  gradient: string;
}) {
  return (
    <motion.div whileHover={{ y: -10 }} className="group relative h-full">
      <div
        className={cn(
          "absolute inset-0 bg-linear-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl",
          gradient
        )}
      />
      <div className="relative h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-200 dark:border-slate-700 group-hover:border-transparent transition-all duration-300 flex flex-col">
        <div
          className={cn(
            "inline-flex p-3 rounded-lg bg-linear-to-br text-white mb-4 w-fit",
            gradient
          )}
        >
          <Code2 className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4 grow leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
        >
          View Project <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}
