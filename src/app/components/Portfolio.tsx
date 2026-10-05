"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "Interfaces que orientam decisões",
    text: "Transformo requisitos e layouts em fluxos claros, responsivos e acessíveis — cuidando de carregamento, erros, permissões e estados vazios.",
    tags: ["React", "Next.js", "Angular", "TypeScript"],
  },
  {
    number: "02",
    title: "Sistemas que conversam",
    text: "Construo APIs e regras de negócio que conectam produtos, dados e serviços externos sem perder contexto, segurança ou manutenção.",
    tags: ["Node.js", "NestJS", "Java", "PostgreSQL"],
  },
  {
    number: "03",
    title: "Entrega que se sustenta",
    text: "Testes, revisão de código, pipelines e investigação de falhas fazem parte do trabalho — não entram como etapa final.",
    tags: ["Vitest", "Docker", "CI/CD", "AWS"],
  },
];

const cases = [
  {
    kicker: "Produto & operações",
    title: "Plataformas que organizam jornadas complexas",
    text: "Atuação em aplicações educacionais e institucionais: interfaces, regras de negócio, APIs e fluxos internos que precisam ser claros para quem usa e sustentáveis para quem mantém.",
    stack: ["React", "Angular", "TypeScript", "Spring Boot", "PostgreSQL"],
    label: "Experiência profissional",
  },
  {
    kicker: "Serviços externos",
    title: "Pagamento é um fluxo, não só um botão",
    text: "Evolução de jornadas com Pix, cartão e boleto, conectando a interface a serviços externos e tratando validações, estados e cenários de erro com cuidado.",
    stack: ["APIs REST", "Webhooks", "Node.js", "Validações"],
    label: "Experiência profissional",
  },
];

const experience = [
  {
    period: "2024 — agora",
    role: "Desenvolvedor Full Stack",
    company: "LTAP · IFCE",
    text: "Aplicações web, serviços, integrações e evolução de fluxos para plataformas educacionais e institucionais.",
  },
  {
    period: "2023 — 2025",
    role: "Desenvolvedor Front-end",
    company: "NDS · IFCE Maracanaú",
    text: "Interfaces institucionais com Angular e TypeScript, conectadas a APIs e necessidades administrativas reais.",
  },
  {
    period: "2022",
    role: "Desenvolvedor Front-end · Estágio",
    company: "DunaSystem",
    text: "Primeira experiência profissional: manutenção, produto e colaboração em aplicações React.",
  },
];

