import React from 'react';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-blue-900/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Ministério <span className="text-blue-500">Gospel</span>
            </h3>
            <p className="text-gray-400">
              Levando a palavra de Deus através da música e da pregação.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#music" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Músicas
                </a>
              </li>
              <li>
                <a href="#sermons" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Pregações
                </a>
              </li>
              <li>
                <a href="#resources" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Recursos
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contato@ministerio.com</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-blue-900/30">
          <p className="text-gray-400">
            © 2024 Ministério Gospel. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}