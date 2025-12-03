'use client';

// app/page.tsx
import Image from "next/image";
import "./styles.css";
import { useState } from "react";

const courses = [
  {
    id: 1,
    title: "Terapia Medicamentosa e Cálculo de Medicamentos",
    description:
      "Aprenda, passo a passo, a administrar medicamentos com segurança e a realizar cálculos de doses sem medo de errar.",
  },
  {
    id: 2,
    title: "Cuidados Básicos ao Idoso",
    description:
      "Higiene, conforto, prevenção de quedas, manejo da dor e comunicação respeitosa com a pessoa idosa e sua família.",
  },
  {
    id: 3,
    title: "Cuidados em Situações Especiais",
    description:
      "Orientações práticas para pacientes acamados, pós-operatórios e outras situações que exigem atenção redobrada.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Nome da Aluna",
    role: "Cuidadora",
    text: "Eu morria de medo de errar na medicação. Depois do curso, consigo fazer os cálculos e conferir tudo com segurança.",
  },
  {
    id: 2,
    name: "Nome do Aluno",
    role: "Profissional de Home Care",
    text: "O conteúdo foi direto ao ponto. Consegui aplicar o que aprendi já na semana seguinte.",
  },
  {
    id: 3,
    name: "Nome da Aluna",
    role: "Familiar Cuidadora",
    text: "Os cursos me ajudaram a organizar a rotina e evitar feridas. Mudou nossa dinâmica em casa.",
  },
];

