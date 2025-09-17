
import { createClient } from '@supabase/supabase-js'

// Inicializa o cliente apenas quando for usado, evitando erro no build
export function getSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase env vars missing (NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY)')
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}

// Tipo para a tabela de contatos
export interface ContatoData {
  nome: string
  email: string
  telefone?: string
  empresa?: string
  segmento?: string
  tipoNegocio?: string
  volumeEstimado?: string
  mensagem: string
  linhaComercial: string
}

// Função para inserir contato na tabela
export async function inserirContato(dados: ContatoData) {
  const supabase = getSupabase()
  const { data, error } = await supabase
    .from('contatos')
    .insert([{
      ...dados,
      tipo: 'contato_segmentado',
      respondido: false,
      data: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }])
    .select()

  if (error) {
    console.error('Erro ao inserir contato:', error)
    throw error
  }

  return data
}
