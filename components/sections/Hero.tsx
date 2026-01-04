import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import MagneticButton from "../ui/Button";
import SocialLink from "../ui/SocialLink";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.2,
              }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400">
                Full-Stack Next.js Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-br from-slate-900 via-blue-800 to-slate-900 dark:from-slate-100 dark:via-blue-400 dark:to-slate-100 bg-clip-text text-transparent"
            >
              Sajid Ali
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed"
            >
              Building scalable, high-performance web applications with modern
              technologies.
              <br />
              Specializing in React, Next.js, and full-stack development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <MagneticButton href="#contact" variant="primary">
                Get In Touch
              </MagneticButton>
              <MagneticButton href="#projects" variant="secondary">
                View Projects
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-6 mt-12"
            >
              <SocialLink
                href="https://github.com/sajidghoto"
                icon={<Github />}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/sajidali-dev"
                icon={<Linkedin />}
                label="LinkedIn"
              />
              <SocialLink
                href="mailto:sajidalighoto.dev@gmail.com"
                icon={<Mail />}
                label="Email"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </motion.div>
    </section>
  );
}
