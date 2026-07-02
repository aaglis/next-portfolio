import { Github, Linkedin, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Aglis. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-lg border border-zinc-200 bg-white p-2 text-zinc-500 shadow-sm transition-colors hover:text-zinc-700"
          >
            <Github size={16} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg border border-zinc-200 bg-white p-2 text-zinc-500 shadow-sm transition-colors hover:text-zinc-700"
          >
            <Linkedin size={16} />
          </a>
          <Link
            href="#inicio"
            aria-label="Voltar ao topo"
            className="rounded-lg border border-zinc-200 bg-white p-2 text-zinc-500 shadow-sm transition-colors hover:text-zinc-700"
          >
            <ArrowUp size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
