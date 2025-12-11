import { cn } from "@/lib/utils";
export default function SkillCard({
  title,
  icon,
  color,
  skills,
}: {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: string[];
}) {
  return (
    <div className="group relative">
      <div
        className={cn(
          "absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl",
          color
        )}
      />
      <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-200 dark:border-slate-700 group-hover:border-transparent transition-all duration-300">
        <div
          className={cn(
            "inline-flex p-3 rounded-lg bg-linear-to-br text-white mb-4",
            color
          )}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
