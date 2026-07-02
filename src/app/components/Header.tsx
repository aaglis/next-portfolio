"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { House, IdCard, Briefcase, FolderOpen, Mail } from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  { icon: <House />, label: "Início", href: "#inicio" },
  { icon: <IdCard />, label: "Sobre", href: "#sobre" },
  { icon: <Briefcase />, label: "Experiência", href: "#experiencia" },
  { icon: <FolderOpen />, label: "Projetos", href: "#projetos" },
  { icon: <Mail />, label: "Contato", href: "#contato" },
];

const sectionIds = menuItems.map((item) => item.href.slice(1));

export default function Header() {
  const [active, setActive] = useState("inicio");

  // Scroll-based active detection (mais confiável que IntersectionObserver)
  const handleScroll = useCallback(() => {
    const offset = 140; // altura do header + margem
    const scrollPos = window.scrollY + offset;

    // Percorre de trás pra frente pra pegar a última seção que passou do topo
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i]);
      if (!el) continue;
      if (el.offsetTop <= scrollPos) {
        setActive(sectionIds[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    handleScroll(); // estado inicial
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActive(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

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
        {menuItems.map((item, index) => {
          const isActive = active === item.href.slice(1);
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Button
                variant={isActive ? "default" : "outline"}
                size="sm"
                onClick={() => scrollTo(item.href.slice(1))}
                className="gap-1.5 px-2 sm:px-3 text-xs sm:text-sm"
              >
                {item.icon}
                <span className="hidden sm:inline">{item.label}</span>
              </Button>
            </motion.div>
          );
        })}
      </nav>
    </motion.header>
  );
}
