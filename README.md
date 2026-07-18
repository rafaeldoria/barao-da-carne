# Barão da Carne Landing Page

Landing page do Barão da Carne, feita com React e Vite.

## Como rodar

Instale as dependências:

```bash
npm install
```

Rode localmente:

```bash
npm run dev
```

Gere o build de produção:

```bash
npm run build
```

## Envio de formulário

O formulário usa Resend pela função `api/quote-request.js`.

Variáveis necessárias na Vercel:

```env
RESEND_API_KEY=
QUOTE_REQUEST_TO_EMAIL=jcabarao@gmail.com
RESEND_FROM_EMAIL=Barão da Carne <contato@mail.baraodacarne.com.br>
```
