"use client";

import React from "react";
import Link from "next/link";
import { useEffect, useRef } from "react";
const projects = [
  {
    title: "Mileva Saas de Automatização",
    description:
      "Landing page + automações de leads integradas, aumentando o fluxo de oportunidades qualificados.",
    href: "/portifolio/mileva",
    video: "/videos/mileva.webm",
  },
  {
    title: "Cursos de Saude e Bem-Estar ao Idoso",
    description:
      "Site institucional focado em conversão, com agendamento automático de reuniões.",
    href: "/portifolio/ircursos",
    video: "../videos/ircursos.mp4",
  },
  {
    title: "Dermaclin landing page e vendas",
    description:
      "Landing page otimizada com funil de vendas automatizado, integrando anúncios e WhatsApp.",
    href: "/portifolio/dermaclin",
    video: "/videos/clinic.webm",
  },
];

const testimonials = [
  {
    name: "Ana Ribeiro",
    role: "CEO, Clínica Vitta",
    text: "Depois do novo site e das automações, nosso volume de agendamentos explodiu. Tudo organizado em um painel só.",
  },
  {
    name: "Lucas Fernandes",
    role: "Founder, Agência Orion",
    text: "Eles pensam o funil inteiro. Deixamos de perder leads e conseguimos escalar com previsibilidade.",
  },
  {
    name: "Mariana Costa",
    role: "Diretora Comercial, NeoTech",
    text: "A performance e a clareza dos dados em tempo real transformaram nossa forma de vender.",
  },
];