export default function HomePage() {
  const [open, setOpen] = useState(false);


  return (
    <main>
          <header className="header">
      <div className="container header-inner">
        
        {/* LOGO */}
        <div className="header-logo">
          {/* imagem ou texto */}
          <Image
            src="/logo.png"
            alt="Logo"
            width={30}
            height={30}
            className="header-logo-img"
          />
          <span className="header-title">IR Cursos de Saúde</span>
        </div>

        {/* NAV DESKTOP */}
        <nav className="header-nav">
          <a href="#cursos">Cursos</a>
          <a href="#video">Apresentação</a>
          <a href="#sobre">Sobre</a>
          <a href="#depoimentos">Depoimentos</a>
        </nav>

        {/* BOTÃO DESKTOP */}
        <a
          href="https://wa.me/5599999999999"
          className="btn btn-primary header-cta"
        >
          WhatsApp
        </a>

        {/* MENU MOBILE */}
        <button
          className="header-menu-btn"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div className="header-mobile-menu">
            <a onClick={() => setOpen(false)} href="#cursos">Cursos</a>
            <a onClick={() => setOpen(false)} href="#video">Apresentação</a>
            <a onClick={() => setOpen(false)} href="#sobre">Sobre</a>
            <a onClick={() => setOpen(false)} href="#depoimentos">Depoimentos</a>

            <a
              href="https://wa.me/5599999999999"
              className="btn btn-primary"
              style={{ marginTop: "1rem" }}
            >
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </header>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="badge">Formação para cuidadores</span>
            <h1 className="hero-title">
              Cuidar com segurança começa com uma boa formação
            </h1>
            <p className="hero-text">
              Cursos online de capacitação para cuidadores, com foco em
              prática, humanização e segurança do paciente.
            </p>
            <div className="hero-actions">
              <a href="#cursos" className="btn btn-primary">
                Ver todos os cursos
              </a>
              <a href="#video" className="btn btn-outline">
                Assistir vídeo de apresentação
              </a>
            </div>
          </div>

          <div>
            <div className="hero-card">
              <Image
                src="/cartao-chamada.png"
                alt="Cartão de chamada do curso"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* VÍDEO */}
      <section id="video" className="section section--white">
        <div className="container video-layout">
          <div>
            <h2 className="section-title">Assista à mensagem de boas-vindas</h2>
            <p className="section-subtitle" style={{ marginBottom: "0" }}>
              Gravei este vídeo para explicar rapidamente como funcionam os
              cursos, para quem são indicados e como você pode se capacitar de
              forma segura e organizada, mesmo começando do zero.
            </p>
          </div>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Vídeo de apresentação"
              style={{ width: "100%", height: "100%", border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* SOBRE OS CURSOS */}
      <section className="section section--soft">
        <div className="container text-center">
          <h2 className="section-title">
            Formação completa para quem cuida de quem precisa
          </h2>
          <p className="section-subtitle">
            Aqui você encontra cursos pensados para cuidadores, profissionais
            da saúde e familiares que desejam aprender a cuidar com mais
            segurança, calma e confiança.
          </p>
          <p className="section-subtitle">
            Os conteúdos são diretos, com linguagem simples, exemplos do dia a
            dia e material de apoio para você revisar sempre que precisar.
          </p>
          <p className="section-subtitle">
            As aulas são online e ao vivo / gravadas, com espaço para tirar
            dúvidas e suporte próximo durante todo o processo de aprendizagem.
          </p>
        </div>
      </section>

      {/* CURSOS */}
      <section id="cursos" className="section section--white">
        <div className="container">
          <div className="courses-header">
            <div>
              <h2 className="section-title">Cursos disponíveis</h2>
              <p className="section-subtitle" style={{ marginBottom: 0 }}>
                Escolha o curso que melhor atende o seu momento profissional ou
                pessoal.
              </p>
            </div>
            <a href="#contato" className="btn btn-outline">
              Falar com atendimento
            </a>
          </div>

          <div className="grid-3">
            {courses.map((course) => (
              <article key={course.id} className="course-card">
                <div className="course-image-placeholder" />
                <h3 className="course-title">{course.title}</h3>
                <p className="course-text">{course.description}</p>
                <button className="btn btn-primary">Ver detalhes do curso</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="section section--soft" id="sobre">
        <div className="container">
          <h2 className="section-title text-center">
            Para quem são esses cursos?
          </h2>
          <p className="section-subtitle">
            Os cursos foram criados para diferentes perfis de cuidadores e
            familiares.
          </p>

          <div className="grid-3">
            <div className="simple-card">
              <h3 className="simple-card-title">Quem quer iniciar na área</h3>
              <p className="simple-card-text">
                Pessoas que desejam trabalhar como cuidador(a) de idosos ou
                pacientes.
              </p>
            </div>
            <div className="simple-card">
              <h3 className="simple-card-title">Profissionais da saúde</h3>
              <p className="simple-card-text">
                Quem já atua em hospitais, clínicas ou home care e busca
                atualização.
              </p>
            </div>
            <div className="simple-card">
              <h3 className="simple-card-title">Familiares cuidadores</h3>
              <p className="simple-card-text">
                Familiares que cuidam de alguém em casa e querem aprender a
                fazer isso com segurança.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO TUDO COMEÇOU */}
      <section className="section section--white">
        <div className="container two-columns">
          <div>
            <h2 className="section-title">Como tudo começou</h2>
            <p className="section-subtitle">
              Este projeto nasceu da rotina intensa no cuidado com pacientes e
              da percepção de que muitos erros e inseguranças poderiam ser
              evitados com orientação adequada e acessível.
            </p>
            <p className="section-subtitle">
              Ao longo dos anos, acompanhando cuidadores, técnicos e
              familiares, ficou claro que faltava um espaço seguro, com
              conteúdo claro e atualizado, voltado para a prática do dia a dia.
            </p>
            <p className="section-subtitle">
              Assim surgiu a ideia de criar uma plataforma de cursos que unisse
              técnica, humanização e acolhimento.
            </p>
          </div>
          <div className="image-square">{/* imagem ilustrativa */}</div>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section className="section section--soft">
        <div className="container two-columns">
          <div className="image-portrait">{/* foto sua */}</div>
          <div>
            <h2 className="section-title">Quem está por trás dos cursos</h2>
            <p className="section-subtitle">
              Meu nome é [Seu Nome], sou [sua profissão] e atuo na área da
              saúde há [X] anos.
            </p>
            <p className="section-subtitle">
              Nesse tempo, trabalhei em [hospitais/clínicas/home care/etc.],
              acompanhei diversos pacientes e participei da formação de vários
              profissionais e cuidadores.
            </p>
            <p className="section-subtitle">
              Transformei essa experiência em cursos objetivos, com exemplos
              reais e foco total na sua segurança ao cuidar.
            </p>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="section section--white" id="depoimentos">
        <div className="container">
          <h2 className="section-title text-center">O que os alunos dizem</h2>
          <div className="grid-3">
            {testimonials.map((t) => (
              <figure key={t.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="avatar-circle" />
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
                <blockquote className="testimonial-text">“{t.text}”</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSABILIDADE */}
      <section className="section section--soft">
        <div className="container text-center">
          <h2 className="section-title">Aprendizado com responsabilidade</h2>
          <p className="section-subtitle">
            Todo o conteúdo é baseado em boas práticas de segurança do paciente
            e nos limites de atuação do cuidador e da equipe de saúde.
          </p>
          <p className="section-subtitle">
            Você terá acesso às aulas, materiais complementares e canais
            oficiais de contato para tirar dúvidas relacionadas ao conteúdo.
          </p>
          <p className="section-subtitle">
            O compromisso é entregar formação de qualidade, com informações
            claras, realistas e aplicáveis à sua rotina.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="section section--white">
        <div className="container text-center">
          <h2 className="section-title">Pronto(a) para cuidar com mais segurança?</h2>
          <p className="section-subtitle">
            Escolha o curso que faz sentido para você, garanta sua vaga e dê o
            próximo passo na sua formação.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#cursos" className="btn btn-primary">
              Ver todos os cursos
            </a>
            <a
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Seu Nome / Seus Cursos.</span>
          <span>@seuinstagram</span>
        </div>
      </footer>
    </main>
  );
}
