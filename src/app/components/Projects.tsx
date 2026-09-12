"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Eye } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Intelliboard",
    desc: "Um espaço para organizar tarefas, notas e calendário, com um servidor MCP que permite ao agente de IA consultar e concluir cards pelo chat.",
    tags: ["Next.js", "TypeScript", "MCP", "IA"],
    image: "/projects/intelliboard.png",
    link: "https://intelliboard.aglissilva.dev/",
  },
  {
    title: "Projeto Ágape",
    desc: "Projeto web desenvolvido para apresentar uma experiência clara, acolhedora e acessível em todos os tamanhos de tela.",
    tags: ["Angular", "TypeScript", "SCSS"],
    image: "/projects/projeto-agape.png",
    link: "https://projeto-agape.vercel.app/",
  },
  {
    title: "Deppi",
    desc: "Aplicação web com uma interface moderna e responsiva, pensada para oferecer uma navegação simples e direta.",
    tags: ["Angular", "TypeScript", "SCSS"],
    image: "/projects/deppi-dun.png",
    link: "https://deppi-dun.vercel.app/home",
  },
  {
    title: "Virtual VPN",
    desc: "Landing page focada em comunicar os benefícios de uma solução de VPN de forma objetiva e visual.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/virtual-vpn.png",
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
              className="group w-full"
            >
              <div className="relative h-52 overflow-hidden bg-zinc-100 sm:h-64">
                <Image
                  src={proj.image}
                  alt={`Prévia do projeto ${proj.title}`}
                  fill
                  sizes="(min-width: 768px) 48rem, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent" />
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

                {proj.link ? (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
                  >
                    <ExternalLink size={16} />
                    <span>Ver projeto</span>
                  </a>
                ) : (
                  <span className="mt-4 inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-500">
                    <Eye size={16} />
                    <span>Prévia do projeto</span>
                  </span>
                )}
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
