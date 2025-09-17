
import { Metadata } from 'next'
import Cabecalho from '@/components/cabecalho'
import Rodape from '@/components/rodape'
import BotaoWhatsApp from '@/components/botao-whatsapp'
import { ArrowRight, Clock, Calendar, BookOpen, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { obterTodosArtigos } from '@/lib/blog-data'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Mineração Itapeva',
  description: 'Conteúdos exclusivos sobre mineração, geologia e o mercado de filito no Brasil',
}

export default function PaginaBlog() {
  const artigos = obterTodosArtigos()

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <div className="min-h-screen">
      <Cabecalho />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-cinza-escuro via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="w-10 h-10 text-vermelho-principal mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Blog & Insights
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Conteúdos exclusivos sobre mineração, geologia e o mercado de filito no Brasil. 
            Acompanhe as últimas tendências e descobertas do setor mineral.
          </p>
        </div>
      </section>

      {/* Artigos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {artigos.map((artigo) => (
              <Card key={artigo.id} className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer overflow-hidden border-0 shadow-md">
                {/* Imagem de Destaque */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${artigo.imagemDestaque}')`,
                      backgroundColor: '#f3f4f6'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  {/* Badge de Categoria */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-vermelho-principal text-white shadow-lg">
                      <Tag className="w-3 h-3 mr-1" />
                      {artigo.tags[0]}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <h2 className="text-lg font-bold text-cinza-escuro line-clamp-2 group-hover:text-vermelho-principal transition-colors leading-tight">
                    {artigo.titulo}
                  </h2>
                </CardHeader>

                <CardContent className="pt-0 flex flex-col h-full">
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed flex-grow">
                    {artigo.resumo}
                  </p>

                  {/* Meta informações */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatarData(artigo.dataPublicacao)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {artigo.tempoLeitura} min
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {artigo.tags?.slice(0, 2)?.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href={`/blog/${artigo.id}`} className="mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-vermelho-principal group-hover:text-white group-hover:border-vermelho-principal transition-all duration-300"
                    >
                      Ler Artigo
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Rodape />
      <BotaoWhatsApp />
    </div>
  )
}
