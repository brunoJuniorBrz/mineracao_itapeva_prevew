
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

export const dynamic = 'force-dynamic'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const dados = await request.json()
    
    const novoContatoWhatsApp = await prisma.contatos_whatsapp.create({
      data: {
        nome: dados.nome || null,
        telefone: dados.telefone,
        mensagem: dados.mensagem || null,
      },
    })

    return NextResponse.json(
      { 
        sucesso: true, 
        mensagem: 'Contato WhatsApp registrado com sucesso!',
        id: novoContatoWhatsApp.id 
      }, 
      { status: 201 }
    )
  } catch (error) {
    console.error('Erro ao registrar contato WhatsApp:', error)
    return NextResponse.json(
      { 
        sucesso: false, 
        mensagem: 'Erro interno do servidor' 
      }, 
      { status: 500 }
    )
  }
}
