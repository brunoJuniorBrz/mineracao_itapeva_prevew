'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function BotaoWhatsApp() {
  const abrirWhatsApp = () => {
    const numero = '5515991783217' // LigaMil - 15 991783217
    const mensagem = encodeURIComponent('Olá! Gostaria de saber mais sobre os produtos da Mineração Itapeva.')
    const url = `https://wa.me/${numero}?text=${mensagem}`
    
    try {
      // Tentar abrir em nova aba primeiro
      const janela = window.open(url, '_blank')
      
      // Se não conseguir abrir nova aba, redirecionar na mesma
      if (!janela) {
        window.location.href = url
      }
    } catch (erro) {
      // Fallback: redirecionar na mesma página
      window.location.href = url
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Animação pulsante de fundo */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0.3, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-green-500 rounded-full"
      />
      
      {/* Botão principal */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={abrirWhatsApp}
        className="relative w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
      </motion.button>
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none whitespace-nowrap"
      >
        Fale conosco no WhatsApp
        <div className="absolute top-1/2 right-[-4px] transform -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
      </motion.div>
    </motion.div>
  )
}
