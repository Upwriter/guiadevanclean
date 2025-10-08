import React from 'react';
import { Phone, CheckCircle, ArrowRight, Users, Truck, Heart, Home } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Serviços e Orientação para Quem Quer Comprar uma Van
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              No Guia de Van, nosso foco é ajudar você a entender o mercado, comparar modelos e descobrir onde comprar com segurança. Atendemos clientes de todo o Brasil que buscam vans executivas, ambulâncias e vans para motorhome.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Principais */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Vans Executivas */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Vans Executivas
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Ideal para transporte de passageiros, empresas e turismo. Nós mostramos <strong>onde encontrar vans executivas novas e seminovas</strong> com o melhor custo-benefício e garantias reais.
              </p>
              <div className="mb-6">
                <img 
                  src="/src/assets/van-executiva-transparent.png" 
                  alt="Vans Executivas"
                  className="w-full h-40 object-contain rounded-lg"
                  style={{ 
                    filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1))',
                    background: 'transparent'
                  }}
                />
              </div>
              <a 
                href="https://wa.link/8sjwum"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center"
              >
                <Phone className="mr-2 h-4 w-4" />
                Consultar Vans Executivas
              </a>
            </div>

            {/* Ambulâncias */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ambulâncias
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Ajudamos você a encontrar <strong>ambulâncias prontas para uso</strong> e veículos adaptados de acordo com a legislação. Saiba onde comprar de forma segura e com documentação atualizada.
              </p>
              <div className="mb-6">
                <img 
                  src="/src/assets/van-ambulancia-transparent.png" 
                  alt="Ambulâncias"
                  className="w-full h-40 object-contain rounded-lg"
                  style={{ 
                    filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1))',
                    background: 'transparent'
                  }}
                />
              </div>
              <a 
                href="https://wa.link/8sjwum"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold inline-flex items-center"
              >
                <Phone className="mr-2 h-4 w-4" />
                Consultar Ambulâncias
              </a>
            </div>

            {/* Vans para Motorhome */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Home className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Vans para Motorhome
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Sonha em ter um motorhome? Apresentamos <strong>modelos preparados para conversão</strong> e orientamos você sobre fornecedores especializados e processos de legalização.
              </p>
              <div className="mb-6">
                <img 
                  src="/src/assets/van-motorhome-transparent.png" 
                  alt="Vans para Motorhome"
                  className="w-full h-40 object-contain rounded-lg"
                  style={{ 
                    filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1))',
                    background: 'transparent'
                  }}
                />
              </div>
              <a 
                href="https://wa.link/8sjwum"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold inline-flex items-center"
              >
                <Phone className="mr-2 h-4 w-4" />
                Consultar Motorhomes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600">
              Processo simples e transparente para encontrar sua van ideal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Você nos conta o que procura
              </h3>
              <p className="text-gray-600">
                Conte-nos suas necessidades, orçamento e preferências
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Nós analisamos o seu caso e indicamos as melhores opções
              </h3>
              <p className="text-gray-600">
                Nossa equipe analisa e seleciona as melhores oportunidades
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Você recebe contatos de revendas e consultores confiáveis
              </h3>
              <p className="text-gray-600">
                Conectamos você com parceiros verificados e confiáveis
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Negocia diretamente com segurança
              </h3>
              <p className="text-gray-600">
                Você negocia diretamente com total segurança e transparência
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quer ajuda para encontrar sua van ideal?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            👉 Fale com nossa equipe e receba uma indicação personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.link/8sjwum"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors font-bold text-lg inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Falar com Especialista
            </a>
            <a 
              href="https://wa.link/8sjwum"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-bold text-lg inline-flex items-center justify-center"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Por que escolher o Guia de Van?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Orientação Especializada
              </h3>
              <p className="text-gray-600">
                Equipe experiente para orientar na melhor escolha conforme suas necessidades
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Parceiros Confiáveis
              </h3>
              <p className="text-gray-600">
                Rede de revendas e consultores verificados em todo o Brasil
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Atendimento Gratuito
              </h3>
              <p className="text-gray-600">
                Consultoria e orientação sem custos para encontrar sua van ideal
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cobertura Nacional
              </h3>
              <p className="text-gray-600">
                Atendemos todas as cidades e estados do Brasil
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Transparência Total
              </h3>
              <p className="text-gray-600">
                Processo transparente sem taxas ocultas ou surpresas
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Suporte Contínuo
              </h3>
              <p className="text-gray-600">
                Acompanhamento durante todo o processo de compra
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
