

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, MapPin, Clock, Send, Building, Wheat, Package } from 'lucide-react'
import { Button } from './ui/button'
import { useState } from 'react'

export default function SecaoContato() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [linhaComercial, setLinhaComercial] = useState<string>('')
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    segmento: '',
    tipoNegocio: '',
    volumeEstimado: '',
    mensagem: ''
  })

  const [enviando, setEnviando] = useState(false)
  const [sucesso, setSucesso] = useState(false)

  const linhasComerciais = [
    {
      id: 'matcon',
      nome: 'MATCON',
      categoria: 'Construção Civil',
      icon: Building,
      cor: 'bg-blue-500',
      produtos: ['LigaMil PLUS', 'LigaMil MAX', 'CalGeo', 'Tijolo Ecológico'],
      segmentos: ['Construtora', 'Loja de Materiais', 'Indústria de Argamassa', 'Ceramista', 'Outro']
    },
    {
      id: 'itageo',
      nome: 'ITAGEO',
      categoria: 'Ração Animal',
      icon: Wheat,
      cor: 'bg-green-500',
      produtos: ['Filito Branco', 'Filito Bege', 'Filito Creme'],
      segmentos: ['Fábrica de Ração', 'Distribuidor Agropecuário', 'Indústria Química', 'Fertilizantes', 'Outro']
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEnviando(true)

    try {
      const dadosFormulario = {
        ...formulario,
        linhaComercial,
        dataEnvio: new Date().toISOString(),
        tipo: 'contato_segmentado'
      }

      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosFormulario),
      })

      if (response.ok) {
        // Enviar dados para WhatsApp também
        try {
          const whatsappResponse = await fetch('/api/whatsapp-orcamento', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosFormulario),
          })

          if (whatsappResponse.ok) {
            const whatsappData = await whatsappResponse.json()
            // Abrir WhatsApp em nova aba com os dados formatados
            window.open(whatsappData.urlWhatsApp, '_blank')
          }
        } catch (whatsappError) {
          console.error('Erro ao enviar para WhatsApp:', whatsappError)
        }

        setSucesso(true)
        setFormulario({
          nome: '',
          email: '',
          telefone: '',
          empresa: '',
          segmento: '',
          tipoNegocio: '',
          volumeEstimado: '',
          mensagem: ''
        })
        setLinhaComercial('')
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
    } finally {
      setEnviando(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const informacoesContato = [
    {
      icon: Phone,
      titulo: 'Telefone',
      info: '+55 (15) 3521-9550',
      cor: 'text-green-500'
    },
    {
      icon: Mail,
      titulo: 'E-mail',
      info: 'contato@mineracaoitapeva.com.br',
      extra: 'comercial@mineracaoitapeva.com.br',
      cor: 'text-blue-500'
    },
    {
      icon: MapPin,
      titulo: 'Endereço',
      info: 'Estrada Municipal Luis José Sguario, Km 5',
      extra: 'Bairro do Rosário - Itapeva/SP',
      cor: 'text-purple-500'
    },
    {
      icon: Clock,
      titulo: 'Horário',
      info: 'Segunda a Sexta: 8h às 18h',
      extra: 'Sábado: 8h às 12h',
      cor: 'text-orange-500'
    }
  ]

  const linhaSelecionada = linhasComerciais.find(linha => linha.id === linhaComercial)

  return (
    <section id="contato" className="py-20 bg-branco-gelo scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cinza-escuro mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha a linha comercial adequada à sua necessidade e receba atendimento especializado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-cinza-escuro mb-6">
              Solicite um Orçamento
            </h3>
            
            {sucesso ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-semibold text-green-600 mb-2">
                  Mensagem Enviada!
                </h4>
                <p className="text-gray-600">
                  Obrigado pelo contato. Nosso comercial especializado retornará em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Seleção da Linha Comercial */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Linha Comercial *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {linhasComerciais.map((linha) => (
                      <button
                        key={linha.id}
                        type="button"
                        onClick={() => setLinhaComercial(linha.id)}
                        className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                          linhaComercial === linha.id
                            ? 'border-vermelho-principal bg-vermelho-principal/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${linha.cor} text-white`}>
                            <linha.icon className="w-5 h-5" />
                          </div>
                          <div className="text-left">
                            <h4 className="font-semibold text-cinza-escuro">
                              {linha.nome}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {linha.categoria}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Campos básicos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formulario.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vermelho-principal focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formulario.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vermelho-principal focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formulario.telefone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vermelho-principal focus:border-transparent"
                      placeholder="(15) 99999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formulario.empresa}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vermelho-principal focus:border-transparent"
                      placeholder="Sua empresa"
                    />
                  </div>
                </div>

                {/* Campos específicos por linha */}
                {linhaSelecionada && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="segmento" className="block text-sm font-medium text-gray-700 mb-2">
                          Segmento *
                        </label>
                        <select
                          id="segmento"
                          name="segmento"
                          value={formulario.segmento}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vermelho-principal focus:border-transparent"
                        >
                          <option value="">Selecione seu segmento</option>
                          {linhaSelecionada.segmentos.map((segmento, index) => (
                            <option key={index} value={segmento}>{segmento}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="volumeEstimado" className="block text-sm font-medium text-gray-700 mb-2">
                          Volume Estimado (ton/mês)
                        </label>
                        <input
                          type="text"
                          id="volumeEstimado"
                          name="volumeEstimado"
                          value={formulario.volumeEstimado}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vermelho-principal focus:border-transparent"
                          placeholder="Ex: 10 toneladas"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="tipoNegocio" className="block text-sm font-medium text-gray-700 mb-2">
                        Tipo de Negócio
                      </label>
                      <select
                        id="tipoNegocio"
                        name="tipoNegocio"
                        value={formulario.tipoNegocio}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vermelho-principal focus:border-transparent"
                      >
                        <option value="">Selecione o tipo de negócio</option>
                        <option value="novo">Novo Cliente</option>
                        <option value="retorno">Cliente Retornando</option>
                        <option value="ampliacao">Ampliação de Negócio</option>
                        <option value="cotacao">Cotação de Preços</option>
                      </select>
                    </div>

                    {/* Produtos específicos */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-700 mb-3">
                        Produtos {linhaSelecionada.nome} disponíveis:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {linhaSelecionada.produtos.map((produto, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Package className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{produto}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formulario.mensagem}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vermelho-principal focus:border-transparent"
                    placeholder="Descreva sua necessidade, interesse em produtos específicos, prazos..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={enviando || !linhaComercial}
                  className="w-full bg-vermelho-principal hover:bg-red-700 text-white py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {enviando ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar para Comercial {linhaSelecionada?.nome || ''}
                    </>
                  )}
                </Button>

                {!linhaComercial && (
                  <p className="text-sm text-gray-500 text-center">
                    Selecione uma linha comercial para continuar
                  </p>
                )}
              </form>
            )}
          </motion.div>

          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-cinza-escuro mb-6">
              Informações de Contato
            </h3>
            
            {informacoesContato.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center`}>
                  <info.icon className={`w-6 h-6 ${info.cor}`} />
                </div>
                <div>
                  <h4 className="font-semibold text-cinza-escuro mb-1">
                    {info.titulo}
                  </h4>
                  <p className="text-gray-600">{info.info}</p>
                  {info.extra && (
                    <p className="text-gray-500 text-sm">{info.extra}</p>
                  )}
                </div>
              </div>
            ))}



            {/* Mapa */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="font-semibold text-cinza-escuro mb-4">
                Nossa Localização
              </h4>
              <div className="aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4!2d-48.8765!3d-23.9876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU5JzE1LjQiUyA0OMKwNTInMzUuNCJX!5e0!3m2!1spt-BR!2sbr!4v1642123456789!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Mineração Itapeva"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
