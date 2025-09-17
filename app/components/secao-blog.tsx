
import { ArrowRight, Clock, Calendar, BookOpen, Tag } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { obterTodosArtigos } from '@/lib/blog-data'

export default function SecaoBlog() {
  const artigos = obterTodosArtigos().slice(0, 3) // Mostrar apenas os 3 mais recentes

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <section id="blog" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-vermelho-principal mr-3" />
            <h2 className="text-4xl font-bold text-cinza-escuro">
              Blog & Insights
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conteúdos exclusivos sobre mineração, geologia e o mercado de filito no Brasil
          </p>
        </div>

        {/* Grid de Artigos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {artigos.map((artigo, index) => (
            <div key={artigo.id}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden">
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
                    <Badge variant="secondary" className="bg-vermelho-principal text-white">
                      <Tag className="w-3 h-3 mr-1" />
                      {artigo.tags[0]}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <h3 className="text-xl font-bold text-cinza-escuro line-clamp-2 group-hover:text-vermelho-principal transition-colors">
                    {artigo.titulo}
                  </h3>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {artigo.resumo}
                  </p>

                  {/* Meta informações */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
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

                  {/* CTA */}
                  <a href={`/blog/${artigo.id}`} className="block">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-vermelho-principal group-hover:text-white group-hover:border-vermelho-principal transition-all"
                    >
                      Ler Artigo
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA para ver todos os artigos */}
        <div className="text-center">
          <a href="/blog">
            <Button 
              size="lg"
              className="bg-vermelho-principal hover:bg-red-700 text-white px-8 py-3"
            >
              Ver Todos os Artigos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
