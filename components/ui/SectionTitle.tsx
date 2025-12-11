import { motion } from "framer-motion";
export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-br from-slate-900 via-blue-800 to-slate-900 dark:from-slate-100 dark:via-blue-400 dark:to-slate-100 bg-clip-text text-transparent">
        {children}
      </h2>
      <div className="w-24 h-1 bg-linear-to-br from-blue-500 to-purple-500 mx-auto rounded-full" />
    </motion.div>
  );
}
