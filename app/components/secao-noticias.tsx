
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'

interface Noticia {
  id: string
  titulo: string
  resumo: string
  imagem_url: string
  criado_em: string
}

export default function SecaoNoticias() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [noticias, setNoticias] = useState<Noticia[]>([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    const buscarNoticias = async () => {
      try {
        const response = await fetch('/api/noticias')
        if (response.ok) {
          const dados = await response.json()
          setNoticias(dados)
        }
      } catch (error) {
        console.error('Erro ao buscar notícias:', error)
      } finally {
        setCarregando(false)
      }
    }

    buscarNoticias()
  }, [])

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <section id="noticias" className="py-20 bg-branco-gelo scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cinza-escuro mb-6">
            Notícias e Atualizações
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acompanhe as novidades da Mineração Itapeva
          </p>
        </motion.div>

        {carregando ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-vermelho-principal mx-auto"></div>
            <p className="mt-4 text-gray-600">Carregando notícias...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.map((noticia, index) => (
              <motion.article
                key={noticia.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="aspect-[16/9] bg-gray-200 overflow-hidden">
                  <img
                    src={noticia.imagem_url}
                    alt={noticia.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatarData(noticia.criado_em)}
                  </div>
                  <h3 className="text-xl font-semibold text-cinza-escuro mb-3 line-clamp-2">
                    {noticia.titulo}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {noticia.resumo}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-vermelho-principal text-vermelho-principal hover:bg-vermelho-principal hover:text-white"
                  >
                    Ler Mais
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Seção de destaque */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-vermelho-principal to-red-700 rounded-xl p-8 md:p-12 text-white"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Mantenha-se Informado
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Acompanhe as últimas novidades da indústria de mineração e nossos desenvolvimentos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline"
                className="bg-white text-vermelho-principal hover:bg-gray-100"
              >
                <Clock className="w-4 h-4 mr-2" />
                Ver Todas as Notícias
              </Button>
              <Button 
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-vermelho-principal"
              >
                Newsletter
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
