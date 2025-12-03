"use client";

import React from "react";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-blue-900/40 bg-[#0b1120]/70 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
      <div className="relative max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl border border-blue-700/60 bg-gradient-to-br from-blue-600/30 to-blue-900/50 flex items-center justify-center shadow-[0_4px_20px_rgba(37,99,235,0.3)]">
            <span className="text-xs font-semibold tracking-[0.18em] text-blue-100">
              TX
            </span>
          </div>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-semibold tracking-tight text-blue-100">
              TyonX
            </span>
            <span className="text-[0.70rem] text-blue-400/70">
              Services &amp; Digital Management
            </span>
          </span>
        </Link>

        {/* Navegação */}
        <nav className="hidden md:flex items-center gap-6 text-xs md:text-sm font-medium">
          <HeaderLink href="/">Início</HeaderLink>
          <HeaderLink href="#sobre">Sobre</HeaderLink>
          <HeaderLink href="#portfolio">Portfólio</HeaderLink>
          <HeaderLink href="#clientes">Clientes</HeaderLink>
          <HeaderLink href="#contato">Contato</HeaderLink>
        </nav>

        {/* CTA */}
        <Link
          href="/mensagem"
          className="ml-4 inline-flex items-center rounded-full border border-blue-500/60 bg-gradient-to-r from-blue-700 to-blue-500 px-4 py-2 text-xs md:text-sm font-medium tracking-wide text-white shadow-[0_14px_40px_rgba(37,99,235,0.35)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_20px_55px_rgba(37,99,235,0.5)] active:translate-y-0"
        >
          Fale Conosco
        </Link>
      </div>
    </header>
  );
}

type HeaderLinkProps = {
  href: string;
  children: React.ReactNode;
};

function HeaderLink({ href, children }: HeaderLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Se for âncora (#sobre, #clientes, etc), faz scroll com offset
    if (href.startsWith("#")) {
      e.preventDefault();

      const el = document.querySelector(href);
      if (!el) return;

      const headerOffset = -1000; // altura do header (ajusta se precisar)
      const elementPosition = el.getBoundingClientRect().bottom + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      
    }
    // Se não começar com # (ex: "/"), deixa o Link do Next cuidar
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="relative group inline-flex items-center rounded-full px-3 py-1 text-blue-300 hover:text-blue-100 transition-all duration-200"
    >
      <span>{children}</span>
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
