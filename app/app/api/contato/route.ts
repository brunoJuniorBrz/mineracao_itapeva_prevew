
import { NextRequest, NextResponse } from 'next/server'
import { inserirContato } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const dados = await request.json()
    
    // Inserir dados no Supabase
    const resultado = await inserirContato({
      nome: dados.nome,
      email: dados.email,
      telefone: dados.telefone,
      empresa: dados.empresa,
      segmento: dados.segmento,
      tipoNegocio: dados.tipoNegocio,
      volumeEstimado: dados.volumeEstimado,
      mensagem: dados.mensagem,
      linhaComercial: dados.linhaComercial
    })

    // Enviar email (simulado por enquanto - você pode integrar com Nodemailer, SendGrid, etc.)
    console.log('Email enviado para: comercial@mineracaoitapeva.com.br')
    console.log('Dados:', dados)

    return NextResponse.json({ 
      success: true, 
      message: 'Contato registrado com sucesso!',
      data: resultado
    })

  } catch (error) {
    console.error('Erro ao processar contato:', error)
    return NextResponse.json(
      { success: false, message: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
