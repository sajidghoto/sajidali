import { Database,Palette,Zap } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import SkillCard from "../ui/SkillCard";
 export default function Skills() {
  const skillCategories = [
    {
      title: 'Full-Stack & Backend',
      icon: <Database className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'REST APIs', 'TypeScript']
    },
    {
      title: 'Frontend Development',
      icon: <Palette className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: ['React.js', 'Redux', 'Tailwind CSS', 'Framer Motion', 'Vite', 'React Router']
    },
    {
      title: 'Tools & DevOps',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      skills: ['Git', 'Postman', 'Chrome DevTools', 'WordPress', 'Vercel', 'Docker']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <SkillCard {...category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}