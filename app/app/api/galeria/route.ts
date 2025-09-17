
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

export const dynamic = 'force-dynamic'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const imagens = await prisma.galeria_imagens.findMany({
      where: { ativo: true },
      orderBy: { ordem: 'asc' },
    })

    return NextResponse.json(imagens)
  } catch (error) {
    console.error('Erro ao buscar imagens da galeria:', error)
    return NextResponse.json(
      { 
        sucesso: false, 
        mensagem: 'Erro interno do servidor' 
      }, 
      { status: 500 }
    )
  }
}
