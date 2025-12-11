import { motion } from "framer-motion";
import ContactCard from "../ui/ContactCard";
import SectionTitle from "../ui/SectionTitle";
import { Mail, } from "lucide-react";
import { Linkedin } from "lucide-react";
export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <SectionTitle>Let's Work Together</SectionTitle>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            I'm always interested in hearing about new projects and opportunities.
            <br />
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <ContactCard
              icon={<Mail />}
              title="Email"
              value="sajidalighoto.dev@gmail.com"
              link="mailto:sajidalighoto.dev@gmail.com"
            />
            <ContactCard
              icon={<Linkedin />}
              title="LinkedIn"
              value="Connect with me"
              link="www.linkedin.com/in/sajidali-dev"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}