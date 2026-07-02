"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, MapPin } from "lucide-react";

const socials = [
  { icon: <Github size={18} />, label: "GitHub", href: "#" },
  { icon: <Linkedin size={18} />, label: "LinkedIn", href: "#" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contato" className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex rounded-full border border-zinc-200 bg-white p-3 shadow-sm">
            <Mail size={22} className="text-zinc-500" />
          </div>
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-zinc-400">
            Contato
          </p>
          <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
            Vamos trabalhar juntos
          </h2>
          <p className="mt-3 text-base text-zinc-500">
            Estou disponível para novos projetos, parcerias e oportunidades.
          </p>
        </motion.div>

        {/* Card com info + form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm"
        >
          <div className="grid gap-0 sm:grid-cols-[1fr_1.2fr]">
            {/* ── Lado esquerdo: info ── */}
            <div className="bg-zinc-50 p-6 sm:p-8">
              <h3 className="text-base font-semibold text-zinc-900">
        Informações
              </h3>

              <div className="mt-5 space-y-4">
                <a
                  href="mailto:aglissilva17@gmail.com"
                  className="flex items-center gap-3 text-sm text-zinc-600 transition-colors hover:text-zinc-900"
                >
                  <div className="rounded-lg border border-zinc-200 bg-white p-2 text-zinc-500">
                    <Mail size={16} />
                  </div>
                  <span>aglissilva17@gmail.com</span>
                </a>

                <div className="flex items-center gap-3 text-sm text-zinc-600">
                  <div className="rounded-lg border border-zinc-200 bg-white p-2 text-zinc-500">
                    <MapPin size={16} />
                  </div>
                  <span>Brasil · Remoto</span>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  Redes
                </p>
                <div className="mt-3 flex gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="rounded-lg border border-zinc-200 bg-white p-2.5 text-zinc-500 shadow-sm transition-colors hover:text-zinc-700"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Lado direito: formulário ── */}
            <form onSubmit={handleSubmit} className="space-y-4 p-6 sm:p-8">
              <div>
                <label htmlFor="email" className="sr-only">
                  Seu e-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:scale-[1.01] focus:border-zinc-400 focus:ring-2 focus:ring-zinc-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Sua mensagem..."
                  className="w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:scale-[1.01] focus:border-zinc-400 focus:ring-2 focus:ring-zinc-300"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-zinc-800"
              >
                {sent ? (
                  <motion.span
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                  >
                    ✓ Enviado!
                  </motion.span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Enviar mensagem</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
