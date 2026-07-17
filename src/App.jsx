import React, { useState } from 'react';
import {
  BadgeCheck,
  CalendarCheck,
  Check,
  ChevronDown,
  Clock3,
  Flame,
  HandPlatter,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
  Utensils,
  X,
} from 'lucide-react';

const navItems = [
  { label: 'Solução', href: '#solucao' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
];

const visualAssets = {
  logo: '/logo-barao.webp',
  hero:
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1400&q=85',
  buffet:
    'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1100&q=85',
};

const problems = [
  {
    icon: Clock3,
    title: 'Falta tempo para organizar tudo',
    text: 'Você escolhe o evento. A equipe cuida do preparo, montagem e ritmo do serviço para que a festa aconteça com tranquilidade.',
  },
  {
    icon: UsersRound,
    title: 'Medo de faltar comida ou sobrar demais',
    text: 'O cardápio é pensado conforme quantidade de convidados, perfil da celebração e tempo de duração.',
  },
  {
    icon: ShieldCheck,
    title: 'Preocupação com qualidade e atendimento',
    text: 'Carnes, acompanhamentos e operação seguem um planejamento claro para entregar uma experiência consistente.',
  },
];

const benefits = [
  'Evento mais leve para quem recebe',
  'Churrasco servido no ponto certo',
  'Buffet completo com acompanhamentos',
  'Equipe preparada para festas e confraternizações',
  'Orçamento ajustado ao tamanho do evento',
  'Apresentação bonita, limpa e organizada',
];

const steps = [
  {
    icon: MessageCircle,
    title: 'Conte sobre o evento',
    text: 'Número de convidados, local, data, horário e estilo de celebração.',
  },
  {
    icon: Utensils,
    title: 'Monte o cardápio',
    text: 'Cortes, acompanhamentos e serviço são definidos de acordo com a ocasião.',
  },
  {
    icon: CalendarCheck,
    title: 'Reserve a data',
    text: 'Combinamos os detalhes finais e alinhamos a chegada da equipe.',
  },
  {
    icon: Flame,
    title: 'Aproveite a festa',
    text: 'O churrasco acontece no evento com preparo, buffet e atendimento no fluxo combinado.',
  },
];

const differentiators = [
  {
    icon: Flame,
    title: 'Churrasco com presença',
    text: 'Uma experiência que vira parte da festa, não apenas um item de alimentação.',
  },
  {
    icon: HandPlatter,
    title: 'Buffet completo',
    text: 'Carnes, guarnições e montagem pensadas para servir bem diferentes perfis de convidados.',
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento consultivo',
    text: 'Você recebe orientação para escolher quantidades, formato e cardápio sem complicação.',
  },
  {
    icon: Sparkles,
    title: 'Visual premium',
    text: 'Apresentação sóbria e elegante, adequada para encontros familiares, empresas e celebrações.',
  },
];

const testimonials = [
  {
    name: 'Mariana e Rafael',
    role: 'Casamento',
    text: 'O Barão da Carne fez parte de um dos dias mais especiais da nossa vida. A comida estava maravilhosa, tudo foi servido com muito cuidado e recebemos muitos elogios dos convidados.',
  },
  {
    name: 'Juliana Martins',
    role: 'Festa de aniversário',
    text: 'Foi tudo muito tranquilo do início ao fim. A equipe cuidou de cada detalhe, a carne estava deliciosa e conseguimos aproveitar a festa sem preocupação. Com certeza contrataríamos novamente.',
  },
  {
    name: 'Carlos Henrique',
    role: 'Confraternização da empresa',
    text: 'Atendimento excelente, equipe organizada e comida de muita qualidade. Todos gostaram bastante, principalmente do sabor das carnes e da atenção durante o evento.',
  },
];

const faqs = [
  {
    question: 'O Barão da Carne atende quais tipos de evento?',
    answer:
      'Festas de aniversário, confraternizações, eventos corporativos, encontros familiares e celebrações em geral. O formato é ajustado ao local, horário e quantidade de pessoas.',
  },
  {
    question: 'O buffet inclui acompanhamentos?',
    answer:
      'Sim. A proposta é oferecer churrasco e buffet completo. Os itens finais devem ser definidos no orçamento, conforme o perfil do evento.',
  },
  {
    question: 'Com quanto tempo devo solicitar orçamento?',
    answer:
      'Quanto antes, melhor para garantir agenda e planejar o cardápio. Mesmo assim, vale entrar em contato para verificar disponibilidade.',
  },
  {
    question: 'Vocês levam equipe para preparar e servir?',
    answer:
      'Equipe completa de churrasqueiro, auxiliares e garçons para servir, montar e organizar o buffet. O cliente não precisa se preocupar com operação do evento.',
  },
  {
    question: 'Como o orçamento é calculado?',
    answer:
      'Normalmente depende de convidados, cardápio, duração, endereço e estrutura necessária. Preencha o formulário de orçamento, com o máximo de informações possível, para receber uma proposta personalizada.',
  },
];

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Benefits />
        <HowItWorks />
        <Differentials />
        <SocialProof />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Barão da Carne - início">
        <img src={visualAssets.logo} alt="Logo Barão da Carne" />
        <span>Barão da Carne</span>
      </a>

      <nav className={`site-nav ${isOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <Button href="#orcamento" variant="primary" onClick={closeMenu}>
          Solicitar orçamento
        </Button>
      </nav>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-content reveal">
        <span className="eyebrow">
          <Flame aria-hidden="true" />
          Churrasco e buffet para eventos
        </span>
        <h1>Seu evento com churrasco de verdade, sem preocupação na cozinha.</h1>
        <p>
          O Barão da Carne prepara carnes, acompanhamentos e serviço para festas,
          confraternizações e encontros especiais com organização do início ao fim.
        </p>
        <div className="hero-actions">
          <Button href="#orcamento" variant="primary">
            Solicitar orçamento
          </Button>
          <Button href="#como-funciona" variant="secondary">
            Ver como funciona
          </Button>
        </div>
        <div className="proof-strip" aria-label="Prova social pendente de dados reais">
          <div>
            <strong>Dados reais a inserir</strong>
            <span>Eventos atendidos, avaliações e cidades</span>
          </div>
          <div className="rating" aria-label="Avaliação placeholder">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} fill="currentColor" aria-hidden="true" />
            ))}
          </div>
        </div>
      </div>

      <div className="hero-visual reveal" style={{ '--delay': '120ms' }}>
        <img src={visualAssets.hero} alt="Churrasco com carnes assadas e acompanhamentos" />
        <div className="hero-badge">
          <BadgeCheck aria-hidden="true" />
          <span>Buffet completo para celebrar com calma</span>
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="section-shell standard-section" id="solucao">
      <div className="problem-intro">
        <div className="section-heading reveal">
          <span className="eyebrow">Problema e solução</span>
          <h2>A festa não precisa virar uma lista infinita de preocupações.</h2>
          <p>
            O serviço foi pensado para quem quer receber bem, servir comida de qualidade
            e continuar presente no próprio evento.
          </p>
        </div>
        <div className="brand-showcase reveal" style={{ '--delay': '120ms' }}>
          <img src={visualAssets.logo} alt="Logo Barão da Carne em destaque" />
        </div>
      </div>
      <div className="problem-grid">
        {problems.map((item) => (
          <InfoCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="benefits-band" id="beneficios">
      <div className="section-shell benefits-layout">
        <div className="benefits-copy reveal">
          <span className="eyebrow">Benefícios</span>
          <h2>Mais tempo com os convidados. Menos improviso nos bastidores.</h2>
          <p>
            Churrasco bem planejado ajuda o evento a fluir: a comida chega no tempo
            certo, o buffet fica organizado e você não precisa coordenar cada detalhe.
          </p>
        </div>
        <div className="benefit-list reveal" style={{ '--delay': '120ms' }}>
          {benefits.map((benefit) => (
            <div className="benefit-item" key={benefit}>
              <Check aria-hidden="true" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <Section
      id="como-funciona"
      eyebrow="Como funciona"
      title="Da primeira conversa ao último prato servido."
      description="Um processo simples para transformar as informações do seu evento em uma proposta clara."
    >
      <div className="steps-grid">
        {steps.map((step, index) => (
          <article className="step-card reveal" style={{ '--delay': `${index * 80}ms` }} key={step.title}>
            <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
            <step.icon aria-hidden="true" />
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Differentials() {
  return (
    <section className="differentials-band">
      <div className="section-shell split-layout">
        <div className="image-panel reveal">
          <img src={visualAssets.buffet} alt="Mesa de churrasco com cortes e acompanhamentos" />
        </div>
        <div className="split-copy reveal" style={{ '--delay': '120ms' }}>
          <span className="eyebrow">Diferenciais</span>
          <h2>Um buffet com cara de evento bem cuidado.</h2>
          <p>
            A proposta combina sabor, montagem e operação para que o churrasco seja
            lembrado pelo convidado e simples para quem contrata.
          </p>
          <div className="differential-grid">
            {differentiators.map((item) => (
              <InfoCard key={item.title} {...item} compact />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <Section
      id="depoimentos"
      eyebrow="Prova social"
      title="Depoimentos reais vão dar o peso final para a decisão."
      description="Veja alguns comentários de clientes que já contrataram o serviço e aprovaram a experiência do churrasco completo em eventos."
    >
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card reveal" key={`${testimonial.name}-${testimonial.role}`}>
            <div className="testimonial-rating" aria-label="Avaliação de cinco estrelas">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} fill="currentColor" aria-hidden="true" />
              ))}
            </div>
            <p>"{testimonial.text}"</p>
            <div className="testimonial-author">
              <div aria-hidden="true">{testimonial.name.slice(0, 1)}</div>
              <span>
                <strong>{testimonial.name}</strong>
                {testimonial.role}
              </span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section
      id="faq"
      eyebrow="Perguntas frequentes"
      title="Respostas para decidir com mais segurança."
      description="As principais dúvidas antes de pedir um orçamento para churrasco e buffet em eventos."
    >
      <div className="faq-list">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <article className="faq-item" key={item.question}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{item.question}</span>
                <ChevronDown aria-hidden="true" />
              </button>
              <div id={`faq-answer-${index}`} className="faq-answer" hidden={!isOpen}>
                <p>{item.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="section-shell final-cta-inner reveal">
        <span className="eyebrow">Agenda e orçamento</span>
        <h2>Quer servir um churrasco completo sem assumir a operação da festa?</h2>
        <p>
          Envie os dados do evento e receba uma proposta alinhada ao número de
          convidados, cardápio desejado e estrutura do local.
        </p>
        <Button href="#orcamento" variant="primary">
          Solicitar orçamento
        </Button>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    eventType: '',
    guests: '',
    date: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (form.name.trim().length < 2) nextErrors.name = 'Informe seu nome.';
    if (form.phone.replace(/\D/g, '').length < 10) nextErrors.phone = 'Informe um telefone válido.';
    if (!form.eventType) nextErrors.eventType = 'Escolha o tipo de evento.';
    if (!form.guests || Number(form.guests) < 10) nextErrors.guests = 'Informe pelo menos 10 convidados.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
    }
  };

  return (
    <section className="contact-band" id="orcamento">
      <div className="section-shell contact-layout">
        <div className="contact-copy reveal">
          <span className="eyebrow">Solicitar orçamento</span>
          <h2>Conte o básico do evento para receber uma proposta mais precisa.</h2>
          <p>
            Quanto mais contexto, melhor o retorno: tipo de evento, convidados, data
            provável e observações sobre local ou cardápio.
          </p>
          <div className="contact-list">
            <a href="tel:+5500000000000">
              <Phone aria-hidden="true" />
              <span>Telefone a substituir</span>
            </a>
            <a href="mailto:contato@baraodacarne.com.br">
              <Mail aria-hidden="true" />
              <span>E-mail a substituir</span>
            </a>
            <span>
              <MapPin aria-hidden="true" />
              Cidade/região de atendimento a informar
            </span>
          </div>
        </div>

        <form className="quote-form reveal" style={{ '--delay': '120ms' }} onSubmit={handleSubmit} noValidate>
          <Field label="Nome" error={errors.name}>
            <input
              name="name"
              value={form.name}
              onChange={updateField}
              autoComplete="name"
              placeholder="Seu nome"
            />
          </Field>
          <Field label="Telefone/WhatsApp" error={errors.phone}>
            <input
              name="phone"
              value={form.phone}
              onChange={updateField}
              autoComplete="tel"
              inputMode="tel"
              placeholder="(00) 00000-0000"
            />
          </Field>
          <Field label="Tipo de evento" error={errors.eventType}>
            <select name="eventType" value={form.eventType} onChange={updateField}>
              <option value="">Selecione</option>
              <option>Aniversário</option>
              <option>Confraternização</option>
              <option>Evento corporativo</option>
              <option>Casamento ou noivado</option>
              <option>Outro</option>
            </select>
          </Field>
          <Field label="Convidados" error={errors.guests}>
            <input
              name="guests"
              value={form.guests}
              onChange={updateField}
              type="number"
              min="10"
              placeholder="Ex.: 80"
            />
          </Field>
          <Field label="Data prevista">
            <input name="date" value={form.date} onChange={updateField} type="date" />
          </Field>
          <Field label="Observações">
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              rows="4"
              placeholder="Local, horário, preferências de cardápio..."
            />
          </Field>
          <button className="button button-primary" type="submit">
            Enviar pedido
          </button>
          {sent && (
            <p className="form-success" role="status">
              Pedido validado. Conecte este formulário ao canal real de atendimento antes de publicar.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="brand footer-brand" href="#top" aria-label="Barão da Carne - início">
          <img src={visualAssets.logo} alt="Logo Barão da Carne" />
          <span>Barão da Carne</span>
        </a>
        <div className="footer-links" aria-label="Links institucionais">
          <a href="#solucao">Serviços</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#orcamento">Contato</a>
          <a href="#privacidade">Política de privacidade</a>
          <a href="#termos">Termos de uso</a>
        </div>
        <div className="social-links" aria-label="Redes sociais">
          <a href="https://www.instagram.com/" aria-label="Instagram">
            <Instagram aria-hidden="true" />
          </a>
          <a href="https://wa.me/5500000000000" aria-label="WhatsApp">
            <MessageCircle aria-hidden="true" />
          </a>
        </div>
      </div>
      <p>© {new Date().getFullYear()} Barão da Carne. Todos os direitos reservados.</p>
    </footer>
  );
}

function Section({ id, eyebrow, title, description, children }) {
  return (
    <section className="section-shell standard-section" id={id}>
      <div className="section-heading reveal">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </section>
  );
}

function InfoCard({ icon: Icon, title, text, compact = false }) {
  return (
    <article className={`info-card reveal ${compact ? 'is-compact' : ''}`}>
      <div className="icon-box">
        <Icon aria-hidden="true" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function Button({ href, variant, children, onClick }) {
  return (
    <a className={`button button-${variant}`} href={href} onClick={onClick}>
      {children}
    </a>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      {children}
      {error && <small>{error}</small>}
    </label>
  );
}

export default App;
