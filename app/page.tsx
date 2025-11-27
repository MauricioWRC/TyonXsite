"use client";

import React from "react";
import Link from "next/link";


const projects = [
  {
    title: "Funil de Vendas Automatizado",
    description:
      "Landing page + automações de leads integradas ao CRM, aumentando o fluxo de oportunidades qualificados.",
    href: "/portifolio/mileva",
  },
  {
    title: "Site de Autoridade para Serviços B2B",
    description:
      "Site institucional focado em conversão, com agendamento automático de reuniões.",
    href: "/portifolio/ircursos",
  },
  {
    title: "E-commerce com Fluxos Inteligentes",
    description:
      "Checkout otimizado e automações de recuperação de carrinho e pós-venda.",
    href: "/portifolio/dermaclin",
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

  const rotateX = -(centerY / tiltIntensity );
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
      <header id="inicio" className="hero">
        {/* Troque o src abaixo pela URL do seu vídeo */}
        <video
          className="hero-video"
          src="/videos/apresentacao-clinica.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay" />

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
                  <span>ESPACO PARA IMAGEM / MOCKUP</span>
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
                    <div className="image-placeholder">
                      <span>IMAGEM DO PROJETO</span>
                    </div>
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

            <div className="client-logos">
              <div className="logo-placeholder">LOGO 1</div>
              <div className="logo-placeholder">LOGO 2</div>
              <div className="logo-placeholder">LOGO 3</div>
              <div className="logo-placeholder">LOGO 4</div>
            </div>
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
            © {new Date().getFullYear()} Sua Empresa de Tecnologia.
          </span>
          <span className="footer-copy">
            Sites, automações e funis inteligentes para negócios que levam
            performance a sério.
          </span>
        </div>
      </footer>

      {/* ESTILOS */}
      <style jsx>{`
        .page {
          background: #ffffff;
          color: #000000;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
        }

        :global(html),
        :global(body) {
          margin: 0;
          padding: 0;
        }

        :global(html) {
          scroll-behavior: smooth;
        }

        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 1.5rem;
          box-sizing: border-box;
          color: #000;
          z-index: 1;
        }

        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -2;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(000, 000, 000, 0.4);
          z-index: -1;
        }

        .hero-content {
          width: 100%;
          max-width: 1120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0.35rem 0.75rem;
          border-radius: 999px;
          border: 1px solid #d4d4d4;
          margin-bottom: 1.5rem;
          background: rgba(255, 255, 255, 0.6);
          color: #000;
        }

        .hero-title {
          font-size: clamp(2.5rem, 4vw, 3.4rem);
          line-height: 1.05;
          margin: 0 0 1rem 0;
          letter-spacing: -0.03em;
          color: white;
        }

        .hero-subtitle {
          border-radius: 1.2rem;
          font-size: 1.2rem;
          line-height: 1.6;
          color: white;
          max-width: 32rem;
          margin-bottom: 2rem;
          
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem 1.6rem;
          border-radius: 999px;
          border: 1px solid #000;
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.18s ease, box-shadow 0.18s ease,
            background 0.18s ease, color 0.18s ease;
          background: transparent;
          color: #000;
        }

        .btn-primary {
          background: #000;
          color: #fff;
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.16);
        }

        .btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.2);
        }

        .btn-secondary {
          background: #ffffff;
        }

        .btn-secondary:hover {
          background: #000;
          color: #fff;
        }

        .btn-small {
          padding: 0.7rem 1.3rem;
          font-size: 0.85rem;
        }

        .hero-bullets {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem 1.5rem;
          font-size: 0.85rem;
          color: #f0f0f0;
          border-radius: 1rem 1rem 0 0;
          padding: 0.9rem 1.4rem;
          background: #111;
        }

        .hero-panel {
          border-radius: 1.4rem;
          background: #111;
          color: #f5f5f5;
          padding: 1.6rem 1.8rem;
          box-shadow: 0 22px 60px rgba(0, 0, 0, 0.45);
        }

        .hero-panel-header {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-bottom: 0.9rem;
        }

        .panel-label {
          font-size: 0.7rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #aaa;
        }

        .panel-text {
          margin: 0 0 1.2rem 0;
          font-size: 0.85rem;
          color: #d4d4d4;
        }

        .panel-metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .metric-value {
          display: block;
          font-size: 1.3rem;
          font-weight: 600;
        }

        .metric-label {
          font-size: 0.75rem;
          color: #b3b3b3;
        }

        .section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 5rem 1.5rem;
          box-sizing: border-box;
          background: #ffffff;
        }

        .section-alt {
          background: #f5f5f5;
        }

        .section-contact {
          position: relative;
        }

        .section-inner {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
        }

        .section-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.1fr);
          gap: 3rem;
          align-items: center;
        }

        .section-tag {
          display: inline-flex;
          font-size: 0.75rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #777;
          margin-bottom: 0.9rem;
        }

        .section-text h2 {
          font-size: clamp(1.9rem, 3vw, 2.4rem);
          margin: 0 0 1rem 0;
          letter-spacing: -0.02em;
        }

        .section-text p {
          font-size: 0.98rem;
          line-height: 1.7;
          color: #555;
          margin: 0 0 0.9rem 0;
        }

        .list {
          margin: 1.3rem 0 0 0;
          padding: 0;
          list-style: none;
        }

        .list li {
          padding-left: 1.1rem;
          position: relative;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
          color: #444;
        }

        .list li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #999;
        }

        .section-media {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .image-card {
          border-radius: 1.4rem;
          padding: 1rem;
          background: #fff;
          border: 1px solid #e5e5e5;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.03);
        }

        .image-placeholder {
          border-radius: 1.1rem;
          border: 1px dashed #c4c4c4;
          background: #fafafa;
          padding: 3rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 0.8rem;
          color: #777;
        }

        .image-caption {
          margin: 0.8rem 0 0 0;
          font-size: 0.8rem;
          color: #777;
        }

        .section-header {
          max-width: 640px;
          margin-bottom: 2.5rem;
        }

        .section-header h2 {
          font-size: clamp(2rem, 3vw, 2.4rem);
          margin: 0 0 1rem 0;
          color: #222;
        }

        .section-header p {
          margin: 0;
          color: #555;
          font-size: 0.95rem;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.8rem;
        }

        .project-card {
          border-radius: 1.4rem;
          border: 1px solid #e5e5e5;
          box-shadow: 0 14px 0px rgba(0, 0, 0, 0.08);
          background: #fff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          

          /* transições suaves */
          transition:
            transform 0.25s ease,
            border-color 0.2s ease,
            box-shadow 0.25s ease;


          /* suave 3D */
          transform-style: preserve-3d;
          will-change: transform, box-shadow;
        }

        .project-card:hover {
          border-color: #d4d4d4;
        }




        .project-image {
          padding: 1rem;
        }

        .project-content {
          padding: 0 1.4rem 1.4rem 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .project-content h3 {
          margin: 0;
          font-size: 1.05rem;
        }

        .project-content p {
          margin: 0;
          font-size: 0.9rem;
          color: #555;
          flex: 1;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.8rem;
          margin-bottom: 2.5rem;
        }

        .testimonial-card {
          margin: 0;
          padding: 1.6rem 1.4rem;
          border-radius: 1.4rem;
          background: #fff;
          border: 1px solid #e5e5e5;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.03);
        }

        .testimonial-card blockquote {
          margin: 0 0 1rem 0;
          font-size: 0.9rem;
          color: #444;
        }

        .testimonial-card figcaption {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
          font-size: 0.85rem;
          color: #777;
        }

        .testimonial-card figcaption strong {
          color: #000;
        }

        .client-logos {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
          justify-content: flex-start;
        }

        .logo-placeholder {
          flex: 0 0 auto;
          min-width: 120px;
          padding: 0.8rem 1.2rem;
          border-radius: 999px;
          border: 1px solid #d4d4d4;
          font-size: 0.8rem;
          text-align: center;
          color: #777;
          background: #fdfdfd;
        }

        .contact-form {
          padding: 1.6rem 1.8rem;
          border-radius: 1.4rem;
          background: #ffffff;
          border: 1px solid #e5e5e5;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.04);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-bottom: 1rem;
        }

        .form-group label {
          font-size: 0.85rem;
          color: #444;
        }

        .form-group input,
        .form-group textarea {
          border-radius: 0.7rem;
          border: 1px solid #d4d4d4;
          padding: 0.75rem 0.9rem;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.18s ease, box-shadow 0.18s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #000;
          box-shadow: 0 0 0 1px #000;
        }

        .contact-copy {
          margin-top: 1.5rem;
          font-size: 0.9rem;
          color: #444;
        }

        .footer {
          border-top: 1px solid #e5e5e5;
          padding: 1.8rem 1.5rem;
          background: #fff;
        }

        .footer-inner {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8rem;
          color: #777;
        }

        @media (max-width: 900px) {
          .hero-content {
            grid-template-columns: minmax(0, 1fr);
          }

          .hero-panel {
            margin-top: 1.5rem;
          }

          .section-grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .card-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .testimonials-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .hero {
            padding-top: 4.5rem;
            padding-bottom: 3.5rem;
          }

          .section {
            padding: 4rem 1.25rem;
            min-height: auto;
          }

          .card-grid,
          .testimonials-grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
