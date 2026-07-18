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
import {
  contactEmailAddress,
  contactWhatsAppUrl,
  quoteRequestEmailWorkflow,
} from './services/quoteRequestEmailWorkflow';

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

const initialQuoteForm = {
  name: '',
  phone: '',
  eventType: '',
  guests: '',
  date: '',
  message: '',
};

const formatBrazilianPhone = (value) => {
  const digits = value.replace(/\D/g, '').replace(/^55(?=\d{10,11}$)/, '').slice(0, 11);

  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const formatQuoteDate = (value) => {
  const digits = value.replace(/\D/g, '').slice(0, 8);

  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;

  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
};

const problems = [
  {
    icon: Clock3,
    title: 'Falta tempo para organizar tudo',
    text: 'Você escolhe o evento em BH ou região. A equipe cuida do preparo, montagem e ritmo do serviço para que a festa aconteça com tranquilidade.',
  },
  {
    icon: UsersRound,
    title: 'Medo de faltar comida ou sobrar demais',
    text: 'O cardápio é pensado conforme quantidade de convidados, perfil da celebração e tempo de duração, sem improviso na compra das carnes.',
  },
  {
    icon: ShieldCheck,
    title: 'Preocupação com qualidade e atendimento',
    text: 'Carnes para churrasco, acompanhamentos e operação seguem um planejamento claro para entregar uma experiência consistente.',
  },
];

const benefits = [
  'Evento mais leve para quem recebe',
  'Churrasco BH servido no ponto certo',
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
      'Festas de aniversário, confraternizações, eventos corporativos, encontros familiares e celebrações em geral em Belo Horizonte e região. O formato é ajustado ao local, horário e quantidade de pessoas.',
  },
  {
    question: 'O buffet inclui acompanhamentos?',
    answer:
      'Sim. A proposta é oferecer churrasco e buffet completo. Os itens finais devem ser definidos no orçamento, conforme o perfil do evento.',
  },
  {
    question: 'Atendem quem procura carnes para churrasco em BH?',
    answer:
      'Sim. O serviço é uma alternativa para quem quer carnes para churrasco em BH já planejadas, preparadas e servidas no evento, com acompanhamentos e equipe de atendimento.',
  },
  {
    question: 'O serviço substitui comprar carnes separadas para o evento?',
    answer:
      'Para quem pesquisou casa de carnes em Belo Horizonte ou carnes para churrasco em BH para abastecer uma festa, o Barão da Carne oferece uma solução com planejamento do cardápio, preparo, buffet e equipe. A venda avulsa de carnes deve ser confirmada diretamente no contato.',
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
        <img src={visualAssets.logo} alt="Barão da Carne - churrasco e buffet em Belo Horizonte" />
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
        <h1>Churrasco em Belo Horizonte para eventos sem preocupação na cozinha.</h1>
        <p>
          O Barão da Carne prepara carnes, acompanhamentos e serviço para festas,
          confraternizações e encontros especiais em BH e região metropolitana.
        </p>
        <div className="hero-actions">
          <Button href="#orcamento" variant="primary">
            Solicitar orçamento
          </Button>
          <Button href="#como-funciona" variant="secondary">
            Ver como funciona
          </Button>
        </div>
        <div className="proof-strip" aria-label="Prova social">
          <div>
            <strong>Mais de 100 eventos realizados</strong>
            <span>Sabor, organização e cuidado para você aproveitar cada momento</span>
          </div>
          <div className="rating" aria-label="Avaliação de cinco estrelas">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} fill="currentColor" aria-hidden="true" />
            ))}
          </div>
        </div>
      </div>

      <div className="hero-visual reveal" style={{ '--delay': '120ms' }}>
        <img
          src={visualAssets.hero}
          alt="Churrasco em Belo Horizonte com carnes assadas e acompanhamentos para eventos"
          fetchPriority="high"
        />
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
            O serviço foi pensado para quem quer receber bem em Belo Horizonte, servir
            comida de qualidade e continuar presente no próprio evento.
          </p>
        </div>
        <div className="brand-showcase reveal" style={{ '--delay': '120ms' }}>
          <img
            src={visualAssets.logo}
            alt="Marca Barão da Carne BH para churrasco e buffet de eventos"
            loading="lazy"
          />
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
            Churrasco em Belo Horizonte bem planejado ajuda o evento a fluir: a comida
            chega no tempo certo, o buffet fica organizado e você não precisa coordenar
            cada detalhe.
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
          <img
            src={visualAssets.buffet}
            alt="Mesa de buffet de churrasco com cortes de carne e acompanhamentos em BH"
            loading="lazy"
          />
        </div>
        <div className="split-copy reveal" style={{ '--delay': '120ms' }}>
          <span className="eyebrow">Diferenciais</span>
          <h2>Um buffet com cara de evento bem cuidado.</h2>
          <p>
            A proposta combina sabor, montagem e operação para que o churrasco BH seja
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
      description="As principais dúvidas antes de pedir um orçamento para churrasco e buffet em Belo Horizonte."
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
          Envie os dados do evento em BH ou região e receba uma proposta alinhada ao
          número de convidados, cardápio desejado e estrutura do local.
        </p>
        <Button href="#orcamento" variant="primary">
          Solicitar orçamento
        </Button>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState(initialQuoteForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    const formatters = {
      phone: formatBrazilianPhone,
      date: formatQuoteDate,
    };

    setForm((current) => ({
      ...current,
      [name]: formatters[name] ? formatters[name](value) : value,
    }));
    setSent(false);
    setSubmitError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = quoteRequestEmailWorkflow.prepare(form);

    setErrors(result.errors);

    if (!result.ok) {
      setSent(false);
      setSubmitError('');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/quote-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        setErrors(data.errors || {});
        setSent(false);
        setSubmitError(data.message || 'Não foi possível enviar o pedido agora.');
        return;
      }

      setSent(true);
      setErrors({});
      setForm(initialQuoteForm);
    } catch {
      setSent(false);
      setSubmitError('Não foi possível enviar o pedido agora. Verifique sua conexão e tente novamente.');
    } finally {
      setIsSubmitting(false);
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
            provável, bairro/cidade em Belo Horizonte ou região e observações sobre
            local ou cardápio.
          </p>
          <div className="contact-list">
            <a href="tel:+5531988474678">
              <Phone aria-hidden="true" />
              <span>(31) 9 8847-4678</span>
            </a>
            <a href={`mailto:${contactEmailAddress}`}>
              <Mail aria-hidden="true" />
              <span>{contactEmailAddress}</span>
            </a>
            <span>
              <MapPin aria-hidden="true" />
              Belo Horizonte e região metropolitana
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
              maxLength="80"
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
              maxLength="20"
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
              max="9999"
              placeholder="Ex.: 80"
            />
          </Field>
          <Field label="Data prevista">
            <input
              name="date"
              value={form.date}
              onChange={updateField}
              autoComplete="off"
              inputMode="numeric"
              maxLength="10"
              placeholder="DD/MM/AAAA"
            />
          </Field>
          <Field label="Observações">
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              rows="4"
              maxLength="800"
              placeholder="Local, horário, preferências de cardápio..."
            />
          </Field>
          <button className="button button-primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar pedido'}
          </button>
          {submitError && (
            <p className="form-error" role="alert">
              {submitError}
            </p>
          )}
          {sent && (
            <p className="form-success" role="status">
              Pedido enviado com sucesso. Em breve entraremos em contato.
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
          <img src={visualAssets.logo} alt="Barão da Carne BH - churrasco e buffet" />
          <span>Barão da Carne</span>
        </a>
        <div className="footer-links" aria-label="Links institucionais">
          <a href="#solucao">Serviços</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#orcamento">Contato</a>
        </div>
        <div className="social-links" aria-label="Redes sociais">
          <a href="https://www.instagram.com/baraodacarne" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram aria-hidden="true" />
          </a>
          <a href={contactWhatsAppUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
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
