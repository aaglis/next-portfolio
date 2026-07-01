import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aglis | Desenvolvedor Full-Stack",
  description:
    "Portfólio de Aglis — sistemas completos do frontend ao deploy com React, Node.js, Docker e TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-white text-black">
        {children}
      </body>
    </html>
  );
}
