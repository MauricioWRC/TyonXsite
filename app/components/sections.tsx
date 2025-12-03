// components/sections.tsx

export function HeroSection() {
  return (
    <section className="section section-hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <span className="hero-tag">Sites, automações e performance</span>
          <h1>
            Tecnologia que coloca <span className="hero-highlight">o seu negócio no automático</span>
          </h1>
          <p className="hero-subtitle">
            Criamos sites e fluxos de automação focados em conversão, atendimento e escala —
            para sua empresa vender mais enquanto você foca na estratégia.
          </p>

          <div className="hero-actions">
            <a href="#contato" className="btn btn-primary">
              Agendar diagnóstico gratuito
            </a>
            <a href="#portfolio" className="btn btn-secondary">
              Ver projetos e resultados
            </a>
          </div>

          <div className="hero-badges">
            <span>✔ Foco total em conversão</span>
            <span>✔ Integrações e automações inteligentes</span>
            <span>✔ Estrutura pronta para escalar</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <p className="hero-card-label">Painel em tempo real</p>
            <h3>Seu funil inteiro em um só lugar</h3>
            <p className="hero-card-text">
              Monitoramos leads, agendamentos, vendas e automações em um painel visual
              para você acompanhar a performance sem esforço.
            </p>
            <ul className="hero-metrics">
              <li>
                <strong>+120%</strong>
                <span>Aumento médio de leads</span>
              </li>
              <li>
                <strong>-35%</strong>
                <span>Tempo de resposta</span>
              </li>
              <li>
                <strong>24/7</strong>
                <span>Automação ativa</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SobreSection() {
  return (
    <section className="section section-sobre" id="sobre">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Sobre nós</span>
          <h2>Somos o time por trás do seu crescimento digital</h2>
          <p className="section-subtitle">
            Unimos design, tecnologia e automação para transformar seu site em um ativo de vendas.
            Nada de páginas bonitas que não convertem — nossa obsessão é performance.
          </p>
        </div>

        <div className="sobre-grid">
          <div className="sobre-text">
            <p>
              Desenvolvemos sites em alta performance, com arquitetura pensada para tráfego pago,
              SEO e automações de atendimento. Da primeira visita ao fechamento, cada passo é
              desenhado para reduzir fricção e aumentar conversão.
            </p>
            <p>
              Atuamos como parceiro estratégico: entendemos o modelo de negócio, mapeamos o funil,
              definimos fluxos de automação e entregamos uma base digital pronta para escalar.
            </p>
          </div>

          <div className="sobre-stats">
            <div className="stat-card">
              <strong>+50</strong>
              <span>Projetos entregues</span>
              <p>Sites, landing pages e estruturas completas de funil.</p>
            </div>
            <div className="stat-card">
              <strong>+120%</strong>
              <span>Média de aumento de leads</span>
              <p>Após reestruturação de site e automações.</p>
            </div>
            <div className="stat-card">
              <strong>99%</strong>
              <span>Clientes satisfeitos</span>
              <p>Relacionamento próximo e suporte consultivo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortfolioSection() {
  return (
    <section className="section section-portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfólio</span>
          <h2>Projetos que conectam tecnologia, marca e resultado</h2>
          <p className="section-subtitle">
            Uma amostra de como estruturamos sites e automações para negócios que precisam de
            previsibilidade e escala.
          </p>
        </div>

        <div className="portfolio-grid">
          <PortfolioCard
            title="Site institucional estratégico"
            description="Arquitetura focada em geração de leads, páginas enxutas e CTAs claros — pronto para tráfego pago."
            tags={["Next.js", "SEO", "Alta conversão"]}
            href="/projetos/site-institucional"
          />
          <PortfolioCard
            title="Estrutura completa para lançamentos"
            description="Landing pages, páginas de oferta, thank you e automações conectadas no CRM da marca."
            tags={["Lançamentos", "Automação", "Funil completo"]}
            href="/projetos/estrutura-lancamentos"
          />
          <PortfolioCard
            title="Funil automatizado de agendamento"
            description="Do anúncio ao agendamento confirmado, com lembretes automáticos e follow-up inteligente."
            tags={["Agendamentos", "WhatsApp", "Fluxos automáticos"]}
            href="/projetos/funil-agendamentos"
          />
        </div>
      </div>
    </section>
  );
}

type PortfolioCardProps = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

function PortfolioCard({ title, description, tags, href }: PortfolioCardProps) {
  return (
    <article className="portfolio-card">
      <div className="portfolio-card-inner">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="portfolio-tags">
          {tags.map((tag) => (
            <span key={tag} className="portfolio-tag">
              {tag}
            </span>
          ))}
        </div>
        <a href={href} className="portfolio-link">
          Ver case em detalhes →
        </a>
      </div>
    </article>
  );
}

export function ClientesSection() {
  return (
    <section className="section section-clientes" id="clientes">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Prova social</span>
          <h2>Clientes que confiaram e aprovaram o resultado</h2>
          <p className="section-subtitle">
            Atuamos com empresas que levam o digital a sério — de negócios locais a marcas em
            expansão nacional.
          </p>
        </div>

        <div className="clientes-grid">
          <div className="cliente-card">
            <p className="cliente-depoimento">
              “Depois do novo site e das automações, nosso time parou de responder tudo
              manualmente no WhatsApp. A agenda encheu e o atendimento ficou muito mais leve.”
            </p>
            <div className="cliente-info">
              <span className="cliente-nome">Mariana Costa</span>
              <span className="cliente-cargo">Clínica de estética • São Paulo</span>
            </div>
          </div>

          <div className="cliente-card">
            <p className="cliente-depoimento">
              “A estrutura que criaram fez o tráfego pago finalmente valer a pena. Hoje temos
              previsibilidade de leads e conseguimos escalar investimento com segurança.”
            </p>
            <div className="cliente-info">
              <span className="cliente-nome">Rafael Lima</span>
              <span className="cliente-cargo">Escritório de advocacia</span>
            </div>
          </div>

          <div className="cliente-card">
            <p className="cliente-depoimento">
              “Em poucas semanas, nosso funil estava rodando no automático. Site rápido, formulários
              integrados e automações que não quebram.”
            </p>
            <div className="cliente-info">
              <span className="cliente-nome">Ana Beatriz</span>
              <span className="cliente-cargo">Empresa de educação online</span>
            </div>
          </div>
        </div>

        <div className="clientes-logos">
          <span>+ marcas em saúde</span>
          <span>+ negócios locais em crescimento</span>
          <span>+ empresas B2B e serviços premium</span>
        </div>
      </div>
    </section>
  );
}

export function ContatoSection() {
  return (
    <section className="section section-contato" id="contato">
      <div className="container contato-grid">
        <div className="contato-text">
          <span className="section-tag">Contato</span>
          <h2>Vamos desenhar a próxima versão do seu digital?</h2>
          <p className="section-subtitle">
            Preencha o formulário ao lado com o máximo de contexto possível. Vamos analisar seu
            cenário e te responder com um plano direto ao ponto.
          </p>

          <ul className="contato-list">
            <li>Diagnóstico sem enrolação, focado em oportunidade real.</li>
            <li>Visão estratégica de site, automações e funil.</li>
            <li>Prioridades claras para os próximos 30 a 90 dias.</li>
          </ul>
        </div>

        <div className="contato-form-wrapper">
          <form className="contato-form">
            <div className="form-row">
              <label>
                Nome
                <input type="text" name="nome" placeholder="Seu nome completo" required />
              </label>
            </div>

            <div className="form-row">
              <label>
                E-mail
                <input type="email" name="email" placeholder="seuemail@empresa.com" required />
              </label>
            </div>

            <div className="form-row">
              <label>
                Empresa / Projeto
                <input type="text" name="empresa" placeholder="Nome da empresa ou projeto" />
              </label>
            </div>

            <div className="form-row">
              <label>
                Objetivo principal
                <select name="objetivo">
                  <option value="">Selecione...</option>
                  <option value="novo-site">Criar um novo site</option>
                  <option value="reestruturar-site">Reestruturar site atual</option>
                  <option value="automacoes">Implementar automações</option>
                  <option value="funil-completo">Site + funis + automações</option>
                </select>
              </label>
            </div>

            <div className="form-row">
              <label>
                Mensagem
                <textarea
                  name="mensagem"
                  rows={4}
                  placeholder="Conte em poucas linhas o momento do seu negócio e o que você quer destravar."
                />
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              Enviar e receber proposta estratégica
            </button>

            <p className="contato-note">
              Respondemos manualmente cada mensagem. Nada de respostas genéricas — você recebe uma
              visão clara do que faria sentido construir no seu caso.
            </p>
          </form>
        </div>
      </div>

      <div className="contato-footer">
        <p>
          Sua empresa não precisa de “mais um site”. Precisa de uma base digital que converse com
          o seu tráfego, com seu time e com o jeito que você quer crescer.
        </p>
      </div>
    </section>
  );
}