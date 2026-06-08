import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Garante que o Turbopack use este diretório como raiz do projeto,
  // evitando a detecção incorreta quando há mais de um package-lock.json.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
