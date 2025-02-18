import React, { useState } from 'react';
import { Menu, X, Music, Book, Video, Home, Info, Church } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Início', href: '#home' },
    { icon: Info, label: 'Sobre', href: '#about' },
    { icon: Music, label: 'Músicas', href: '#music' },
    { icon: Video, label: 'Pregações', href: '#sermons' },
    { icon: Book, label: 'E-books', href: '#resources' },
    { icon: Church, label: 'Igreja', href: 'https://www.instagram.com/adsobradinhoba?igsh=bmI0N253dXpheG94' },
  ];

  return (
    <header className="fixed w-full z-50 bg-black/95 backdrop-blur-sm border-b border-blue-900/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-white">
            Ministério <span className="text-blue-500">Clemensson</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-blue-500 transition-colors flex items-center gap-2"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-300 hover:text-blue-500 md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-blue-900/30"
          >
            <nav className="container mx-auto px-4 py-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 py-4 text-gray-300 hover:text-blue-500 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}