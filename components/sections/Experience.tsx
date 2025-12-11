import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import ExperienceCard from "../ui/ExperienceCard";
export default function Experience() {
  const experiences = [
    {
      role: 'Associate Software Engineer',
      company: 'Infrix',
      location: 'Ghotki',
      period: 'June 2025 - Present',
      description: 'Building responsive, high-performance web applications using React.js, Next.js, Prisma ORM, and PostgreSQL. Focused on clean code architecture and modern UI/UX design patterns.',
      achievements: [
        'Developed scalable full-stack applications with Next.js and PostgreSQL',
        'Implemented responsive UI components with Tailwind CSS',
        'Optimized application performance and user experience'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <ExperienceCard {...exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}