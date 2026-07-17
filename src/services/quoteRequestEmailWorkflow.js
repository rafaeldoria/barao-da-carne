export const contactEmailAddress = 'jcabarao@gmail.com';

const whatsappNumber = '5531988474678';

const safeString = (value) => (value == null ? '' : String(value));

class QuoteRequestNormalizer {
  normalize(form = {}) {
    const source = form && typeof form === 'object' ? form : {};
    const phone = safeString(source.phone).trim();
    const phoneDigits = phone.replace(/\D/g, '');
    const guests = Number(source.guests);

    return {
      name: safeString(source.name).trim(),
      phone,
      phoneDigits,
      whatsappUrl: phoneDigits ? `https://wa.me/55${phoneDigits.replace(/^55/, '')}` : '',
      eventType: safeString(source.eventType).trim(),
      guests: Number.isFinite(guests) ? guests : 0,
      date: safeString(source.date),
      message: safeString(source.message).trim(),
    };
  }
}

class QuoteRequestValidator {
  validate(request) {
    const errors = {};

    if (request.name.length < 2) errors.name = 'Informe seu nome.';
    if (request.phoneDigits.length < 10) errors.phone = 'Informe um telefone válido.';
    if (!request.eventType) errors.eventType = 'Escolha o tipo de evento.';
    if (request.guests < 10) errors.guests = 'Informe pelo menos 10 convidados.';

    return errors;
  }
}

class QuoteEmailTemplate {
  build(request) {
    const eventDate = request.date || 'Não informada';
    const notes = request.message || 'Sem observações adicionais.';

    const subject = `Novo pedido de orçamento - ${request.eventType} - ${request.name}`;
    const text = [
      'Novo pedido de orçamento pelo site Barão da Carne',
      '',
      `Nome: ${request.name}`,
      `Telefone/WhatsApp: ${request.phone}`,
      `Link WhatsApp: ${request.whatsappUrl || 'Não disponível'}`,
      `Tipo de evento: ${request.eventType}`,
      `Convidados: ${request.guests}`,
      `Data prevista: ${eventDate}`,
      '',
      'Observações:',
      notes,
    ].join('\n');

    const html = `
      <h2>Novo pedido de orçamento pelo site Barão da Carne</h2>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif">
        <tr><td><strong>Nome</strong></td><td>${this.escape(request.name)}</td></tr>
        <tr><td><strong>Telefone/WhatsApp</strong></td><td>${this.escape(request.phone)}</td></tr>
        <tr><td><strong>Link WhatsApp</strong></td><td>${this.escape(request.whatsappUrl || 'Não disponível')}</td></tr>
        <tr><td><strong>Tipo de evento</strong></td><td>${this.escape(request.eventType)}</td></tr>
        <tr><td><strong>Convidados</strong></td><td>${request.guests}</td></tr>
        <tr><td><strong>Data prevista</strong></td><td>${this.escape(eventDate)}</td></tr>
      </table>
      <h3>Observações</h3>
      <p>${this.escape(notes).replace(/\n/g, '<br />')}</p>
    `;

    return { subject, text, html };
  }

  escape(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

class QuoteEmailDraftFactory {
  constructor(template) {
    this.template = template;
  }

  create(request) {
    const content = this.template.build(request);

    return {
      to: contactEmailAddress,
      replyTo: null,
      source: 'barao-da-carne-landing-page',
      createdAt: new Date().toISOString(),
      payload: request,
      ...content,
    };
  }
}

class QuoteRequestEmailWorkflow {
  constructor({ normalizer, validator, draftFactory }) {
    this.normalizer = normalizer;
    this.validator = validator;
    this.draftFactory = draftFactory;
  }

  prepare(form) {
    const request = this.normalizer.normalize(form);
    const errors = this.validator.validate(request);

    if (Object.keys(errors).length > 0) {
      return { ok: false, errors, emailDraft: null };
    }

    return {
      ok: true,
      errors: {},
      emailDraft: this.draftFactory.create(request),
    };
  }
}

const quoteEmailTemplate = new QuoteEmailTemplate();
const quoteEmailDraftFactory = new QuoteEmailDraftFactory(quoteEmailTemplate);

export const quoteRequestEmailWorkflow = new QuoteRequestEmailWorkflow({
  normalizer: new QuoteRequestNormalizer(),
  validator: new QuoteRequestValidator(),
  draftFactory: quoteEmailDraftFactory,
});

export const contactWhatsAppUrl = `https://wa.me/${whatsappNumber}`;
