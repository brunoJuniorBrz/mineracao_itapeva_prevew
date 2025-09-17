
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const dados = await req.json()
    
    // Formatar mensagem para WhatsApp
    const mensagem = `🏭 *NOVO ORÇAMENTO - MINERAÇÃO ITAPEVA*

👤 *Cliente:* ${dados.nome}
📧 *Email:* ${dados.email}  
📱 *Telefone:* ${dados.telefone}
🏢 *Empresa:* ${dados.empresa}

📋 *Linha Comercial:* ${dados.linhaComercial}
🎯 *Segmento:* ${dados.segmento || 'Não informado'}
📦 *Tipo de Negócio:* ${dados.tipoNegocio || 'Não informado'}
📏 *Volume Estimado:* ${dados.volumeEstimado || 'Não informado'}

💬 *Mensagem:*
${dados.mensagem || 'Sem mensagem adicional'}

---
Enviado via site: ${new Date().toLocaleString('pt-BR')}`.trim()

    // Configurar URL do WhatsApp
    const numero = '5515991783217' // LigaMil - 15 991783217
    const mensagemCodificada = encodeURIComponent(mensagem)
    const urlWhatsApp = `https://wa.me/${numero}?text=${mensagemCodificada}`
    
    return NextResponse.json({ 
      sucesso: true, 
      urlWhatsApp,
      mensagem: 'Dados formatados para WhatsApp' 
    })
    
  } catch (erro) {
    console.error('Erro ao processar orçamento:', erro)
    return NextResponse.json(
      { sucesso: false, erro: 'Erro interno do servidor' }, 
      { status: 500 }
    )
  }
}
