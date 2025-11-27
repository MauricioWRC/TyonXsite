"use client";

import Link from "next/link";
import "./styles.css";
import { useRef, useState } from "react";

type Testimonial = {
  name: string;
  text: string;
  procedure: string;
  beforeImg: string;
  afterImg: string;
};

type Procedure = {
  name: string;
  description: string;
  image: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ana Paula",
    text: "Minha pele nunca esteve tão saudável. A equipe é extremamente cuidadosa e delicada.",
    procedure: "Rejuvenescimento Facial",
    beforeImg: "/images/testimonials/ana-before.jpg",
    afterImg: "/images/testimonials/ana-after.jpg",
  },
  {
    name: "Mariana Souza",
    text: "Tratamento de acne impecável, com resultado natural e duradouro.",
    procedure: "Tratamento de Acne",
    beforeImg: "/images/testimonials/mariana-before.jpg",
    afterImg: "/images/testimonials/mariana-after.jpg",
  },
  {
    name: "Fernanda Lima",
    text: "Experiência sofisticada do início ao fim. Clínica linda e atendimento exclusivo.",
    procedure: "Ritual de Glow",
    beforeImg: "/images/testimonials/fernanda-before.jpg",
    afterImg: "/images/testimonials/fernanda-after.jpg",
  },
];

const procedures: Procedure[] = [
  {
    name: "Harmonização Facial",
    description:
      "Reposição de volume e contorno com naturalidade, valorizando seus traços.",
    image: "/images/procedures/harmonizacao.jpg",
  },
  {
    name: "Toxina Botulínica",
    description:
      "Atenuação de rugas de expressão com resultado leve e elegante.",
    image: "/images/procedures/botox.jpg",
  },
  {
    name: "Bioestimuladores de Colágeno",
    description:
      "Estimula a produção de colágeno para firmeza e textura da pele.",
    image: "/images/procedures/bioestimulador.jpg",
  },
  {
    name: "Laser Facial",
    description:
      "Uniformização do tom de pele, tratamento de manchas e rejuvenescimento.",
    image: "/images/procedures/laser.jpg",
  },
  {
    name: "Tratamento de Acne",
    description:
      "Protocolo personalizado para controle da acne e melhora de cicatrizes.",
    image: "/images/procedures/acne.jpg",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Preciso de encaminhamento para consultar com a dermatologista?",
    answer:
      "Não. Você pode agendar diretamente com a nossa equipe pelos canais de contato ou pelo formulário acima.",
  },
  {
    question: "Os procedimentos são dolorosos?",
    answer:
      "Utilizamos técnicas modernas e recursos de conforto para que os procedimentos sejam o mais tranquilos possível.",
  },
  {
    question: "Qual é o tempo médio de uma consulta dermatológica?",
    answer:
      "A consulta dura em média de 40 a 60 minutos, dependendo da complexidade do caso.",
  },
  {
    question: "Vocês atendem planos de saúde?",
    answer:
      "Atualmente trabalhamos com atendimento particular, com recibo para reembolso quando aplicável.",
  },
];

