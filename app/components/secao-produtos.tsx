
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building, Wheat, Package, Zap, Construction, CheckCircle, Phone } from 'lucide-react'
import { Button } from './ui/button'
import { useState } from 'react'



export default function SecaoProdutos() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [linhaSelected, setLinhaSelected] = useState<string | null>(null)

  const linhasComerciais = [
    {
      id: 'matcon',
      nome: 'MATCON',
      categoria: 'Construção Civil',
      descricao: 'Linha completa de plastificantes para construção civil, produtos pioneiros no mercado brasileiro',
      icon: Building,
      cor: 'text-blue-500',
      corFundo: 'bg-blue-50',
      corBorda: 'border-blue-200',
      corHover: 'hover:bg-blue-100',
      produtos: [
        {
          nome: 'LigaMil PLUS',
          embalagem: 'Sacaria de 20kg',
          tipo: 'Aditivado',
          descricao: 'Plastificante aditivado para argamassa de assentamento'
        },
        {
          nome: 'LigaMil MAX',
          embalagem: 'Sacaria de 10kg',
          tipo: 'Super Concentrado',
          descricao: 'Plastificante super concentrado, alta performance'
        },
        {
          nome: 'CalGel',
          embalagem: 'Sacaria de 20kg',
          tipo: 'Natural',
          descricao: 'Plastificante natural para argamassa à base de filito'
        }
      ],
      aplicacoes: [
        'Grandes Construtoras',
        'Argamassas Prontas',
        'Massa de Assentamento',
        'Revestimentos',
        'Indústrias de Cimento',
        'Cerâmicas e Revestimentos'
      ],
      caracteristicas: [
        'Teor de Ar: 8%',
        'Densidade: 1,96%',
        'Retenção de Água: 87%',
        'pH neutro',
        'Substitui Cal Hidratada',
        'Melhora trabalhabilidade'
      ]
    },
    {
      id: 'itageo',
      nome: 'ITAGEO',
      categoria: 'Ração Animal',
      descricao: 'Carga mineral inerte para indústrias de ração animal, com diferentes colorações e granulometrias',
      icon: Wheat,
      cor: 'text-green-500',
      corFundo: 'bg-green-50',
      corBorda: 'border-green-200',
      corHover: 'hover:bg-green-100',
      produtos: [
        {
          nome: 'Filito Branco',
          embalagem: 'Sacaria 20kg / BAG / Granel',
          tipo: 'Carga Mineral',
          descricao: 'Filito branco para nutrição animal'
        },
        {
          nome: 'Filito Bege',
          embalagem: 'Sacaria 20kg / BAG / Granel',
          tipo: 'Carga Mineral',
          descricao: 'Filito bege para nutrição animal'
        },
        {
          nome: 'Filito Creme',
          embalagem: 'Sacaria 20kg / BAG / Granel',
          tipo: 'Carga Mineral',
          descricao: 'Filito creme para nutrição animal'
        }
      ],
      aplicacoes: [
        'Indústrias de Ração',
        'Adubo e Fertilizantes',
        'Sal Mineral',
        'Inseticidas',
        'Borracha e Plástico',
        'Agente Aglutinante'
      ],
      caracteristicas: [
        'Não é tóxico',
        'Não é perecível',
        'pH Neutro',
        'Boa homogeneidade',
        'Baixa higroscopia',
        'Agente aglutinante veicular'
      ]
    }
  ]



  const scrollParaContato = (linha: string) => {
    setLinhaSelected(linha)
    const elemento = document.querySelector('#contato')
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="produtos" className="py-20 bg-cinza-claro scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cinza-escuro mb-6">
            Nossas Linhas Comerciais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Duas linhas especializadas para atender diferentes segmentos do mercado com excelência
          </p>
        </motion.div>

        {/* Linhas Comerciais */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {linhasComerciais.map((linha, index) => (
            <motion.div
              key={linha.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className={`${linha.corFundo} ${linha.corBorda} border-2 rounded-xl p-8 card-hover h-full flex flex-col`}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 bg-white rounded-lg shadow-md mr-4`}>
                  <linha.icon className={`w-8 h-8 ${linha.cor}`} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-cinza-escuro">
                    {linha.nome}
                  </h3>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-medium">
                    {linha.categoria}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {linha.descricao}
              </p>

              {/* Produtos da Linha */}
              <div className="mb-6">
                <h4 className="font-semibold text-cinza-escuro mb-4 flex items-center">
                  <Package className="w-5 h-5 text-gray-600 mr-2" />
                  Produtos:
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {linha.produtos.map((produto, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold text-cinza-escuro">{produto.nome}</h5>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{produto.tipo}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{produto.descricao}</p>
                      <p className="text-xs text-gray-500">{produto.embalagem}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6 flex-1">
                <div>
                  <h4 className="font-semibold text-cinza-escuro mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Aplicações:
                  </h4>
                  <ul className="space-y-2">
                    {linha.aplicacoes.map((aplicacao, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-vermelho-principal rounded-full mr-3 flex-shrink-0"></div>
                        {aplicacao}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-cinza-escuro mb-3 flex items-center">
                    <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                    Características:
                  </h4>
                  <ul className="space-y-2">
                    {linha.caracteristicas.map((caracteristica, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-vermelho-principal rounded-full mr-3 flex-shrink-0"></div>
                        {caracteristica}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button 
                onClick={() => scrollParaContato(linha.id)}
                className={`w-full ${linha.id === 'matcon' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'} text-white transition-all duration-300 hover:shadow-lg`}
              >
                <Phone className="w-4 h-4 mr-2" />
                Contatar Comercial {linha.nome}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Galeria de Produtos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-cinza-escuro mb-4">
              Nossos Produtos
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Conheça nossos principais produtos da linha MATCON, desenvolvidos com tecnologia de ponta e qualidade superior.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="aspect-[3/4] mb-4 bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/images/ligamil-20kg.png"
                  alt="LigaMil PLUS 20kg"
                  className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-xl font-bold text-cinza-escuro mb-2">LigaMil PLUS</h4>
              <p className="text-blue-600 font-medium mb-2">Sacaria de 20kg</p>
              <p className="text-sm text-gray-600">
                Plastificante aditivado para argamassa de assentamento
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="aspect-[3/4] mb-4 bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/images/ligamil-max.png"
                  alt="LigaMil MAX 10kg"
                  className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-xl font-bold text-cinza-escuro mb-2">LigaMil MAX</h4>
              <p className="text-blue-600 font-medium mb-2">Sacaria de 10kg</p>
              <p className="text-sm text-gray-600">
                Super concentrado, alta performance
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="aspect-[3/4] mb-4 bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/images/calgel.png"
                  alt="CalGel 20kg"
                  className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-xl font-bold text-cinza-escuro mb-2">CalGel</h4>
              <p className="text-blue-600 font-medium mb-2">Sacaria de 20kg</p>
              <p className="text-sm text-gray-600">
                Plastificante para argamassa à base de filito
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <Button 
              onClick={() => scrollParaContato('matcon')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Solicitar Orçamento
            </Button>
          </div>
        </motion.div>

        {/* Filito - Produto Base */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-cinza-escuro mb-4">
              Filito - Nosso Produto Base
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Também conhecido como Silicato de Alumínio, "In natura" apresenta diversas colorações: 
              branco, creme, rosado, roxo, cinza. Ao passar pelos diversos processos de extração, 
              beneficiamento e finalmente em granaturas de pó, o material ganha infinitas utilidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Construction className="w-10 h-10 text-blue-500" />
              </div>
              <h4 className="font-semibold text-cinza-escuro mb-2">Construção Civil</h4>
              <p className="text-sm text-gray-600">Plastificantes e argamassas de alta qualidade</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wheat className="w-10 h-10 text-green-500" />
              </div>
              <h4 className="font-semibold text-cinza-escuro mb-2">Agropecuária</h4>
              <p className="text-sm text-gray-600">Ração animal e nutrição veterinária</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-10 h-10 text-purple-500" />
              </div>
              <h4 className="font-semibold text-cinza-escuro mb-2">Indústria</h4>
              <p className="text-sm text-gray-600">Materiais sintéticos, borracha e plástico</p>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  )
}
