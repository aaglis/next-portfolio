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

/* ───── Stack ───── */

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

/* ───── Timeline ───── */

const experiences = [
  {
    period: "Ago 2022 · Dez 2022",
    role: "Desenvolvedor Front-End",
    company: "DunaSystem",
    description:
      "Atuação como estagiário em uma startup de tecnologia, participando do desenvolvimento e manutenção de aplicações web. Experiência inicial com demandas reais de produto, versionamento de código, correções e colaboração com equipe de desenvolvimento.",
    tags: ["JavaScript", "React", "Git", "HTML", "CSS"],
  },
  {
    period: "Ago 2023 · Set 2025",
    role: "Desenvolvedor Front-End",
    company: "NDS — Núcleo de Desenvolvimento de Softwares · IFCE Maracanaú",
    description:
      "Desenvolvimento de sistemas institucionais para uso interno do campus, atuando em projetos como Intranet, SysAvisos e Deppi. Participei da construção de interfaces, APIs, correções, novas funcionalidades e manutenção de sistemas utilizados por servidores e setores administrativos.",
    tags: ["JavaScript", "TypeScript", "Angular", "SCSS"],
  },
  {
    period: "Nov 2024 · Presente",
    role: "Desenvolvedor Full-Stack",
    company: "LTAP — Laboratório de Telemática, Acessibilidade e Projetos Educacionais",
    description:
      "Atuação no desenvolvimento e manutenção de sistemas web educacionais e institucionais, participando de projetos como Edital360, Empreendedores Digitais e PlaforEDU. Trabalho com frontend, backend, integrações, deploy e melhoria de fluxos internos.",
    tags: ["React", "Next.js", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "Docker"],
  },
];

/* ───── Variants ───── */

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.04 },
  }),
};

const timelineEntry = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const dotFade = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

/* ───── Componente ───── */

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/*
         * ═══════ STACK ═══════
         */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-6 max-w-2xl text-center"
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

        {/* Chips da stack */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.03 } },
          }}
          className="mb-6 flex flex-wrap justify-center gap-3"
        >
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              custom={i}
              variants={fadeUp}
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
          className="mx-auto mb-20 max-w-xl rounded-xl border border-zinc-200 bg-zinc-50 p-5 text-center"
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

        {/*
         * ═══════ TIMELINE ═══════
         */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="mb-2 text-sm font-bold uppercase tracking-widest text-zinc-400"
          >
            Trajetória
          </motion.p>
          <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
            Onde já trabalhei
          </h2>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <div className="relative">
            {/* Linha vertical — fina, discreta */}
            <div className="absolute bottom-1 left-[5px] top-1 w-px bg-zinc-200 sm:left-[7px]" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.18 } },
              }}
              className="flex flex-col gap-8"
            >
              {experiences.map((exp) => (
                <motion.div
                  key={exp.company + exp.period}
                  variants={timelineEntry}
                  className="relative pl-7 sm:pl-9"
                >
                  {/* Bolinha — pequena, sem anel */}
                  <motion.div
                    variants={dotFade}
                    className="absolute left-0 top-[18px] z-10 h-3 w-3 rounded-full bg-zinc-300 sm:top-[20px] sm:h-3.5 sm:w-3.5"
                  />

                  {/* Card — simples, sem firulas */}
                  <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-semibold text-zinc-900">
                        {exp.role}
                      </h3>
                      <span className="text-xs text-zinc-400">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm text-zinc-500">
                      {exp.company}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                      {exp.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
