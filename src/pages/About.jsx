import React from 'react';
import { Phone, Target, Eye, Heart, CheckCircle, Users, Shield, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre o Guia de Van
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Conectando compradores às melhores oportunidades de vans e ambulâncias em todo o Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                O <strong>Guia de Van</strong> nasceu com o propósito de tornar a compra de vans mais simples e segura. Com experiência no setor automotivo e no marketing digital, reunimos conhecimento e tecnologia para facilitar a vida de quem busca um veículo para trabalho, lazer ou transporte profissional.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Nosso papel não é vender veículos, mas <strong>orientar e conectar pessoas às melhores oportunidades de compra</strong>, com base em informações atualizadas, análise de mercado e indicações confiáveis.
              </p>
              <a 
                href="https://wa.link/8sjwum"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Falar com Nossa Equipe
              </a>
            </div>
            <div className="relative">
              <img 
                src="/src/assets/van-executiva-transparent.png" 
                alt="Guia de Van - Especialistas em Vans"
                className="w-full h-auto rounded-lg shadow-2xl"
                style={{ 
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))',
                  background: 'transparent'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Missão */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Missão
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Facilitar o processo de compra de vans e ambulâncias, oferecendo informações claras e seguras para que cada pessoa faça a melhor escolha.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Visão
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ser o principal portal de referência no Brasil para quem busca vans, furgões e ambulâncias de qualidade.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Valores
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Transparência, ética, compromisso, confiança e foco total na satisfação do comprador.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Diferenciais */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guia de Van: especialistas que orientam, não apenas anunciam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Equipe Especializada
              </h3>
              <p className="text-gray-600">
                Profissionais com experiência no mercado automotivo e conhecimento técnico
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Parceiros Verificados
              </h3>
              <p className="text-gray-600">
                Rede de revendas e consultores confiáveis em todo o território nacional
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Orientação Gratuita
              </h3>
              <p className="text-gray-600">
                Consultoria sem custos para encontrar a van ideal para suas necessidades
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Processo Transparente
              </h3>
              <p className="text-gray-600">
                Informações claras e honestas em todas as etapas do processo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nosso Compromisso */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nosso Compromisso com Você
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Encontre aqui o suporte que você precisa para realizar sua compra com segurança.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-700/50 rounded-lg p-6">
              <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Orientação Personalizada</h3>
              <p className="text-blue-100">Atendimento individual conforme suas necessidades específicas</p>
            </div>

            <div className="bg-blue-700/50 rounded-lg p-6">
              <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Informações Técnicas</h3>
              <p className="text-blue-100">Dados precisos sobre modelos, preços e especificações</p>
            </div>

            <div className="bg-blue-700/50 rounded-lg p-6">
              <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Indicações Seguras</h3>
              <p className="text-blue-100">Conexões com revendas e consultores verificados</p>
            </div>
          </div>

          <a 
            href="https://wa.link/8sjwum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors font-bold text-lg inline-flex items-center"
          >
            <Phone className="mr-2 h-5 w-5" />
            Falar com um Especialista
          </a>
        </div>
      </section>

      {/* Cobertura Nacional */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Atendimento em Todo o Brasil
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conectamos compradores e oportunidades de venda em todas as regiões do país
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Norte</h3>
              <p className="text-gray-600 text-sm">Amazonas, Pará, Acre, Rondônia, Roraima, Amapá, Tocantins</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Nordeste</h3>
              <p className="text-gray-600 text-sm">Bahia, Ceará, Pernambuco, Maranhão, Paraíba, Alagoas, Sergipe, RN, PI</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Centro-Oeste</h3>
              <p className="text-gray-600 text-sm">Mato Grosso, Mato Grosso do Sul, Goiás, Distrito Federal</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sudeste</h3>
              <p className="text-gray-600 text-sm">São Paulo, Rio de Janeiro, Minas Gerais, Espírito Santo</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sul</h3>
              <p className="text-gray-600 text-sm">Rio Grande do Sul, Santa Catarina, Paraná</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
