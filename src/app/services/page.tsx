export default function Services() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto py-10">
      <h2 className="text-4xl text-[#b89a65] font-serif border-b border-[#b89a65] pb-4">
        Serviços Periciais
      </h2>

      <div className="space-y-8">
        <div className="border-l-2 border-[#b89a65] pl-6 py-2">
          <h3 className="text-2xl text-[#b89a65] font-serif">Documentoscopia</h3>
          <p className="text-gray-300 mt-2 leading-relaxed">
            Análise técnica minuciosa de autenticidade documental, identificando adulterações, fraudes e padrões de escrita.
          </p>
        </div>

        <div className="border-l-2 border-[#b89a65] pl-6 py-2">
          <h3 className="text-2xl text-[#b89a65] font-serif">Grafotecnia</h3>
          <p className="text-gray-300 mt-2 leading-relaxed">
            Estudo aprofundado para verificação de autoria gráfica, garantindo segurança jurídica em assinaturas e manuscritos.
          </p>
        </div>

        <div className="border-l-2 border-[#b89a65] pl-6 py-2">
          <h3 className="text-2xl text-[#b89a65] font-serif">Investigação Digital</h3>
          <p className="text-gray-300 mt-2 leading-relaxed">
            Rastreamento e análise de evidências eletrônicas com metodologia científica para auxílio em processos investigativos.
          </p>
        </div>
      </div>
    </div>
  );
}
