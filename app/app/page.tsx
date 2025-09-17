
import Cabecalho from '@/components/cabecalho'
import SecaoHero from '@/components/secao-hero'
import SecaoSobre from '@/components/secao-sobre'
import SecaoProdutos from '@/components/secao-produtos'
import SecaoSustentabilidade from '@/components/secao-sustentabilidade'
import SecaoContato from '@/components/secao-contato'
import Rodape from '@/components/rodape'
import BotaoWhatsApp from '@/components/botao-whatsapp'

export default function PaginaInicial() {
  return (
    <main className="min-h-screen">
      <Cabecalho />
      <SecaoHero />
      <SecaoSobre />
      <SecaoProdutos />
      <SecaoSustentabilidade />
      <SecaoContato />
      <Rodape />
      <BotaoWhatsApp />
    </main>
  )
}
