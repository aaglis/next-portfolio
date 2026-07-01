"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiNestjs,
  SiSpringboot,
  SiPostgresql,
  SiBun,
  SiGithub,
  SiGitlab,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const techs = [
  { name: "React", icon: <SiReact size={20} /> },
  { name: "Next.js", icon: <SiNextdotjs size={20} /> },
  { name: "TypeScript", icon: <SiTypescript size={20} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={20} /> },
  { name: "SCSS", icon: <SiSass size={20} /> },
  { name: "Node.js", icon: <SiNodedotjs size={20} /> },
  { name: "Nest.js", icon: <SiNestjs size={20} /> },
  { name: "Java", icon: <FaJava size={20} /> },
  { name: "Spring Boot", icon: <SiSpringboot size={20} /> },
  { name: "Postgres", icon: <SiPostgresql size={20} /> },
  { name: "Bun", icon: <SiBun size={20} /> },
  { name: "Elysia", icon: <Zap size={20} /> },
  { name: "GitHub", icon: <SiGithub size={20} /> },
  { name: "GitLab", icon: <SiGitlab size={20} /> },
];

const chipVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="mb-2 text-sm font-bold uppercase tracking-widest text-zinc-400"
          >
            Stack
          </motion.p>
          <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
            Tecnologias que uso
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-3 text-base leading-relaxed text-zinc-600 sm:text-lg"
          >
            Ferramentas com as quais já entreguei projetos em contexto real.
          </motion.p>
        </motion.div>

        {/* Grid único de techs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
          className="flex flex-wrap justify-center gap-3"
        >
          {techs.map((tech) => (
            <motion.div
              key={tech.name}
              variants={chipVariants}
              whileHover={{ y: -3, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="inline-flex items-center gap-2.5 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-zinc-600">{tech.icon}</span>
              <span className="text-sm font-medium text-zinc-800">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CI/CD */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mx-auto mt-10 max-w-xl rounded-xl border border-zinc-200 bg-zinc-50 p-5 text-center"
        >
          <p className="text-sm leading-relaxed text-zinc-600">
            <span className="font-semibold text-zinc-800">
              Entrega contínua:
            </span>{" "}
            Já montei pipelines com GitHub Actions, runners e deploys em VPS
            com Docker. Também mexi com AWS e workflows de CI/CD para
            automatizar todo o ciclo — do commit à produção.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
