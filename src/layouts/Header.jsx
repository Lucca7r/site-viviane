import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: "Sobre", href: "#sobre" },
    { title: "Benefícios", href: "#beneficios" },
    { title: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <header className="bg-bege-claro shadow-sm p-4 sticky top-0 z-50 font-body relative">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/">
          <img
            src="/logoVivi.png"
            alt="Logo Viviane Energia"
            className="h-14"
          />
        </a>

        <ul className="hidden md:flex items-center space-x-8 text-cinza-texto font-medium">
          {navLinks.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                className="hover:text-dourado-calmo transition-colors duration-300"
              >
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              className="bg-verde-suave text-white font-semibold py-2 px-5 rounded-full hover:bg-opacity-90 transition-all duration-300"
            >
              Contato
            </a>
          </li>
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-cinza-texto focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`
          absolute top-full left-0 w-full bg-bege-claro shadow-lg md:hidden
          transition-all duration-300 ease-in-out
          ${
            isMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          }
        `}
      >
        <ul className="flex flex-col items-center p-4">
          {navLinks.map((link) => (
            <li key={link.title} className="w-full text-center py-3">
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-dourado-calmo transition-colors duration-300 text-lg"
              >
                {link.title}
              </a>
            </li>
          ))}
          <li className="w-full text-center py-3 mt-4">
            <a
              href="#contato"
              onClick={() => setIsMenuOpen(false)}
              className="bg-verde-suave text-white font-semibold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300"
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
