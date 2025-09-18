'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Calendar } from 'lucide-react'

export default function Rodape() {
  const scrollParaSecao = (href: string) => {
    const elemento = document.querySelector(href)
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-cinza-escuro text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://cdn.abacus.ai/images/5380f0f8-8bb8-4721-b000-1d0bd6b7a133.png" 
                  alt="Logo Mineração Itapeva" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-2xl font-bold">Mineração Itapeva</h3>
                  <p className="text-gray-400">Desde 1959</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Maior produtora de filito do Brasil, com mais de 65 anos de tradição 
                e compromisso com a qualidade e sustentabilidade. Produção anual de 
                300.000 toneladas, atendendo dois grandes segmentos: construção civil 
                (MATCON) e nutrição animal (ITAGEO).
              </p>
            </motion.div>
          </div>

          {/* Links rápidos */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                {[
                  { nome: 'Início', href: '#inicio' },
                  { nome: 'Sobre', href: '#sobre' },
                  { nome: 'Produtos', href: '#produtos' },
                  { nome: 'Contato', href: '#contato' }
                ].map((link) => (
                  <li key={link.nome}>
                    <button
                      onClick={() => scrollParaSecao(link.href)}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.nome}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contato */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-vermelho-principal" />
                  <span className="text-gray-300">(15) 3521-9550</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-vermelho-principal" />
                  <span className="text-gray-300">contato@mineracaoitapeva.com.br</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-vermelho-principal mt-1" />
                  <span className="text-gray-300">
                    Estrada Municipal Luis José Sguario, Km 5<br />
                    Itapeva/SP - CEP: 18400-970
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 mb-4 md:mb-0"
            >
              <Calendar className="w-5 h-5 text-vermelho-principal" />
              <span className="text-gray-300">
                © 2025 Mineração Itapeva. Todos os direitos reservados.
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400"
            >
              <span>Desenvolvido com</span>
              <span className="text-vermelho-principal mx-1">❤</span>
              <span>para a mineração sustentável</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

