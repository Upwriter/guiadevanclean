import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em Contato com o Guia de Van
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Fale com nossa equipe e receba orientação gratuita sobre como encontrar a van ideal em sua cidade.
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Como Podemos Ajudar Você?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nosso time está pronto para ajudar você a <strong>encontrar as melhores opções de vans e ambulâncias em todo o Brasil</strong>. Não fazemos venda direta — nosso foco é orientar e indicar o melhor caminho para uma compra segura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* WhatsApp */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                WhatsApp e Telefone
              </h3>
              <p className="text-gray-700 mb-6">
                Atendimento rápido e humanizado
              </p>
              <a 
                href="https://wa.link/8sjwum"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold inline-flex items-center"
              >
                <Phone className="mr-2 h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>

            {/* E-mail */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                E-mail
              </h3>
              <p className="text-gray-700 mb-6">
                Respostas em até 2 horas úteis
              </p>
              <a 
                href="mailto:contato@guiadevan.com.br"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center"
              >
                <Mail className="mr-2 h-4 w-4" />
                Enviar E-mail
              </a>
            </div>

            {/* Cobertura */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Cobertura Nacional
              </h3>
              <p className="text-gray-700 mb-6">
                Conectamos compradores a revendas em todos os estados
              </p>
              <a 
                href="https://wa.link/8sjwum"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold inline-flex items-center"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Consultar Região
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Principal */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Precisa de ajuda agora?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            👉 Fale com um especialista do Guia de Van.
          </p>
          <a 
            href="https://wa.link/8sjwum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors font-bold text-lg inline-flex items-center"
          >
            <Phone className="mr-2 h-5 w-5" />
            Falar com Especialista Agora
          </a>
        </div>
      </section>

      {/* Horários e Informações */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Horários de Atendimento */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Horários de Atendimento
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Segunda a Sexta</span>
                  <span className="text-gray-600">8h às 18h</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Sábado</span>
                  <span className="text-gray-600">8h às 14h</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Domingo</span>
                  <span className="text-gray-600">Plantão WhatsApp</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-900">Feriados</span>
                  <span className="text-gray-600">Plantão WhatsApp</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Atendimento de Emergência:</strong> Para casos urgentes, nosso WhatsApp funciona 24h com resposta em até 2 horas.
                </p>
              </div>
            </div>

            {/* Como Atendemos */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Como Atendemos Você
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Atendimento por telefone, WhatsApp e pelos formulários disponíveis aqui no site</h4>
                    <p className="text-gray-600 text-sm">Múltiplos canais para sua comodidade</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Orientação gratuita e personalizada</h4>
                    <p className="text-gray-600 text-sm">Sem custos para receber nossa consultoria especializada</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Indicações de parceiros confiáveis</h4>
                    <p className="text-gray-600 text-sm">Conectamos você com revendas verificadas em sua região</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Acompanhamento durante todo o processo</h4>
                    <p className="text-gray-600 text-sm">Suporte contínuo até você encontrar sua van ideal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Envie sua Mensagem
            </h2>
            <p className="text-xl text-gray-600">
              Conte-nos o que você procura e nossa equipe entrará em contato
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    Cidade/Estado
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="São Paulo/SP"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="van-type" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Van de Interesse
                </label>
                <select
                  id="van-type"
                  name="van-type"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione o tipo de van</option>
                  <option value="executiva">Van Executiva</option>
                  <option value="ambulancia">Ambulância</option>
                  <option value="motorhome">Van para Motorhome</option>
                  <option value="trabalho">Van de Trabalho</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Conte-nos o que você procura: orçamento, características específicas, prazo, etc."
                ></textarea>
              </div>

              <div className="text-center">
                <a 
                  href="https://wa.link/8sjwum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors font-bold text-lg inline-flex items-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Enviar via WhatsApp
                </a>
                <p className="text-sm text-gray-600 mt-4">
                  Ou preencha o formulário e clique no botão acima para enviar via WhatsApp
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
