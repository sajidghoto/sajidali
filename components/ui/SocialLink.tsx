import { motion } from "framer-motion";
export default function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="p-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-full border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 group"
      aria-label={label}
      target="_black"
    >
      <div className="text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {icon}
      </div>
    </motion.a>
  );
}
