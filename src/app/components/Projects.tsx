"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

/* ───── Dados placeholder ───── */
const projects = [
  {
    title: "SaaS Multi-Tenant",
    desc: "Plataforma com autenticação, múltiplas organizações e dashboard em tempo real. Arquitetura monolítica modular com deploy automatizado via Docker e GitHub Actions.",
    tags: ["Next.js", "Nest.js", "Postgres", "Docker"],
    gradient: "from-violet-500 to-purple-700",
    initials: "SM",
    link: "#",
  },
  {
    title: "E-commerce API",
    desc: "API RESTful para catálogo de produtos, carrinho e pedidos com cache distribuído em Redis e fila de processamento assíncrono com RabbitMQ.",
    tags: ["Node.js", "Redis", "RabbitMQ", "Docker"],
    gradient: "from-emerald-500 to-teal-700",
    initials: "EC",
    link: "#",
  },
  {
    title: "Dashboard Financeiro",
    desc: "Painel interativo com gráficos em tempo real, exportação de relatórios em PDF e suporte a múltiplos períodos de análise com filtros dinâmicos.",
    tags: ["React", "TypeScript", "Tailwind", "Chart.js"],
    gradient: "from-amber-500 to-orange-700",
    initials: "DF",
    link: "#",
  },
  {
    title: "App de Tarefas",
    desc: "Gerenciador de tarefas com drag-and-drop, colaboração em tempo real via WebSocket e notificações push para atualizações em equipe.",
    tags: ["Next.js", "WebSocket", "Postgres", "Tailwind"],
    gradient: "from-sky-500 to-blue-700",
    initials: "AT",
    link: "#",
  },
];

/* ───── Variants de animação ───── */
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
    transition: { duration: 0.25, ease: "easeIn" as const },
  }),
};

/* ───── Componente ───── */
export default function Projects() {
  const [[index, dir], setState] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const total = projects.length;

  const goTo = useCallback(
    (next: number) => {
      const delta = next - index;
      setState([((next % total) + total) % total, delta]);
    },
    [index, total],
  );

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Auto-play
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  });

  const proj = projects[index];

  return (
    <section
      id="projetos"
      className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-3xl">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-center"
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-zinc-400">
            Projetos
          </p>
          <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
            Coisas que eu construí
          </h2>
        </motion.div>

        {/* ── Card único com slide ── */}
        <motion.div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm"
        >
          <AnimatePresence mode="popLayout" custom={dir}>
            <motion.div
              key={proj.title}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              {/* Imagem placeholder */}
              <div
                className={`flex h-48 items-center justify-center bg-gradient-to-br ${proj.gradient} sm:h-56`}
              >
                <span className="select-none text-5xl font-bold tracking-tight text-white/80 sm:text-6xl">
                  {proj.initials}
                </span>
              </div>

              {/* Info */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-bold text-zinc-900 sm:text-xl">
                  {proj.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {proj.desc}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
                >
                  <ExternalLink size={16} />
                  <span>Ver projeto</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ── Navegação ── */}
        <div className="mt-6 flex items-center justify-center gap-6">
          {/* Seta anterior */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="rounded-full border border-zinc-200 bg-white p-2 text-zinc-500 shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-700"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Projeto ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 bg-zinc-700"
                    : "w-2 bg-zinc-300 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>

          {/* Seta próxima */}
          <button
            onClick={next}
            aria-label="Próximo"
            className="rounded-full border border-zinc-200 bg-white p-2 text-zinc-500 shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-700"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Indicador numérico */}
        <p className="mt-3 text-center text-xs text-zinc-400">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
}