export default function Page() {
  const proceduresRef = useRef<HTMLDivElement | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const scrollProcedures = (direction: "left" | "right") => {
    if (!proceduresRef.current) return;
    const amount = 320;
    proceduresRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <main className="page">
      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <div className="header-brand">
            <span className="header-brand-kicker">Clínica Dermatológica</span>
            <span className="header-brand-title">Lumière Derma</span>
          </div>
          <button className="btn btn-primary">Agendar consulta</button>
        </div>
      </header>

      {/* HERO FULLSCREEN */}
      <section className="hero">
        <div className="hero-offset" aria-hidden="true" />
        <div className="hero-bg-grid">
          {/* Card 1 */}
          <div className="hero-card hero-card--procedimentos">
          <Link href="#procedimentos" className="text-d">
            <div className="hero-card-image" />
            <div className="hero-card-overlay" />
            <div className="hero-card-content">
              <p className="hero-card-tag">Cuidados Avançados</p>
              <h2 className="hero-card-title">Procedimentos</h2>
              <p className="hero-card-text">
                Tratamentos exclusivos para realçar sua melhor versão.
              </p>
            </div>
          </Link>
          </div>
          {/* Card 2 */}
          <div className="hero-card hero-card--consulta">
            <Link href="#consulta" className="text-d">
            <div className="hero-card-image" />
            <div className="hero-card-overlay" />
            <div className="hero-card-content">
              <p className="hero-card-tag">Cuidado Médico</p>
              <h2 className="hero-card-title">Consulta dermatológica</h2>
              <p className="hero-card-text">
                Avaliação completa da saúde da sua pele, cabelo e unhas.
              </p>
            </div>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="hero-card hero-card--conheca">
            <Link href="#quemsomos" className="text-d">
            <div className="hero-card-image" />
            <div className="hero-card-overlay" />
            <div className="hero-card-content">
              <p className="hero-card-tag">Exclusividade</p>
              <h2 className="hero-card-title">Conheça a gente</h2>
              <p className="hero-card-text">
                Um ambiente acolhedor, discreto e pensado nos detalhes.
              </p>
            </div>
            </Link>
          </div>
        </div>

        <div className="hero-content-layer">
          <div className="hero-content-inner">
            <div className="hero-content-box">
              <p className="hero-badge">Dermatologia de Alta Performance</p>
              <h1 className="hero-title">
                Pele saudável, natural e sofisticada.
              </h1>
              <p className="hero-text">
                Protocolos exclusivos, tecnologia avançada e atendimento
                personalizado para quem busca resultados delicados e refinados.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary">Agendar consulta</button>
                <button className="btn btn-outline">Ver procedimentos</button>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-gradient" />
      </section>

      {/* CONTEÚDO PRINCIPAL */}

      <div className="page-content">
        <div className="hero-content-layer2">
          <div className="hero-content-inner2">
            <div className="hero-content-box2">
              <p className="hero-badge">Dermatologia de Alta Performance</p>
              <h1 className="hero-title">
                Pele saudável, natural e sofisticada.
              </h1>
              <p className="hero-text">
                Protocolos exclusivos, tecnologia avançada e atendimento
                personalizado para quem busca resultados delicados e refinados.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary">Agendar consulta</button>
                <button className="btn btn-outline">Ver procedimentos</button>
              </div>
            </div>
          </div>
        </div>
        {/* SECTION 2 - TESTEMUNHOS */}
        <section className="section section--testimonials">
          <div className="section-header">
            <div className="section-header-text">
              <p className="section-kicker">Resultados Reais</p>
              <h2 className="section-title">Histórias de transformação.</h2>
            </div>
            <p className="section-subtitle">
              Cada protocolo é pensado para o seu perfil de pele, com foco em
              resultado, segurança e naturalidade.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <article key={t.name} className="testimonial-card card-soft">
                <div className="testimonial-images">
                  <div className="testimonial-image-block">
                    <div
                      className="testimonial-image"
                      style={{
                        backgroundImage: `url('${t.beforeImg}')`,
                      }}
                    />
                    <p className="testimonial-label">Antes</p>
                  </div>
                  <div className="testimonial-image-block">
                    <div
                      className="testimonial-image"
                      style={{
                        backgroundImage: `url('${t.afterImg}')`,
                      }}
                    />
                    <p className="testimonial-label">Depois</p>
                  </div>
                </div>
                <p className="testimonial-procedure">{t.procedure}</p>
                <p className="testimonial-text">“{t.text}”</p>
                <p className="testimonial-name">{t.name}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION 3 - PROCEDIMENTOS (SLIDER) */}
        <section className="section section--procedures" id="procedimentos">
          <div className="section-header">
            <div className="section-header-text">
              <p className="section-kicker">Nossos Procedimentos</p>
              <h2 className="section-title">
                Protocolos exclusivos para cada pele.
              </h2>
            </div>
            <div className="procedures-controls">
              <button
                type="button"
                className="slider-button"
                onClick={() => scrollProcedures("left")}
              >
                ←
              </button>
              <button
                type="button"
                className="slider-button"
                onClick={() => scrollProcedures("right")}
              >
                →
              </button>
            </div>
          </div>

          <div ref={proceduresRef} className="procedures-slider">
            {procedures.map((p) => (
              <div key={p.name} className="procedure-card card-soft">
                <div
                  className="procedure-image"
                  style={{ backgroundImage: `url('${p.image}')` }}
                />
                <h3 className="procedure-title">{p.name}</h3>
                <p className="procedure-text">{p.description}</p>
                <button className="btn btn-primary btn-small">
                  Ver detalhes
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4 - CLÍNICA + VÍDEO */}
        <section className="section section--clinic" id="quemsomos">
          <div className="section-two-column">
            <div className="clinic-text">
              <p className="section-kicker">A Clínica</p>
              <h2 className="section-title">
                Um espaço pensado para acolher e cuidar.
              </h2>
              <p className="section-body">
                Cada ambiente foi projetado para transmitir conforto, privacidade
                e sofisticação. Unimos tecnologia de ponta a uma experiência
                sensorial leve, com foco na sua jornada de autocuidado.
              </p>
              <p className="section-body">
                Do primeiro contato ao pós-procedimento, nossa equipe acompanha
                de perto cada etapa, garantindo segurança e resultados
                consistentes.
              </p>
            </div>

            <div className="clinic-video">
              <div className="clinic-video-frame">
                <video
                  className="clinic-video-element"
                  src="/videos/apresentacao-clinica.mp4"
                  controls
                  poster="/images/video-poster.jpg"
                >
                  Seu navegador não suporta vídeo.
                </video>
                <div className="clinic-video-overlay" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 - CONSULTA + FORM + MAPA */}
        <section className="section section--consultation" id="consulta">
          <div className="section-two-column">
            <div className="consultation-text">
              <p className="section-kicker">Consulta Dermatológica</p>
              <h2 className="section-title">
                Avaliação completa e personalizada.
              </h2>
              <p className="section-body">
                Na consulta dermatológica, analisamos de forma detalhada a saúde
                da sua pele, histórico clínico, rotina de cuidados e objetivos
                estéticos. Dessa forma, construímos um plano de tratamento sob
                medida para você.
              </p>
              <p className="section-body">
                Além da avaliação clínica, orientamos sobre rotina domiciliar,
                prevenção de sinais de envelhecimento, manejo de acne, manchas,
                queda de cabelo e outras condições dermatológicas.
              </p>

              <form className="consultation-form card-soft">
                <div className="form-group">
                  <label className="form-label">Nome completo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Digite seu nome"
                  />
                </div>

                <div className="form-row form-row--two-col">
                  <div className="form-group">
                    <label className="form-label">E-mail</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="seuemail@exemplo.com"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Telefone / WhatsApp</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div className="form-row form-row--two-col">
                  <div className="form-group">
                    <label className="form-label">Data desejada</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Período preferencial</label>
                    <select className="form-control">
                      <option>Manhã</option>
                      <option>Tarde</option>
                      <option>Noite</option>
                      <option>Indiferente</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Motivo da consulta</label>
                  <textarea
                    className="form-control form-control--textarea"
                    placeholder="Conte brevemente o que você deseja tratar ou avaliar."
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Solicitar agendamento
                </button>
                <p className="form-helper">
                  Entraremos em contato para confirmar a disponibilidade de
                  horário.
                </p>
              </form>
            </div>

            <div className="consultation-location">
              <div className="location-card card-soft">
                <p className="section-kicker">Localização</p>
                <h3 className="location-title">Onde estamos</h3>
                <p className="location-text">
                  Rua Exemplo, 123 - Bairro Nobre, Cidade - UF
                </p>
              </div>
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb="
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da clínica"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 - NEWSLETTER + FAQ */}
        <section className="section section--newsletter">
          <div className="newsletter-layout">
            <div className="newsletter card-soft">
              <p className="section-kicker">Newsletter</p>
              <h2 className="section-title">
                Fique por dentro das novidades.
              </h2>
              <p className="section-body">
                Receba conteúdos sobre cuidados com a pele, novidades em
                procedimentos e condições exclusivas para pacientes.
              </p>

              <form className="newsletter-form">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="seuemail@exemplo.com"
                />
                <button type="submit" className="btn btn-primary">
                  Assinar
                </button>
              </form>
              <p className="form-helper">
                Sem spam. Enviaremos apenas conteúdos relevantes para você.
              </p>
            </div>

            <div className="faq">
              <p className="section-kicker">FAQ</p>
              <h2 className="section-title">Perguntas frequentes.</h2>
              <div className="faq-list">
                {faqItems.map((item, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div key={item.question} className="faq-item">
                      <button
                        type="button"
                        className="faq-header"
                        onClick={() =>
                          setOpenFaqIndex(isOpen ? null : index)
                        }
                      >
                        <span className="faq-question">
                          {item.question}
                        </span>
                        <span className="faq-toggle">
                          {isOpen ? "–" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="faq-answer">
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-inner">
            <p>
              © {new Date().getFullYear()} Lumière Derma · Dermatologia
              Avançada.
            </p>
            <p className="footer-note">
              Resultados podem variar de acordo com a avaliação individual de
              cada paciente. Consulte sempre sua dermatologista.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
