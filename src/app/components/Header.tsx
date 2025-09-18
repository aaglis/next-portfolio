"use client";

import { Button } from "@/components/ui/button";
import { House, IdCard, Briefcase, FolderOpen, Code, Mail } from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  { icon: <House />, label: "Início" },
  { icon: <IdCard />, label: "Sobre" },
  { icon: <Briefcase />, label: "Experiência" },
  { icon: <FolderOpen />, label: "Projetos" },
  { icon: <Code />, label: "Habilidades" },
  { icon: <Mail />, label: "Contato" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-7xl fixed left-1/2 -translate-x-1/2 top-4 shadow-md flex gap-4 p-4 w-fit rounded-md border bg-white/40 backdrop-blur-sm z-10"
    >
      {menuItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.1 }}
        >
          <Button variant={index === 0 ? "default" : "outline"}>
            {item.icon} {item.label}
          </Button>
        </motion.div>
      ))}
    </motion.header>
  );
}
