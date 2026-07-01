"use client";

import { Code, FileCode, Users } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: <Code size={22} />,
    title: "Front & Back",
    text: "Penso na aplicação como um sistema só: interface que comunica e API que responde, sem fronteiras artificiais entre os dois.",
  },
  {
    icon: <FileCode size={22} />,
    title: "Código claro",
    text: "Componentes previsíveis, APIs objetivas, estrutura que não acumula dívida técnica com o tempo.",
  },
  {
    icon: <Users size={22} />,
    title: "Colaboração",
    text: "Contexto de produto, feedback direto e entregas iterativas. Funciono bem em time e com ritmo.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const iconVariants = {
  hidden: { scale: 0, rotate: -30 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { type: "spring" as const, stiffness: 250, damping: 15 },
  },
};

export default function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="mb-2 text-sm font-bold uppercase tracking-widest text-zinc-400"
          >
            Sobre
          </motion.p>
          <h2
            id="about-title"
            className="text-3xl font-bold text-zinc-900 sm:text-4xl"
          >
            Como eu penso sobre desenvolvimento
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-3 text-base leading-relaxed text-zinc-600 sm:text-lg"
          >
            Não separo front de back como mundos distintos. Prefiro pensar na
            entrega como um sistema só — código que resolve, de ponta a ponta.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-3">
          {values.map((item, i) => (
            <motion.article
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <motion.div
                variants={iconVariants}
                className="mb-4 inline-flex rounded-lg border border-zinc-200 bg-white p-2.5 text-zinc-700"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-base font-semibold text-zinc-900">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
