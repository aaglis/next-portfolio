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
      className="fixed left-1/2 -translate-x-1/2 top-4 z-10"
    >
      <nav
        aria-label="Navegação principal"
        className="flex items-center gap-1.5 sm:gap-2 rounded-lg border bg-white/80 backdrop-blur-sm px-2 py-2 shadow-md"
      >
        {menuItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Button
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className="gap-1.5 px-2 sm:px-3 text-xs sm:text-sm"
            >
              {item.icon}
              <span className="hidden sm:inline">{item.label}</span>
            </Button>
          </motion.div>
        ))}
      </nav>
    </motion.header>
  );
}
