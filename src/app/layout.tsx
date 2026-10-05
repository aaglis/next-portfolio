import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aglis Silva | Desenvolvedor Full Stack",
  description:
    "Desenvolvedor Full Stack em Fortaleza. React, Angular, Node.js, Java, APIs e produtos web construídos para funcionar de ponta a ponta.",
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