const techGroups = [
  ["Na interface", "React · Next.js · Angular · TypeScript · Tailwind · SCSS"],
  ["Nos serviços", "Node.js · NestJS · Java · Spring Boot · APIs REST"],
  ["Nos dados", "PostgreSQL · Redis · SQL · Drizzle"],
  ["Na entrega", "Vitest · React Testing Library · Git · Docker · CI/CD · AWS"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f5f0] text-[#12231e] selection:bg-[#d8ff4d] selection:text-[#12231e]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
        <a className="text-lg font-black tracking-[-0.08em]" href="#inicio">aglis<span className="text-[#e85d3f]">.</span></a>
        <div className="hidden items-center gap-7 text-sm font-medium md:flex">
          <a className="transition hover:text-[#e85d3f]" href="#trabalho">Como trabalho</a>
          <a className="transition hover:text-[#e85d3f]" href="#casos">Casos</a>
          <a className="transition hover:text-[#e85d3f]" href="#trajetoria">Trajetória</a>
        </div>
        <a href="#contato" className="rounded-full border border-[#12231e] px-4 py-2 text-xs font-bold transition hover:bg-[#12231e] hover:text-white">Vamos conversar <ArrowUpRight className="ml-1 inline h-3 w-3" /></a>
      </nav>

      <section id="inicio" className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-10 md:grid-cols-[1.2fr_.8fr] md:px-8 md:pb-28 md:pt-20">
        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }}>
          <motion.p variants={fadeUp} className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#e85d3f]"><span className="h-2 w-2 rounded-full bg-[#e85d3f]" /> Disponível para novos desafios</motion.p>
          <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-black leading-[.93] tracking-[-0.075em] md:text-7xl lg:text-8xl">Software bom resolve o problema <span className="text-[#e85d3f]">antes</span> de virar backlog.</motion.h1>
          <motion.p variants={fadeUp} className="mt-8 max-w-xl text-lg leading-relaxed text-[#4e5d56] md:text-xl">Sou Aglis, desenvolvedor full stack. Construo produtos web que fazem sentido para quem usa e para quem precisa evoluí-los depois.</motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <a href="#casos" className="rounded-full bg-[#12231e] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#e85d3f]">Ver o que construo <ArrowDownRight className="ml-1 inline h-4 w-4" /></a>
            <a href="https://www.linkedin.com/in/aglis-bernardino-da-silva/" target="_blank" rel="noreferrer" className="rounded-full border border-[#b9beb9] px-5 py-3 text-sm font-bold transition hover:border-[#12231e]">LinkedIn</a>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.18, duration: 0.6 }} className="relative mx-auto w-full max-w-md md:mt-3">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] bg-[#d8ff4d]" />
          <Image src="/me.jpg" alt="Aglis Silva" width={600} height={720} priority className="relative aspect-[4/5] w-full rounded-[2rem] object-cover grayscale-[15%]" />
          <div className="absolute -bottom-5 -right-4 max-w-[210px] rounded-2xl bg-[#e85d3f] p-5 text-white shadow-lg"><p className="text-3xl font-black tracking-[-0.08em]">3+ anos</p><p className="mt-1 text-xs font-medium leading-relaxed">em projetos reais, da interface ao deploy.</p></div>
        </motion.div>
      </section>

      <section id="trabalho" className="border-y border-[#d9ddd7] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e85d3f]">Como trabalho</p>
          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row"><h2 className="max-w-2xl text-4xl font-black leading-none tracking-[-0.06em] md:text-5xl">Menos handoff. Mais responsabilidade pela entrega.</h2><p className="max-w-sm text-base leading-relaxed text-[#526058]">Eu não vejo frontend e backend como lados opostos. Vejo uma experiência que precisa funcionar de ponta a ponta.</p></div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#d9ddd7] bg-[#d9ddd7] md:grid-cols-3">
            {capabilities.map((item) => <article key={item.number} className="bg-white p-7 md:p-8"><span className="text-xs font-black text-[#e85d3f]">{item.number}</span><h3 className="mt-12 text-2xl font-black tracking-[-0.05em]">{item.title}</h3><p className="mt-4 leading-relaxed text-[#526058]">{item.text}</p><div className="mt-7 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="rounded-full bg-[#f0f1ec] px-3 py-1 text-xs font-semibold">{tag}</span>)}</div></article>)}
          </div>
        </div>
      </section>

      <section id="casos" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex items-end justify-between gap-6"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e85d3f]">Casos selecionados</p><h2 className="mt-4 text-4xl font-black tracking-[-0.06em] md:text-5xl">O trabalho por trás da tela.</h2></div><a className="hidden text-sm font-bold underline underline-offset-4 md:block" href="https://github.com/aaglis" target="_blank" rel="noreferrer">Ver GitHub</a></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {cases.map((item, index) => <article key={item.title} className={`group rounded-3xl p-7 md:p-9 ${index === 0 ? "bg-[#12231e] text-white" : "bg-[#d8ff4d]"}`}><p className={`text-xs font-bold uppercase tracking-[0.16em] ${index === 0 ? "text-[#d8ff4d]" : "text-[#4a5b10]"}`}>{item.kicker}</p><h3 className="mt-16 max-w-md text-3xl font-black leading-[.95] tracking-[-0.06em] md:text-4xl">{item.title}</h3><p className={`mt-6 max-w-lg leading-relaxed ${index === 0 ? "text-[#d4ded8]" : "text-[#314013]"}`}>{item.text}</p><div className="mt-9 flex flex-wrap gap-2">{item.stack.map((tag) => <span key={tag} className={`rounded-full border px-3 py-1 text-xs font-semibold ${index === 0 ? "border-white/25" : "border-[#738b24]"}`}>{tag}</span>)}</div><p className="mt-10 text-xs font-bold uppercase tracking-[0.16em] opacity-60">{item.label}</p></article>)}
        </div>
        <article className="mt-5 grid overflow-hidden rounded-3xl bg-white md:grid-cols-2">
          <div className="p-7 md:p-10"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e85d3f]">Projeto autoral · Intelliboard</p><h3 className="mt-12 text-3xl font-black leading-[.95] tracking-[-0.06em] md:text-4xl">Organização de trabalho com IA que entende limites.</h3><p className="mt-6 max-w-lg leading-relaxed text-[#526058]">Uma aplicação de gestão de trabalho com quadro Kanban, notas, calendário e servidor MCP. Agentes podem consultar e operar cards, respeitando permissões e validações.</p><a href="https://intelliboard.aglissilva.dev/" target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-full bg-[#12231e] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#e85d3f]">Abrir projeto <ArrowUpRight className="ml-1 inline h-4 w-4" /></a></div>
          <div className="relative min-h-[280px] bg-[#e9ebe5]"><Image src="/projects/intelliboard.png" alt="Prévia do Intelliboard" fill className="object-cover object-left-top" /></div>
        </article>
      </section>

      <section id="trajetoria" className="bg-[#12231e] text-white"><div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-[.8fr_1.2fr] md:px-8 md:py-28"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d8ff4d]">Trajetória</p><h2 className="mt-5 text-4xl font-black leading-none tracking-[-0.06em] md:text-5xl">Experiência que começa no produto e chega à operação.</h2><p className="mt-6 max-w-sm leading-relaxed text-[#bcc8c1]">Minha referência vem de aplicações utilizadas por pessoas reais — e das consequências que uma tela, uma regra ou uma integração podem ter no fluxo delas.</p></div><div className="divide-y divide-white/15">{experience.map((item) => <article key={item.period} className="grid gap-4 py-7 md:grid-cols-[130px_1fr]"><p className="text-sm font-bold text-[#d8ff4d]">{item.period}</p><div><h3 className="text-xl font-black tracking-[-0.04em]">{item.role}</h3><p className="mt-1 text-sm font-bold text-white/60">{item.company}</p><p className="mt-4 max-w-xl leading-relaxed text-[#bcc8c1]">{item.text}</p></div></article>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"><div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e85d3f]">Ferramentas, com contexto</p><h2 className="mt-5 text-4xl font-black leading-none tracking-[-0.06em] md:text-5xl">Tecnologia é meio. Contexto é o que define a escolha.</h2></div><div className="divide-y divide-[#cdd2cc]">{techGroups.map(([title, stack]) => <div key={title} className="grid gap-3 py-5 md:grid-cols-[150px_1fr]"><p className="font-bold">{title}</p><p className="leading-relaxed text-[#526058]">{stack}</p></div>)}</div></div></section>

      <section id="contato" className="mx-3 mb-3 rounded-[2rem] bg-[#e85d3f] text-white md:mx-6"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 py-16 md:flex-row md:items-end md:px-12 md:py-20"><div><p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]"><Sparkles className="h-4 w-4" /> Próximo desafio</p><h2 className="mt-5 max-w-3xl text-5xl font-black leading-[.9] tracking-[-0.07em] md:text-7xl">Vamos fazer algo que funcione de verdade.</h2></div><div className="flex flex-col gap-3"><a href="mailto:aglissilva17@gmail.com" className="rounded-full bg-white px-5 py-3 text-center text-sm font-bold text-[#12231e] transition hover:bg-[#d8ff4d]"><Mail className="mr-2 inline h-4 w-4" /> Entrar em contato</a><div className="flex justify-center gap-4"><a aria-label="LinkedIn" href="https://www.linkedin.com/in/aglis-bernardino-da-silva/" target="_blank" rel="noreferrer"><Linkedin className="h-5 w-5" /></a><a aria-label="GitHub" href="https://github.com/aaglis" target="_blank" rel="noreferrer"><Github className="h-5 w-5" /></a></div></div></div></section>
      <footer className="flex items-center justify-between px-6 py-7 text-xs font-semibold text-[#65716a]"><p>© {new Date().getFullYear()} Aglis Silva</p><p>Fortaleza, CE · Brasil</p></footer>
    </main>
  );
}
