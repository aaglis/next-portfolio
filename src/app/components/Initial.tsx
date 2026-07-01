"use client";

import { ArrowRight, Download } from "lucide-react";
import MePhoto from "../../../public/me.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

import { TextAnimate } from "@/components/ui/text-animate";
import { ShinyButton } from "@/components/ui/shiny-button";

export default function Initial() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
        {/* Texto */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex max-w-xl flex-col gap-2"
        >
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <TextAnimate
              animation="blurInUp"
              by="character"
              delay={0.2}
              className="text-4xl font-bold sm:text-5xl lg:text-6xl"
            >
              Olá, eu sou Aglis
            </TextAnimate>
          </motion.div>

          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-xl font-semibold text-zinc-600 sm:text-2xl">
              Desenvolvedor Full-Stack
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="mt-2 text-base leading-relaxed text-zinc-600 sm:text-lg">
              Construo sistemas completos — do frontend ao deploy — com React,
              Node.js, Docker e TypeScript. Foco em código limpo, interfaces
              que comunicam e infraestrutura que sustenta.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <ShinyButton className="gap-2">
              <ArrowRight />
              <span>Projetos</span>
            </ShinyButton>
            <ShinyButton className="gap-2">
              <Download />
              <span>Currículo</span>
            </ShinyButton>
          </motion.div>
        </motion.div>

        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex w-full max-w-sm justify-center lg:max-w-md"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={MePhoto}
              alt="Retrato de Aglis"
              fill
              priority
              sizes="(min-width: 1024px) 28rem, (min-width: 640px) 50vw, 85vw"
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
