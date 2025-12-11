import { motion } from "framer-motion";

export default function ContactCard({ icon, title, value, link }: {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-4 p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 group"
    >
      <div className="p-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg text-white group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="text-left">
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400">{value}</p>
      </div>
    </motion.a>
  );
}