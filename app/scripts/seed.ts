
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function popularBancoDados() {
  console.log('Iniciando população do banco de dados...')

  // Limpar dados existentes
  await prisma.galeria_imagens.deleteMany({})
  await prisma.produtos.deleteMany({})
  await prisma.noticias.deleteMany({})

  // Produtos
  const produtos = await prisma.produtos.createMany({
    data: [
      {
        nome: 'Filito',
        descricao: 'Rocha metamórfica de granulação fina, maior produção do Brasil com 300.000 toneladas anuais',
        categoria: 'Mineração',
        especificacoes: 'Umidade ≤10%, Resíduo natural ≤80%, Expansão de prensagem ≤1,3%',
        imagem_url: 'https://thumbs.dreamstime.com/b/quarry-mining-aerial-view-excavator-machine-quarrying-rock-industrial-transportation-drone-truck-quarry-mining-280374783.jpg',
        ativo: true
      },
      {
        nome: 'Ligamil',
        descricao: 'Plastificante para argamassa, substitui cal e outros plastificantes no preparo',
        categoria: 'Construção',
        especificacoes: 'Teor de Ar: 8%, Densidade: 1,96%, Retenção de Água: 87%',
        imagem_url: 'https://i.ytimg.com/vi/lGNgUGb6qdI/maxresdefault.jpg',
        ativo: true
      }
    ]
  })

  // Notícias
  const noticias = await prisma.noticias.createMany({
    data: [
      {
        titulo: 'Mineração Itapeva: 65 Anos de História e Inovação',
        resumo: 'Desde 1959, a Mineração Itapeva se consolidou como a maior produtora de filito do Brasil',
        conteudo: 'A Mineração Itapeva celebra 65 anos de tradição e excelência no setor de mineração. Fundada em 1959 como Takeyuti Ykeuti, a empresa evoluiu para se tornar a Mineração Itapeva em 1971, consolidando-se como líder nacional na produção de filito com 300.000 toneladas anuais.',
        imagem_url: 'https://i.ytimg.com/vi/MdooGxLgeRw/maxresdefault.jpg',
        publicado: true
      },
      {
        titulo: 'Compromisso com a Sustentabilidade Ambiental',
        resumo: 'Práticas sustentáveis e responsabilidade ambiental são pilares da nossa operação',
        conteudo: 'A Mineração Itapeva mantém o compromisso com a produção de baixo impacto ambiental, implementando tecnologias que minimizam os efeitos da mineração e servem como referência para o setor.',
        imagem_url: 'https://img.freepik.com/premium-photo/quotadvanced-technology-sustainable-practices-responsible-resource-extraction-innovative-minequot-concept-advanced-technology-sustainable-practices-resource-extraction-innovative-mine_864588-191627.jpg?w=2000',
        publicado: true
      },
      {
        titulo: 'Responsabilidade Social: Gerando Empregos e Apoiando a Comunidade',
        resumo: 'Mais de 500 empregos diretos e indiretos gerados, além de parcerias com ONGs',
        conteudo: 'A empresa gera aproximadamente 100 empregos diretos e mais de 400 indiretos, mantendo parcerias com APAE, ACDC, creches, igrejas e a Fundação Orsa, demonstrando seu compromisso social.',
        imagem_url: 'https://i.ytimg.com/vi/N84cPUNnDZU/maxresdefault.jpg',
        publicado: true
      }
    ]
  })

  // Galeria de imagens
  const galeria = await prisma.galeria_imagens.createMany({
    data: [
      {
        titulo: 'Operação de Mineração a Céu Aberto',
        descricao: 'Vista aérea moderna da operação de extração de filito com equipamentos de última geração',
        imagem_url: 'https://www.cpaaustralia.com.au/-/media/project/cpa/intheblack/images/magazine-2022/09-september/open-cut-mine-bulga.jpg?h=720&iar=0&w=1280&rev=ae56c55307914c2a8bc65300af9147c7&hash=97B1F69A17BF707865A376CACA8DF45C',
        categoria: 'Operações',
        ordem: 1
      },
      {
        titulo: 'Equipamentos de Mineração Pesados',
        descricao: 'Caminhões de grande porte e equipamentos pesados trabalhando em pedreira',
        imagem_url: 'https://www.mining-technology.com/wp-content/uploads/sites/19/2023/05/India-Coal.jpg',
        categoria: 'Equipamentos',
        ordem: 2
      },
      {
        titulo: 'Rocha Metamórfica de Filito',
        descricao: 'Textura detalhada da rocha metamórfica filito após extração',
        imagem_url: 'https://images.pexels.com/photos/30176533/pexels-photo-30176533/free-photo-of-closeup-of-textured-metamorphic-rock-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        categoria: 'Produtos',
        ordem: 3
      },
      {
        titulo: 'Laboratório de Controle de Qualidade',
        descricao: 'Laboratório moderno com equipamentos avançados para análise de qualidade',
        imagem_url: 'https://datamyte.com/wp-content/uploads/2023/03/quality-control-lab-inspection.jpg',
        categoria: 'Qualidade',
        ordem: 4
      },
      {
        titulo: 'Instalações Industriais Modernas',
        descricao: 'Unidade de processamento mineral com tecnologia de ponta',
        imagem_url: 'https://rockwellautomation.scene7.com/is/image/rockwellautomation/16x9-Process-Solutions-for-Mining.1536.jpg',
        categoria: 'Processamento',
        ordem: 5
      },
      {
        titulo: 'Produto Ligamil',
        descricao: 'Plastificante Ligamil para argamassa em embalagem profissional',
        imagem_url: 'https://www.mesquitao.com.br/wp-content/uploads/2022/09/96613824-5dcb-46d5-9744-dbace6a99f4d__989129.jpg',
        categoria: 'Produtos',
        ordem: 6
      }
    ]
  })

  console.log('Banco de dados populado com sucesso!')
  console.log(`Produtos criados: ${produtos.count}`)
  console.log(`Notícias criadas: ${noticias.count}`)
  console.log(`Imagens da galeria criadas: ${galeria.count}`)
}

popularBancoDados()
  .catch((e) => {
    console.error('Erro ao popular banco de dados:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
