"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import MePhoto from "../../../public/me.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

import { TextAnimate } from "@/components/ui/text-animate";
import { ShinyButton } from "@/components/ui/shiny-button";

export default function Initial() {
  return (
    <div className="max-w-7xl mx-auto mt-50 p-4 flex gap-52 items-center">
      {/* Texto */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-xl flex flex-col gap-3"
      >
        <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
        >   
            <TextAnimate animation="blurInUp" by="character" delay={0.2} className="text-7xl font-bold mb-4">
                Olá, eu sou Aglis
            </TextAnimate>

        </motion.div>
        <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
        >
            <TextAnimate animation="blurInUp" by="character" delay={0.4} className="text-2xl font-semibold text-zinc-600">
                Fullstack Developer 
            </TextAnimate>
        </motion.div>
        <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6 }}
        >
            <TextAnimate animation="blurInUp" by="character" delay={0.6} className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum a ipsum laudantium cum nihil quod sapiente maiores mollitia, corrupti excepturi eveniet? Soluta ab architecto consequatur deserunt sint illum, odio fugiat!
            </TextAnimate>
        </motion.div>

        {/* Botões */}
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 mt-6"
        >
          <ShinyButton className="gap-2">
            <ArrowRight />
            <span>Contrate-me</span>
          </ShinyButton>
          <ShinyButton  className="gap-2">
            <Download />
            <span>Baixar CV</span>
          </ShinyButton>
        </motion.div>
      </motion.div>

      {/* Foto */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src={MePhoto}
          alt="Me"
          className="w-[400px] h-[600px] object-cover rounded-2xl shadow-lg"
        />
      </motion.div>
    </div>
  );
}
