import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">

      <section className="text-center space-y-6">
        <h2 className="text-3xl md:text-5xl text-[#d8c7a3] font-light">
          Perícia Criminal e Inteligência Investigativa
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Análises técnicas, documentoscopia, investigação digital e reconstrução de fatos com metodologia pericial.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#cbb38a] text-black rounded"
          >
            Solicitar análise
          </Link>

          <Link
            href="/portal"
            className="px-6 py-3 border border-[#cbb38a] text-[#d8c7a3] rounded"
          >
            Portal do Cliente
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 text-sm">
        <div className="border border-[#cbb38a] p-6">
          Perícia Criminal
        </div>
        <div className="border border-[#cbb38a] p-6">
          Documentoscopia
        </div>
        <div className="border border-[#cbb38a] p-6">
          Investigação Digital
        </div>
      </section>

      <section className="text-center text-gray-400">
        <p>
          Cada caso é uma estrutura de evidências. O primeiro passo é a análise inicial.
        </p>
      </section>

    </div>
  );
}
