import { Resend } from 'resend';
import {
  contactEmailAddress,
  quoteRequestEmailWorkflow,
} from '../src/services/quoteRequestEmailWorkflow.js';

const getRecipientEmail = () => process.env.QUOTE_REQUEST_TO_EMAIL || contactEmailAddress;

const getSenderEmail = () => process.env.RESEND_FROM_EMAIL || 'Barão da Carne <onboarding@resend.dev>';

const buildEmailPayload = (emailDraft) => ({
  from: getSenderEmail(),
  to: getRecipientEmail(),
  subject: emailDraft.subject,
  html: emailDraft.html,
  text: emailDraft.text,
});

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ ok: false, message: 'Método não permitido.' });
  }

  if (!process.env.RESEND_API_KEY) {
    return response.status(500).json({
      ok: false,
      message: 'Serviço de e-mail não configurado. Defina RESEND_API_KEY na Vercel.',
    });
  }

  const result = quoteRequestEmailWorkflow.prepare(request.body || {});

  if (!result.ok) {
    return response.status(400).json({
      ok: false,
      message: 'Revise os campos destacados.',
      errors: result.errors,
    });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const emailPayload = buildEmailPayload(result.emailDraft);
  const { data, error } = await resend.emails.send(emailPayload);

  if (error) {
    return response.status(502).json({
      ok: false,
      message: 'Não foi possível enviar o pedido agora. Tente novamente em instantes.',
    });
  }

  return response.status(200).json({
    ok: true,
    id: data?.id,
    message: 'Pedido enviado com sucesso.',
  });
}
