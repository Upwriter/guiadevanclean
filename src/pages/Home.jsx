import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MapPin, Phone, Users, Shield } from 'lucide-react';
import LocationSearch from '../components/LocationSearch';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Encontre a Van Ideal em Qualquer Cidade do Brasil
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                O Guia de Van é especializado em ajudar você a encontrar vans novas e seminovas — executivas, furgões, motorhomes e ambulâncias — em todo o território nacional.
              </p>
              <div className="bg-blue-700/50 rounded-lg p-6 mb-8">
                <p className="text-lg mb-4">
                  <strong>Quer comprar uma van, mas não sabe por onde começar?</strong>
                </p>
                <p className="text-blue-100 mb-4">
                  Nós facilitamos sua jornada, conectando você às melhores oportunidades de compra, com segurança e orientação profissional. Nosso papel é indicar caminhos e parceiros confiáveis para que você faça a melhor escolha — seja para transporte, lazer, saúde ou negócios.
                </p>
                <p className="text-yellow-300 font-semibold">
                  👉 Receba orientação gratuita e descubra onde encontrar sua van ideal.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.link/8sjwum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors font-bold text-lg flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Falar com um especialista
                </a>
                <Link 
                  to="/servicos"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-bold text-lg flex items-center justify-center"
                >
                  Nossos Serviços
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/src/assets/van-executiva-transparent.png" 
                alt="Van Executiva - Guia de Van"
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

      {/* Por que somos referência */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Por que o Guia de Van é referência nacional
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Especialistas em vans e ambulâncias
              </h3>
              <p className="text-gray-600">
                Ajudamos você a entender modelos, características e opções de compra.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Orientação confiável
              </h3>
              <p className="text-gray-600">
                Indicamos os melhores lugares para adquirir seu veículo com segurança.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Atendimento humanizado
              </h3>
              <p className="text-gray-600">
                Nossa equipe orienta você em todas as etapas da busca.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cobertura nacional
              </h3>
              <p className="text-gray-600">
                Conectamos compradores e revendas em todas as cidades do Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que você encontra aqui */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O que você encontra aqui
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <img 
                  src="/src/assets/van-executiva-transparent.png" 
                  alt="Vans Executivas"
                  className="w-full h-48 object-contain rounded-lg"
                  style={{ 
                    filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1))',
                    background: 'transparent'
                  }}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Vans Executivas
              </h3>
              <p className="text-gray-700 mb-6">
                Conheça os principais modelos e onde comprá-los com as melhores condições.
              </p>
              <Link 
                to="/servicos"
                className="text-blue-600 font-semibold hover:text-blue-800 flex items-center"
              >
                Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <img 
                  src="/src/assets/van-ambulancia-transparent.png" 
                  alt="Ambulâncias"
                  className="w-full h-48 object-contain rounded-lg"
                  style={{ 
                    filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1))',
                    background: 'transparent'
                  }}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ambulâncias de Pronta Entrega
              </h3>
              <p className="text-gray-700 mb-6">
                Saiba como encontrar veículos homologados e prontos para uso.
              </p>
              <Link 
                to="/servicos"
                className="text-red-600 font-semibold hover:text-red-800 flex items-center"
              >
                Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <img 
                  src="/src/assets/van-motorhome-transparent.png" 
                  alt="Vans para Motorhome"
                  className="w-full h-48 object-contain rounded-lg"
                  style={{ 
                    filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1))',
                    background: 'transparent'
                  }}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Vans para Motorhome
              </h3>
              <p className="text-gray-700 mb-6">
                Descubra as opções ideais para quem busca liberdade e conforto na estrada.
              </p>
              <Link 
                to="/servicos"
                className="text-green-600 font-semibold hover:text-green-800 flex items-center"
              >
                Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Busca por Localização */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Atendemos todas as cidades do Brasil
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              De São Paulo a Manaus, do Rio a Porto Alegre — o Guia de Van conecta você às melhores oportunidades de compra de vans e ambulâncias.
            </p>
          </div>
          <LocationSearch />
        </div>
      </section>

      {/* Consultoria gratuita */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Consultoria gratuita, confiança garantida
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Nosso compromisso é facilitar o caminho até a compra da van ideal. Não vendemos veículos — oferecemos <strong>orientação personalizada</strong>, <strong>informações técnicas</strong> e <strong>indicações seguras</strong> para que você compre com total confiança.
          </p>
          <a 
            href="https://wa.link/8sjwum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors font-bold text-lg inline-flex items-center"
          >
            <Phone className="mr-2 h-5 w-5" />
            Falar com um especialista
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre como encontrar e comprar a van ideal
            </p>
          </div>
          <FAQ />
        </div>
      </section>
    </div>
  );
};

export default Home;