export default function HomePage() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget as HTMLDivElement;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2 - x;
    const centerY = rect.height / 2 - y;

    const intensity = 0.1; // sombra
    const tiltIntensity = -40; // ângulo do card

    const shadowX = centerX * intensity;
    const shadowY = centerY * intensity;

    const rotateX = -(centerY / tiltIntensity);
    const rotateY = centerX / tiltIntensity;

    // sombra + inclinação
    card.style.boxShadow = `${shadowX}px ${shadowY}px 0px rgba(0,0,0,0.18)`;
    card.style.transform = `
      perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-4px)
    `;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget as HTMLDivElement;

    card.style.boxShadow = "0 14px 0px rgba(0,0,0,0.08)";
    card.style.transform = `
      perspective(800px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
    `;
  };


  return (
    <div className="page">
      {/* HERO / SECTION 1 */}
       <video
        className="page-video-bg"
        src="/videos/capa.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* OVERLAY GLOBAL (gradiente / escurecido) */}
      <header id="inicio" className="hero">
        <div className="hero-content">
          <span className="hero-tag">
            SITES, AUTOMAÇÕES & PERFORMANCE
          </span>

          <h1 className="hero-title">
            Tecnologia que coloca o seu negócio no automático
          </h1>

          <p className="hero-subtitle">
            Criamos sites e fluxos de automação focados em conversão,
            atendimento e escala — para sua empresa vender mais enquanto você
            foca na estratégia.
          </p>

          <div className="hero-actions">
            <a href="#contato" className="btn btn-primary">
              Agendar diagnóstico gratuito
            </a>
            <a href="#portfolio" className="btn btn-secondary">
              Ver projetos e resultados
            </a>
          </div>

          <div className="hero-bullets">
            <span>✓ Foco total em conversão</span>
            <span>✓ Integrações & automações inteligentes</span>
            <span>✓ Estrutura pronta para escalar</span>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-header">
              <span className="panel-label">PAINEL EM TEMPO REAL</span>
              <strong>Seu funil inteiro em um só lugar</strong>
            </div>
            <p className="panel-text">
              Monitoramos leads, agendamentos, vendas e automações em um painel
              visual para você acompanhar a performance sem esforço.
            </p>
            <div className="panel-metrics">
              <div className="metric">
                <span className="metric-value">+120%</span>
                <span className="metric-label">Aumento médio de leads</span>
              </div>
              <div className="metric">
                <span className="metric-value">-35%</span>
                <span className="metric-label">Tempo de resposta</span>
              </div>
              <div className="metric">
                <span className="metric-value">24/7</span>
                <span className="metric-label">Automação ativa</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* SECTION 2 - SOBRE */}
        <section id="sobre" className="section section-alt">
          <div className="section-inner section-grid">
            <div className="section-text">
              <span className="section-tag">SOBRE A EMPRESA</span>
              <h2>
                Sites rápidos, automações precisas e um funil que trabalha por
                você.
              </h2>
              <p>
                Somos uma empresa de tecnologia especializada em construir
                estruturas digitais que convertem: sites, landing pages e
                automações que conectam marketing, vendas e atendimento.
              </p>
              <p>
                Nada de soluções genéricas. Entendemos o seu modelo de negócio,
                mapeamos o funil e desenhamos uma experiência completa — do
                primeiro clique ao fechamento.
              </p>
              <ul className="list">
                <li>Arquitetura de funil pensada para escala.</li>
                <li>Integração com CRM, WhatsApp, e-mail e ferramentas de ads.</li>
                <li>Métricas claras e acompanhamento contínuo de performance.</li>
              </ul>
            </div>

            {/* Placeholder para imagem ou mockup */}
            <div className="section-media">
              <div className="image-card">
                <div className="image-placeholder">
                  <video
                      className="image-mockup"
                      src="/videos/1202.mov"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                </div>
                <p className="image-caption">
                  Exemplo de dashboard integrando leads, agendamentos e vendas
                  em tempo real.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 - PORTFÓLIO */}
        <section id="portfolio" className="section">
          <div className="section-inner">
            <header className="section-header">
              <span className="section-tag">PORTFÓLIO</span>
              <h2>Projetos que transformaram funis em máquinas de vendas.</h2>
              <p>
                Cada projeto combina design limpo, tecnologia sólida e
                automações conectadas ao que realmente importa: resultado.
              </p>
            </header>

            <div className="card-grid">
              {projects.map((project) => (
                <article key={project.title} className="project-card"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  >
                  <div className="project-image">
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="video-preview"
                    />
                  </div>

                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <Link href={project.href} className="btn btn-primary btn-small">
                      Ver case completo
                    </Link>
                  </div>
                </article>
                
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 - CLIENTES / PROVA SOCIAL */}
        <section id="clientes" className="section section-alt">
          <div className="section-inner">
            <header className="section-header">
              <span className="section-tag">CLIENTES</span>
              <h2>Quem confiou na automação, colheu previsibilidade.</h2>
              <p>
                Empresas que saíram do improviso e hoje enxergam o funil inteiro
                em tempo real, com processos claros e escaláveis.
              </p>
            </header>

            <div className="testimonials-grid">
              {testimonials.map((item) => (
                <figure key={item.name} className="testimonial-card">
                  <blockquote>{item.text}</blockquote>
                  <figcaption>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* <div className="client-logos">
              <div className="logo-placeholder">LOGO 1</div>
              <div className="logo-placeholder">LOGO 2</div>
              <div className="logo-placeholder">LOGO 3</div>
              <div className="logo-placeholder">LOGO 4</div>
            </div> */}
          </div>
        </section>

        {/* SECTION 5 - CONTATO */}
        <section id="contato" className="section section-contact">
          <div className="section-inner section-grid">
            <div className="section-text">
              <span className="section-tag">CONTATO</span>
              <h2>Pronto para colocar o seu funil no automático?</h2>
              <p>
                Conte rapidamente sobre o seu negócio e o cenário atual. Vamos
                mapear o funil, identificar gargalos e propor uma estrutura
                pronta para escalar.
              </p>

              <p className="contact-copy">
                Nosso foco é construir ativos digitais que passam confiança,
                carregam a sua marca e geram vendas todos os dias, sem depender
                de improviso.
              </p>
            </div>

            <div className="section-media">
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Aqui você integra com API, serviço de e-mail ou automação
                  alert("Formulário enviado (simulação).");
                }}
              >
                <div className="form-group">
                  <label htmlFor="nome">Nome</label>
                  <input id="nome" name="nome" type="text" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input id="email" name="email" type="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="empresa">Empresa</label>
                  <input id="empresa" name="empresa" type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="site">Site atual (se tiver)</label>
                  <input id="site" name="site" type="url" />
                </div>
                <div className="form-group">
                  <label htmlFor="mensagem">Resumo do que você precisa</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar e agendar diagnóstico
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-inner footer-inner">
          <span className="footer-brand">
            © {new Date().getFullYear()} TyonX / Services & Digital Management
          </span>
          <span className="footer-copy">
            Sites, automações e funis inteligentes para negócios que levam
            performance a sério.
          </span>
        </div>
      </footer>

      {/* ESTILOS */}
      <style jsx>{`
:root {
  --bg-body: #020617;
  --bg-elevated: #020617;
  --bg-soft: #020617;
  --bg-alt: #020617;
  --accent: #22d3ee;
  --accent-soft: rgba(56, 189, 248, 0.2);
  --accent-strong: #0ea5e9;
  --accent-secondary: #6366f1;
  --text-primary: #e5e7eb;
  --text-secondary: #9ca3af;
  --text-muted: #6b7280;
  --border-subtle: rgba(148, 163, 184, 0.3);
  --border-strong: rgba(148, 163, 184, 0.6);
  --radius-lg: 1.5rem;
  --radius-md: 0.875rem;
  --radius-pill: 999px;
}

/* RESET SIMPLES */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  scroll-behavior: smooth;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
    "Segoe UI", sans-serif;
  
  color: var(--text-primary);
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
}

/* CONTAINER PRINCIPAL */
.page {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  color: var(--text-primary);
}

.page-video-bg {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
  filter: saturate(1.1) contrast(1.1) brightness(0.45);
  pointer-events: none;
}

/* ============ HERO ============ */
.hero {
  position: relative;
  min-height: 100vh;
  padding: 6rem 1.5rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid rgba(148, 163, 184, 0.3);
}

/* video solto dentro do <main> some */
main > .hero-video {
  display: none;
}

video{
  display: block;
  max-width: 100%;
}



.hero-content {
  position: relative;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  gap: 2.5rem;
  align-items: flex-start;
}

.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.2rem 0.9rem;
  border-radius: 20px;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.4);
  color: var(--accent);
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.hero-title {
  font-size: clamp(2.4rem, 3.8vw + 1rem, 3.6rem);
  line-height: 1.05;
  margin: 1.5rem 0 1rem;
  letter-spacing: -0.04em;
  color: #f9fafb;
  max-width: 22ch;
}

.hero-subtitle {
  max-width: 40rem;
  margin: 0 0 1.75rem;
  color: var(--text-secondary);
  font-size: 1.02rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-bottom: 1.5rem;
}

.hero-bullets {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.hero-bullets span {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.8rem;
  border-radius: var(--radius-pill);
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(31, 41, 55, 0.9);
}

/* Painel de métricas */
.hero-panel {
  margin-top: 2.5rem;
  max-width: 32rem;
  border-radius: var(--radius-lg);
  padding: 1.4rem 1.5rem 1.6rem;
  background: linear-gradient(
      135deg,
      rgba(15, 23, 42, 0.6),
      rgba(15, 23, 42, 0.4)
    ),
    radial-gradient(circle at top left, rgba(56, 189, 248, 0.14), transparent 55%);
  border: 1px solid rgba(148, 163, 184, 0.5);
  box-shadow:
    0 18px 60px rgba(15, 23, 42, 0.9),
    0 0 0 1px rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(20px);
  
}

.hero-panel-header {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.9rem;

}

.panel-label {
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.hero-panel-header strong {
  font-size: 0.95rem;
}

.panel-text {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0 0 1.1rem;
}

.panel-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;
}

.metric {
  padding: 0.75rem 0.7rem;
  border-radius: 0.9rem;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(30, 64, 175, 0.9);
}

.metric-value {
  display: block;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--accent);
}

.metric-label {
  display: block;
  font-size: 0.72rem;
  color: var(--text-muted);
}

/* ============ BOTÕES ============ */
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.85rem 1.7rem;
  border-radius: 30px;
  border: 1px solid transparent;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition:
    transform 0.18s ease-out,
    box-shadow 0.18s ease-out,
    background 0.18s ease-out,
    border-color 0.18s ease-out,
    color 0.18s ease-out;
  white-space: nowrap;
}

.btn-primary {
  --accent: #2563eb; /* Azul médio */
  --accent-secondary: #1e3a8a; /* Azul escuro */
  
  background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
  background-size: 200% 200%;
  border: none;
  border-radius: 30px;
  color: #e2e8f0;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  letter-spacing: 0.4px;
  cursor: pointer;

  box-shadow:
    0 8px 30px rgba(37, 99, 235, 0.3),
    0 0 0 1px rgba(15, 23, 42, 0.6);
  transition:
    transform 0.3s ease,
    box-shadow 0.4s ease,
    background-position 1.2s ease,
    color 0.2s ease;
}

.btn-primary:hover {
  background-position: 100% 0%;
  color: #fff;
  transform: translateY(-1px) scale(1.02);
  box-shadow:
    0 12px 40px rgba(37, 99, 235, 0.45),
    0 0 0 1px rgba(15, 23, 42, 0.8);
}

.btn-primary:active {
  transform: translateY(0px) scale(0.98);
  box-shadow:
    0 6px 20px rgba(37, 99, 235, 0.95),
    0 0 0 1px rgba(15, 23, 42, 0.6);
}

.btn-secondary {
  background: radial-gradient(circle at top left, rgba(56, 189, 248, 0.18), transparent 60%),
    rgba(15, 23, 42, 0.95);
  color: var(--text-primary);
  border-color: rgba(51, 65, 85, 0.9);
}

.btn-secondary:hover {
  background: rgba(15, 23, 42, 0.9);
  border-color: rgba(148, 163, 184, 0.8);
  transform: translateY(-1px);
  box-shadow: 0 14px 45px rgba(15, 23, 42, 0.9);
}

.btn-secondary:active {
  transform: translateY(0);
  box-shadow: 0 6px 24px rgba(15, 23, 42, 0.9);
}

.btn-small {
  padding: 0.65rem 1.3rem;
  font-size: 0.85rem;
}

/* ============ SEÇÕES GENÉRICAS ============ */
.section {
  padding: 5.5rem 1.5rem 5.8rem;
  border-bottom: 2px solid rgba(148, 163, 184, 0.3);
}

.section-alt {
border-bottom: 2px solid rgba(148, 163, 184, 0.3);
boder-radius: var(--radius-lg);
}

.section-inner {
  max-width: 1120px;
  margin: 0 auto;
}

.section-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
  gap: 3rem;
  align-items: center;
}

.section-text h2 {
  font-size: clamp(1.8rem, 2.1vw + 1rem, 2.3rem);
  margin: 0 0 1rem;
  letter-spacing: -0.03em;
  color: #f9fafb;
}

.section-text p {
  margin: 0 0 1rem;
  color: var(--text-secondary);
  font-size: 0.98rem;
}

.section-tag {
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.7rem;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(148, 163, 184, 0.5);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--text-muted);
  background: rgba(15, 23, 42, 0.85);
}

.section-header {
  max-width: 44rem;
  margin-bottom: 2.7rem;
}

.section-header h2 {
  margin: 0.7rem 0 0.8rem;
}

.section-header p {
  margin: 0;
  color: var(--text-secondary);
}

/* LISTA */
.list {
  padding-left: 1.2rem;
  margin: 1rem 0 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.list li + li {
  margin-top: 0.35rem;
}

/* ============ MEDIA / IMAGEM MOCKUP ============ */
.section-media {
  position: relative;
}

.image-card {
  border-radius: var(--radius-lg);
  padding: 1.4rem 1.4rem 1.1rem;
  background:
    radial-gradient(circle at top left, rgba(56, 189, 248, 0.18), transparent 60%),
    radial-gradient(circle at bottom right, rgba(129, 140, 248, 0.16), transparent 50%),
    rgba(15, 13, 52, 0.3);
  border: 1px solid rgba(51, 65, 85, 0.9);
  box-shadow:
    0 18px 60px rgba(15, 23, 42, 0.9),
    0 0 0 1px rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(12px);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.image-card:hover {
  transform: translateY(-3px);
  box-shadow:
    0 25px 70px rgba(15, 23, 42, 1),
    0 0 0 1px rgba(56, 189, 248, 0.4);
}

.image-placeholder {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1.1rem;
  border: 1px dashed rgba(148, 163, 184, 0.7);
  background: linear-gradient(
    135deg,
    rgba(15, 23, 42, 0.85),
    rgba(15, 23, 42, 0.9)
  );
  overflow: hidden;
}

.image-placeholder img {
  border-radius: 1.1rem;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.image-caption {
  margin-top: 0.9rem;
  font-size: 0.8rem;
  color: var(--text-muted);
  text-align: center;
  opacity: 0.85;
}


/* ============ PORTFÓLIO ============ */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.8rem;
}

.project-card {
  position: relative;
  border-radius: var(--radius-lg);
  padding: 1.3rem;
  background:
    radial-gradient(circle at top left, rgba(56, 189, 248, 0.18), transparent 60%),
    radial-gradient(circle at bottom right, rgba(129, 140, 248, 0.16), transparent 50%),
    rgba(15, 13, 52, 0.3);
  border: 1px solid rgba(51, 65, 85, 0.9);
  overflow: hidden;
  transform-style: preserve-3d;
  transition:
    transform 0.28s ease-out,
    box-shadow 0.28s ease-out,
    border-color 0.28s ease-out,
    background 0.28s ease-out;
  cursor: pointer;
}

.project-card::before {
  content: "";
  position: absolute;
  inset: -40%;
  background: conic-gradient(
    from 140deg,
    transparent,
    rgba(56, 189, 248, 0.3),
    rgba(129, 140, 248, 0.25),
    transparent 65%
  );
  opacity: 0;
  transition: opacity 0.3s ease-out;
  pointer-events: none;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 24px 60px rgba(15, 23, 42, 0.95),
    0 0 0 1px rgba(15, 23, 42, 0.9);
  border-color: rgba(148, 163, 184, 0.8);
}

.project-card:hover::before {
  opacity: 0.8;
}

.project-image {
  border: 2px solid rgba(31, 41, 55, 0.5);
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 1rem;
  position: relative;
}

.video-preview {
  display: block;
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.project-content h3 {
  font-size: 1.05rem;
  margin: 0 0 0.5rem;
}

.project-content p {
  margin: 0 0 0.9rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

/* ============ TESTEMUNHOS / CLIENTES ============ */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.6rem;
  margin-bottom: 2.5rem;
}

.testimonial-card {
  border-radius: var(--radius-md);
  padding: 1.2rem 1.2rem 1.1rem;
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(31, 41, 55, 0.9);
}

.testimonial-card blockquote {
  margin: 0 0 0.9rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.testimonial-card figcaption {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  font-size: 0.8rem;
}

.testimonial-card figcaption strong {
  color: #e5e7eb;
}

.testimonial-card figcaption span {
  color: var(--text-muted);
}

.client-logos {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  align-items: center;
}

.logo-placeholder {
  min-width: 90px;
  padding: 0.6rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(51, 65, 85, 0.9);
  font-size: 0.7rem;
  text-align: center;
  color: var(--text-muted);
  background: rgba(15, 23, 42, 0.9);
}

/* ============ CONTATO / FORM ============ */
.section-contact {
}

.contact-copy {
  margin-top: 0.7rem;
  color: var(--text-secondary);
}

.contact-form {
  border-radius: var(--radius-lg);
  padding: 1.8rem 1.7rem 1.6rem;
  background:
    radial-gradient(circle at top left, rgba(90, 189, 248, 0.18), transparent 55%),
    rgba(15, 23, 42, 0.70);
  border: 1px solid rgba(51, 65, 85, 0.9);
  box-shadow:
    0 20px 60px rgba(15, 23, 42, 0.98),
    0 0 0 1px rgba(15, 23, 42, 0.9);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 1rem;
}

.form-group label {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.form-group input,
.form-group textarea {
  border-radius: 0.8rem;
  border: 2px solid rgba(51, 61, 95, 0.95);
  padding: 0.65rem 0.75rem;
  background: rgba(15, 23, 42, 0.7);
  color: var(--text-primary);
  font-size: 0.9rem;
  outline: none;
  transition:
    border-color 0.16s ease-out,
    box-shadow 0.16s ease-out,
    background 0.16s ease-out;
  resize: vertical;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(148, 163, 184, 0.6);
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--accent-strong);
  box-shadow:
    0 0 0 1px rgba(15, 23, 42, 1),
    0 0 0 1px rgba(56, 189, 248, 0.5),
    0 0 0 10px rgba(56, 189, 248, 0.12);
}

/* ============ FOOTER ============ */
.footer {
  border-top: 1px solid rgba(31, 41, 55, 0.9);
  background: transparent; /* ou só remove a linha */
  padding: 1.4rem 1.5rem 1.6rem;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.footer-inner {
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: space-between;
  align-items: center;
}

.footer-brand {
  color: #9ca3af;
}

.footer-copy {
  max-width: 26rem;
}

/* ============ RESPONSIVO ============ */
@media (max-width: 960px) {
  .hero {
    padding-top: 5rem;
  }

  .hero-content {
    text-align: left;
  }

  .hero-panel {
    max-width: 100%;
  }

  .section-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .section-media {
    order: -1;
  }

  .section {
    padding-inline: 1.25rem;
  }
}

@media (max-width: 720px) {
  .hero {
    padding: 4.8rem 1.25rem 3.8rem;
    align-items: flex-end;
  }

  .hero-content {
    gap: 1.7rem;
  }

  .hero-title {
    font-size: 2.2rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-bullets {
    flex-direction: column;
    align-items: stretch;
  }

  .panel-metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .video-preview {
    height: 190px;
  }

  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .panel-metrics {
    grid-template-columns: minmax(0, 1fr);
  }

  .hero-title {
    font-size: 2rem;
  }

  .section {
    padding-inline: 1rem;
  }
}

      `}</style>
    </div>
  );
}