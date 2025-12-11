import SectionTitle from "../ui/SectionTitle";
import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform with product catalog, shopping cart, and checkout flow. Built with React, Tailwind CSS, and modern animations.',
      tech: ['React', 'Tailwind CSS', 'React Router', 'Framer Motion'],
      link: 'https://ecom-2-teal.vercel.app/',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Shopping Cart Application',
      description: 'IBM Capstone Project featuring dynamic cart management with Redux state management and RESTful API integration for real-time product data.',
      tech: ['React', 'Redux', 'REST API', 'JavaScript'],
      link: 'https://e-planting-zqnh.vercel.app/',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Full-Stack SaaS Platform',
      description: 'Enterprise-grade SaaS application with authentication, role-based access, and real-time data synchronization using Next.js and PostgreSQL.',
      tech: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript'],
      link: '#',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}