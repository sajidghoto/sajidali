export default function ExperienceCard({ role, company, location, period, description, achievements }: {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}) {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-blue-500 to-purple-500 rounded-full" />
      <div className="ml-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold mb-1">{role}</h3>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{company}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{period}</p>
            <p className="text-sm text-slate-500 dark:text-slate-500">{location}</p>
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-2">
          {achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
              <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}