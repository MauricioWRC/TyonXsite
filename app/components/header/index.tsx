"use client";

import React from "react";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <div className="relative max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl border border-neutral-200 bg-white flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <span className="text-xs font-semibold tracking-[0.18em] text-neutral-900">
              TX
            </span>
          </div>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-semibold tracking-tight text-neutral-900">
              TyonX
            </span>
            <span className="text-[0.70rem] text-neutral-500">
              Services &amp; Digital Management
            </span>
          </span>
        </Link>

        {/* Navegação */}
        <nav className="hidden md:flex items-center gap-6 text-xs md:text-sm font-medium">
          <HeaderLink href="#inicio">Início</HeaderLink>
          <HeaderLink href="#sobre">Sobre</HeaderLink>
          <HeaderLink href="#portfolio">Portfólio</HeaderLink>
          <HeaderLink href="#clientes">Clientes</HeaderLink>
          <HeaderLink href="#contato">Contato</HeaderLink>
        </nav>

        {/* CTA */}
        <Link
          href="/mensagem"
          className="ml-4 inline-flex items-center rounded-full border border-black bg-black px-4 py-2 text-xs md:text-sm font-medium tracking-wide text-white shadow-[0_14px_40px_rgba(0,0,0,0.28)] transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_20px_55px_rgba(0,0,0,0.34)] active:translate-y-0"
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
  return (
    <Link
      href={href}
      className="relative group inline-flex items-center rounded-full px-3 py-1 text-neutral-600  hover:text-neutral-900 transition-colors duration-150"
    >
      <span >{children}</span>
      <span className="group-hover:text-amber-500" />
    </Link>
  );
}
