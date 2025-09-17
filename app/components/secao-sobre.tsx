
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { History, TrendingUp, MapPin, Award } from 'lucide-react'

export default function SecaoSobre() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const infoCards = [
    {
      icon: History,
      titulo: 'História',
      conteudo: 'Fundada em 1959, evoluiu de Takeyuti Ykeuti para Mineração Itapeva em 1971',
      cor: 'text-blue-500'
    },
    {
      icon: TrendingUp,
      titulo: 'Liderança',
      conteudo: 'Maior produtora de filito do Brasil com 300.000 toneladas anuais',
      cor: 'text-green-500'
    },
    {
      icon: MapPin,
      titulo: 'Localização',
      conteudo: 'Rodovia SP 258, aproximadamente 300 km ao sul de São Paulo',
      cor: 'text-purple-500'
    },
    {
      icon: Award,
      titulo: 'Qualidade',
      conteudo: 'Laboratório próprio e parceria com T-Cota Engenharia de Materiais',
      cor: 'text-yellow-500'
    }
  ]

  return (
    <section id="sobre" className="py-20 bg-branco-gelo scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cinza-escuro mb-6">
            Sobre a Mineração Itapeva
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 6 décadas de tradição e excelência na produção de filito e materiais para construção civil
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Vídeo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-2xl">
              <video
                controls
                className="w-full h-full object-cover"
                poster="/images/hero-mineracao-aerea.jpg"
              >
                <source src="/videos/mineracao-itapeva.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-cinza-escuro">
                Tradição e Inovação
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                A Mineração Itapeva é uma empresa familiar fundada em 1959, localizada 
                no sudoeste do interior paulista, a 290 km da capital São Paulo, na 
                cidade de Itapeva SP - a famosa capital dos minérios.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Operamos com duas unidades fabris e somos atualmente listados entre as 
                maiores mineradoras do Brasil, sendo a maior produtora e detentora da 
                maior jazida de filito do país, com um volume extraído de aproximadamente 
                350.000 toneladas por ano, mais 200.000 toneladas por ano de material estéril.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="font-semibold text-cinza-escuro mb-4">Nossos Números</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-vermelho-principal font-bold">350k</span>
                    <p className="text-gray-600">Toneladas/Ano</p>
                  </div>
                  <div>
                    <span className="text-vermelho-principal font-bold">5</span>
                    <p className="text-gray-600">Decretos de Lavra</p>
                  </div>
                  <div>
                    <span className="text-vermelho-principal font-bold">100+</span>
                    <p className="text-gray-600">Empregos Diretos</p>
                  </div>
                  <div>
                    <span className="text-vermelho-principal font-bold">65+</span>
                    <p className="text-gray-600">Anos de História</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cards de informações */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg card-hover"
            >
              <div className="flex items-center justify-center mb-4">
                <card.icon className={`w-10 h-10 ${card.cor}`} />
              </div>
              <h4 className="text-xl font-semibold text-cinza-escuro mb-3 text-center">
                {card.titulo}
              </h4>
              <p className="text-gray-600 text-center text-sm">
                {card.conteudo}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
