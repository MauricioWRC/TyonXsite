"use client";
import "./styles.css";
import { useState, useEffect } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "Preciso saber programar para usar a Mileva?",
    answer:
      "Não. Tudo é configurado por interface. Você só precisa saber o que vende e como quer atender.",
  },
  {
    question: "Funciona só com WhatsApp?",
    answer:
      "A Mileva foi pensada primeiro para WhatsApp, mas pode ser estendida para outros canais conforme sua necessidade.",
  },
  {
    question: "Como treino os agentes de IA?",
    answer:
      "Você adiciona documentos, textos e exemplos de atendimento. A IA aprende com esse material e segue suas regras.",
  },
  {
    question: "Tem período de teste?",
    answer:
      "Sim, oferecemos um período de teste para você configurar seus produtos e sentir o ganho no atendimento.",
  },
];

type DemoModalProps = {
  open: boolean;
  onClose: () => void;
};

function DemoModal({ open, onClose }: DemoModalProps) {
  if (!open) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__backdrop" />
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal__close"
          onClick={onClose}
          aria-label="Fechar demo"
        >
          ×
        </button>
        <h3>Demo do painel Mileva</h3>
        <p>
          Coloque aqui um vídeo ou gravação de tela mostrando o painel:
          cadastro de produtos, criação de pacotes, descontos e agentes de IA.
        </p>
        <div className="modal__video-placeholder">
          Vídeo do dashboard aqui
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [navOpen, setNavOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const year = new Date().getFullYear();
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".js-animate");

    if (!("IntersectionObserver" in window)) {
      // fallback: se o navegador não suportar, mostra tudo
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      {/* BG global com glow */}
      <div className="hero-gradient" />

      {/* Header */}
      <header className="header">
        <div className="container header__inner">
          <div className="header__logo">
            <a href="#" className="link-div">
            <div className="logo-mark">M</div>
            <span className="logo-text">Mileva</span>
            </a>
          </div>

          <nav className="nav">
            <button
              className={`nav__toggle ${navOpen ? "nav__toggle--open" : ""}`}
              aria-label="Abrir menu"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              <span></span>
              <span></span>
            </button>
            <ul className="nav__links">
              <li>
                <a href="#features">Recursos</a>
              </li>
              <li>
                <a href="#how-it-works">Como funciona</a>
              </li>
              <li>
                <a href="#pricing">Planos</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </nav>

          <div className="header__actions">
            <a href="#pricing" className="btn btn--ghost">
              Ver planos
            </a>
            <a href="#cta" className="btn btn--primary">
              Começar agora
            </a>
          </div>
        </div>

        {/* Menu mobile */}
        {navOpen && (
          <div className="mobile-nav">
            <nav className="container mobile-nav__inner">
              <a
                href="#features"
                onClick={() => setNavOpen(false)}
              >
                Recursos
              </a>
              <a
                href="#how-it-works"
                onClick={() => setNavOpen(false)}
              >
                Como funciona
              </a>
              <a
                href="#pricing"
                onClick={() => setNavOpen(false)}
              >
                Planos
              </a>
              <a
                href="#faq"
                onClick={() => setNavOpen(false)}
              >
                FAQ
              </a>
              <div className="mobile-nav__actions">
                <a
                  href="#pricing"
                  className="btn btn--ghost"
                  onClick={() => setNavOpen(false)}
                >
                  Ver planos
                </a>
                <a
                  href="#cta"
                  className="btn btn--primary"
                  onClick={() => setNavOpen(false)}
                >
                  Começar
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="top">
          <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="hero__overlay"></div>

          <div className="container hero__content">
            <div className="hero__text">
              <span className="badge">
                Mileva • Atendimento com IA para WhatsApp
              </span>
              <h1>
                Centralize seu atendimento e deixe a IA vender por você.
              </h1>
              <p>
                A Mileva organiza produtos, pacotes e descontos em um painel
                simples, enquanto agentes de IA respondem seus clientes 24/7
                no WhatsApp.
              </p>

              <div className="hero__cta">
                <a href="#cta" className="btn btn--primary">
                  Criar minha conta
                </a>
                <button
                  className="btn btn--ghost"
                  onClick={() => setDemoOpen(true)}
                >
                  Ver demo
                </button>
              </div>

              <div className="hero__meta">
                <span>⚡ Comece em menos de 5 minutos</span>
                <span>🔒 Dados criptografados</span>
              </div>
            </div>

            <div className="hero__mockup js-animate">
              <div className="card card--glass">
                <div className="card__header">
                  <span>Chat Mileva</span>
                  <span className="card__status">
                    <span className="status-dot"></span> Ativo
                  </span>
                </div>
                <div className="chat">
                  <div className="chat__message chat__message--client">
                    Olá, queria saber mais sobre o pacote premium.
                  </div>
                  <div className="chat__message chat__message--bot">
                    Claro! Nosso pacote premium inclui 3 produtos e 15% de
                    desconto. Posso enviar o link para pagamento?
                  </div>
                  <div className="chat__message chat__message--client">
                    Pode sim 👍
                  </div>
                  <div className="chat__message chat__message--bot">
                    Perfeito! Aqui está o link seguro para finalizar seu
                    pedido.
                  </div>
                </div>
                <div className="card__footer">
                  <div className="pill">Agente IA: Mileva-Vendas</div>
                  <div className="pill pill--outline">
                    Canal: WhatsApp
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prova social */}
        <section className="section section--muted">
          <div className="container social-proof">
            <p>Empresas que já simplificam atendimento com a Mileva</p>
            <div className="social-proof__logos">
              <span>Loja Nova Era</span>
              <span>ClinMais</span>
              <span>Fit Delivery</span>
              <span>Academia Pro</span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section" id="features">
          <div className="container">
            <div className="section__header js-animate">
              <h2>Tudo o que você precisa em um só painel.</h2>
              <p>
                Atendimento, produtos, pacotes, descontos e agentes de IA
                trabalhando juntos, sem fricção.
              </p>
            </div>

            <div className="features__grid">
              <article className="feature-card js-animate">
                <h3>Centralização de atendimento</h3>
                <p>
                  Conecte seu WhatsApp e concentre conversas, históricos e
                  tickets em um único lugar.
                </p>
              </article>

              <article className="feature-card js-animate">
                <h3>Gestão de produtos e pacotes</h3>
                <p>
                  Cadastre produtos, crie pacotes e combos em segundos, com
                  controle de preços e disponibilidade.
                </p>
              </article>

              <article className="feature-card js-animate">
                <h3>Descontos inteligentes</h3>
                <p>
                  Configure descontos específicos por produto, pacote ou
                  campanha sem precisar de planilha.
                </p>
              </article>

              <article className="feature-card js-animate">
                <h3>Agentes de IA personalizados</h3>
                <p>
                  Treine agentes com o seu conteúdo, tom de voz e políticas e
                  acompanhe tudo em tempo real.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="section section--muted" id="how-it-works">
          <div className="container">
            <div className="section__header js-animate">
              <h2>Como funciona?</h2>
              <p>Em três passos você tira o caos do atendimento.</p>
            </div>

            <div className="steps">
              <div className="step js-animate">
                <span className="step__number">1</span>
                <h3>Conecte seu canal</h3>
                <p>Conecte seu WhatsApp e outros canais suportados.</p>
              </div>
              <div className="step js-animate">
                <span className="step__number">2</span>
                <h3>Cadastre produtos e pacotes</h3>
                <p>Organize tudo o que você vende em um só lugar.</p>
              </div>
              <div className="step js-animate">
                <span className="step__number">3</span>
                <h3>Ative seus agentes de IA</h3>
                <p>
                  Configure agentes treinados para responder e vender por
                  você.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Planos */}
        <section className="section" id="pricing">
          <div className="container">
            <div className="section__header js-animate">
              <h2>Planos simples, sem pegadinha.</h2>
              <p>Escolha o plano que faz sentido hoje e mude quando precisar.</p>
            </div>

            <div className="pricing">
              <div className="pricing__card js-animate">
                <div className="pricing__badge">Início</div>
                <h3>Starter</h3>
                <p className="pricing__price">R$ 79/mês</p>
                <ul>
                  <li>1 agente de IA</li>
                  <li>Até 2 atendentes humanos</li>
                  <li>Até 50 produtos</li>
                  <li>Suporte por e-mail</li>
                </ul>
                <a href="#cta" className="btn btn--ghost">
                  Começar no Starter
                </a>
              </div>

              <div className="pricing__card pricing__card--highlight js-animate">
                <div className="pricing__badge pricing__badge--highlight">
                  Mais usado
                </div>
                <h3>Growth</h3>
                <p className="pricing__price">R$ 149/mês</p>
                <ul>
                  <li>3 agentes de IA</li>
                  <li>Até 5 atendentes humanos</li>
                  <li>Produtos e pacotes ilimitados</li>
                  <li>Suporte prioritário</li>
                </ul>
                <a href="#cta" className="btn btn--primary">
                  Escolher Growth
                </a>
              </div>

              <div className="pricing__card js-animate">
                <div className="pricing__badge">Escala</div>
                <h3>Enterprise</h3>
                <p className="pricing__price">Sob consulta</p>
                <ul>
                  <li>Agentes de IA ilimitados</li>
                  <li>Equipe dedicada</li>
                  <li>SLAs personalizados</li>
                  <li>Integrações avançadas</li>
                </ul>
                <a href="#cta" className="btn btn--ghost">
                  Falar com vendas
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--muted" id="faq">
          <div className="container">
            <div className="section__header js-animate">
              <h2>Dúvidas frequentes</h2>
              <p>Algumas respostas rápidas antes de você criar sua conta.</p>
            </div>

            <div className="faq">
              {faqItems.map((item, index) => {
                const open = openFaqIndex === index;
                return (
                  <div className="faq__item js-animate" key={item.question}>
                    <button
                      className="faq__question"
                      onClick={() =>
                        setOpenFaqIndex(open ? null : index)
                      }
                    >
                      <span>{item.question}</span>
                      <span className="faq__icon">
                        {open ? "−" : "+"}
                      </span>
                    </button>
                    {open && (
                      <div className="faq__answer">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="section section--cta" id="cta">
          <div className="container cta">
            <div className="cta__text js-animate">
              <h2>Pronto para organizar seu atendimento de vez?</h2>
              <p>
                Crie sua conta na Mileva e veja como é ter IA cuidando do
                básico enquanto você foca no que importa.
              </p>
            </div>
            <div className="cta__actions js-animate">
              <a href="#" className="btn btn--primary">
                Criar conta grátis
              </a>
              <span className="cta__hint">
                Não pedimos cartão no teste.
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__left">
            <div className="header__logo">
              <div className="logo-mark">M</div>
              <span className="logo-text">Mileva</span>
            </div>
            <p>Atendimento com IA, do seu jeito.</p>
          </div>
          <div className="footer__right">
            <span>
              © {year} Mileva. Todos os direitos reservados.
            </span>
          </div>
        </div>
      </footer>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
