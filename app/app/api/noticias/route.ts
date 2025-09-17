
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

export const dynamic = 'force-dynamic'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const noticias = await prisma.noticias.findMany({
      where: { publicado: true },
      orderBy: { criado_em: 'desc' },
      take: 6,
    })

    return NextResponse.json(noticias)
  } catch (error) {
    console.error('Erro ao buscar notícias:', error)
    return NextResponse.json(
      { 
        sucesso: false, 
        mensagem: 'Erro interno do servidor' 
      }, 
      { status: 500 }
    )
  }
}
