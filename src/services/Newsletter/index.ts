/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { MailDataRequired, setApiKey, send } from '@sendgrid/mail';

const apiKey = import.meta.env.VITE_SENDGRID_API_KEY;
const emailFrom = import.meta.env.VITE_EMAIL_FROM;

setApiKey(apiKey);

export const sendConfirmationEmail = async (to: string) => {
  const message: MailDataRequired = {
    to,
    from: emailFrom,
    subject: 'Confirmação de Cadastro na Newsletter',
    text: 'Seu cadastro na newsletter foi confirmado.',
    html: '<p>Seu cadastro na newsletter foi confirmado.</p>',
  };

  try {
    await send(message);
    console.log('Email enviado com sucesso!');
  } catch (error) {
    console.log('Erro ao enviar o email', error);
  }
};
