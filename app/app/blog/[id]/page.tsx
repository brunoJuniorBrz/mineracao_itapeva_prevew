
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Cabecalho from '@/components/cabecalho'
import Rodape from '@/components/rodape'
import BotaoWhatsApp from '@/components/botao-whatsapp'
import { ArrowLeft, Clock, Calendar, Tag, Share2, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { obterArtigoPorId, obterArtigosRelacionados, ArtigoBlog } from '@/lib/blog-data'
import Link from 'next/link'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artigo = obterArtigoPorId(params.id)
  
  if (!artigo) {
    return {
      title: 'Artigo não encontrado - Mineração Itapeva'
    }
  }

  return {
    title: `${artigo.titulo} - Blog Mineração Itapeva`,
    description: artigo.resumo,
  }
}

export default function PaginaArtigo({ params }: Props) {
  const artigo = obterArtigoPorId(params.id)
  
  if (!artigo) {
    notFound()
  }

  const artigosRelacionados = obterArtigosRelacionados(params.id, 3)

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
      
      {/* Artigo */}
      <article className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="outline" size="sm" className="hover:bg-vermelho-principal hover:text-white hover:border-vermelho-principal transition-all">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Blog
              </Button>
            </Link>
          </div>

          {/* Header do Artigo */}
          <header className="mb-12">
            {/* Imagem de Destaque */}
            <div className="relative h-56 md:h-80 rounded-lg overflow-hidden mb-8 shadow-lg">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('${artigo.imagemDestaque}')`,
                  backgroundColor: '#f3f4f6'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {artigo.tags?.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-vermelho-principal text-white shadow-sm">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Título */}
            <h1 className="text-3xl md:text-4xl font-bold text-cinza-escuro mb-6 leading-tight">
              {artigo.titulo}
            </h1>

            {/* Resumo */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
              {artigo.resumo}
            </p>

            {/* Meta informações */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-6 text-gray-500 text-sm">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatarData(artigo.dataPublicacao)}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {artigo.tempoLeitura} min de leitura
                </div>
                <div>
                  Por {artigo.autor}
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                disabled
                className="opacity-50"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </Button>
            </div>
          </header>

          {/* Conteúdo */}
          <div className="prose prose-lg max-w-none mb-16">
            <div 
              className="text-gray-700 leading-relaxed space-y-6 text-base"
              dangerouslySetInnerHTML={{ 
                __html: artigo.conteudo
                  .replace(/\n\n/g, '</p><p class="mb-6 text-gray-700 leading-relaxed">')
                  .replace(/\n/g, '<br />')
                  .replace(/### (.*)/g, '<h3 class="text-2xl font-semibold text-cinza-escuro mt-10 mb-6 border-l-4 border-vermelho-principal pl-4">$1</h3>')
                  .replace(/## (.*)/g, '<h2 class="text-3xl font-semibold text-cinza-escuro mt-12 mb-8">$1</h2>')
                  .replace(/\*\*(.*?)\*\*/g, '<span class="font-normal text-cinza-escuro">$1</span>')
                  .replace(/^(.+)$/gm, '<p class="mb-6 text-gray-700 leading-relaxed">$1</p>')
              }}
            />
          </div>
        </div>
      </article>

      {/* Artigos Relacionados */}
      {artigosRelacionados.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-12">
              <BookOpen className="w-6 h-6 text-vermelho-principal mr-3" />
              <h2 className="text-3xl font-bold text-cinza-escuro">
                Artigos Relacionados
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {artigosRelacionados.map((artigoRelacionado) => (
                <Card key={artigoRelacionado.id} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${artigoRelacionado.imagemDestaque}')`,
                        backgroundColor: '#f3f4f6'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <h3 className="text-lg font-bold text-cinza-escuro line-clamp-2">
                      {artigoRelacionado.titulo}
                    </h3>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {artigoRelacionado.resumo}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {artigoRelacionado.tempoLeitura} min
                      </div>
                    </div>

                    <Link href={`/blog/${artigoRelacionado.id}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        Ler Artigo
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <Rodape />
      <BotaoWhatsApp />
    </div>
  )
}

export async function generateStaticParams() {
  const artigos = ['mercado-filito-brasil', 'caracteristicas-geologicas-filito', 'itapeva-capital-minerios', 'mineracao-itapeva-historia']
  
  return artigos.map((id) => ({
    id: id,
  }))
}
