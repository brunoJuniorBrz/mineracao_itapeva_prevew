
'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from './ui/button'
import { motion, AnimatePresence } from 'framer-motion'

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const itensMenu = [
    { nome: 'Início', href: '#inicio', isHash: true },
    { nome: 'Sobre', href: '#sobre', isHash: true },
    { nome: 'Produtos', href: '#produtos', isHash: true },
    { nome: 'Sustentabilidade', href: '#sustentabilidade', isHash: true },
    { nome: 'Contato', href: '#contato', isHash: true }
  ]

  const handleMenuClick = (item: typeof itensMenu[0]) => {
    if (item.isHash) {
      // Se estamos em uma pÃ¡gina de blog, volta para home primeiro
      if (window.location.pathname.includes('/blog')) {
        window.location.href = '/' + item.href
      } else {
        const elemento = document.querySelector(item.href)
        if (elemento) {
          elemento.scrollIntoView({ behavior: 'smooth' })
        }
      }
    } else {
      // NavegaÃ§Ã£o normal para pÃ¡ginas
      window.location.href = item.href
    }
    setMenuAberto(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      menuAberto
        ? 'bg-white shadow-lg'
        : scrolled
          ? 'bg-transparent md:bg-white md:shadow-lg'
          : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="hidden md:flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3"
            >
              <img 
                src="/images/logo-mineracao-itapeva-Photoroom.png" 
                alt="Logo MineraÃ§Ã£o Itapeva" 
                className="w-20 h-16 object-contain drop-shadow-lg"
              />
              <div className="hidden sm:block">
                <p className={`text-sm ${scrolled ? 'text-gray-600' : 'text-gray-600 md:text-gray-300'}`}>
                  Desde 1959
                </p>
              </div>
            </motion.div>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8">
            {itensMenu.map((item) => (
              <button
                key={item.nome}
                onClick={() => handleMenuClick(item)}
                className={`text-sm font-medium transition-colors hover:text-vermelho-principal ${
                  scrolled ? 'text-cinza-escuro' : 'text-cinza-escuro md:text-white'
                }`}
              >
                {item.nome}
              </button>
            ))}
          </nav>

          {/* BotÃ£o de Contato */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={() => handleMenuClick({ nome: 'Contato', href: '#contato', isHash: true })}
              className="bg-vermelho-principal hover:bg-red-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4 mr-2 text-white" />
              Contato
            </Button>
          </div>

          {/* BotÃ£o Menu Mobile */}
          <button
            className={`md:hidden p-2 rounded-full border transition-colors ${menuAberto || scrolled ? 'bg-white shadow-sm border-white/70' : 'bg-white/70 border-white/60'}`}
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-cinza-escuro' : 'text-cinza-escuro md:text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-cinza-escuro' : 'text-cinza-escuro md:text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Overlay Mobile */}
      <AnimatePresence>
        {menuAberto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black/50 z-[60]"
            onClick={() => setMenuAberto(false)}
          />
        )}
      </AnimatePresence>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuAberto && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed top-0 right-0 bg-white shadow-2xl z-[70] "
            style={{ width: '60%', height: '100%' }}
          >
            <div className="h-full flex flex-col">
              {/* Header do Menu */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/images/logo-mineracao-itapeva-Photoroom.png" 
                    alt="Logo MineraÃ§Ã£o Itapeva" 
                    className="w-16 h-12 object-contain drop-shadow-sm"
                  />
                  <div>
                    <p className="text-xs text-gray-600">
                      Desde 1959
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMenuAberto(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* NavegaÃ§Ã£o */}
              <nav className="flex-1 px-6 py-4 space-y-2">
                {itensMenu.map((item) => (
                  <button
                    key={item.nome}
                    onClick={() => handleMenuClick(item)}
                    className="block w-full text-left px-4 py-3 text-cinza-escuro hover:text-vermelho-principal rounded-lg transition-all duration-200"
                  >
                    {item.nome}
                  </button>
                ))}
              </nav>

              {/* Footer do Menu */}
              <div className="p-6 border-t border-gray-200">
                <Button 
                  onClick={() => handleMenuClick({ nome: 'Contato', href: '#contato', isHash: true })}
                  className="w-full bg-vermelho-principal hover:bg-red-700 text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contato
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}







