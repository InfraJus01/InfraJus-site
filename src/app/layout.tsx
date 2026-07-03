import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "InfraJus | Perícia e Inteligência Investigativa",
  description: "Perícia Criminal, Documentoscopia e Investigação Técnica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-[#0b1a2a] text-white">
        <header className="flex justify-between items-center p-6 border-b border-[#cbb38a]">
          <h1 className="text-xl tracking-widest text-[#d8c7a3]">
            INFRAJUS
          </h1>

          <nav className="flex gap-6 text-sm">
            <Link href="/">Home</Link>
            <Link href="/services">Serviços</Link>
            <Link href="/how-it-works">Como funciona</Link>
            <Link href="/portal">Portal do Cliente</Link>
            <Link href="/contact">Contato</Link>
          </nav>
        </header>

        <main className="p-10">{children}</main>

        <footer className="p-6 border-t border-[#cbb38a] text-center text-sm text-gray-400">
          InfraJus © {new Date().getFullYear()} | Perícia e Inteligência Investigativa
        </footer>
      </body>
    </html>
  );
}
