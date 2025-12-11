import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import InfoCard from "../ui/InfoCard";
export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle>About Me</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20" />
              <div className="relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold mb-4">Full-Stack Engineer</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  Currently working as an Associate Software Engineer at Infrix,
                  I specialize in building modern, scalable web applications
                  using cutting-edge technologies.
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  My expertise spans the entire development lifecycle—from
                  designing intuitive, responsive UIs with React and Tailwind
                  CSS to implementing robust, data-driven backends with Next.js,
                  Prisma ORM, and PostgreSQL.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  I'm passionate about clean code, modern UI/UX principles, and
                  creating seamless cross-platform experiences that deliver real
                  value to users.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <InfoCard
              icon={<Briefcase />}
              title="Current Role"
              value="Associate Software Engineer @ Infrix"
            />
            <InfoCard
              icon={<GraduationCap />}
              title="Education"
              value="BS Computer Science, Sukkur IBA University"
            />
            <InfoCard
              icon={<Award />}
              title="Certifications"
              value="IBM React Developer (Coursera)"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
