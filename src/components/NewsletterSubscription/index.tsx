import { ChangeEvent, FormEvent, useState } from 'react';
import { Container, Content, Form, FormContent, TextContent } from './styles';
import { sendConfirmationEmail } from '../../services/Newsletter';

interface FormProps {
  email: string;
}

export function NewsletterSubscription() {
  const [values, setValues] = useState<FormProps>({ email: '' });
  const [errors, setErrors] = useState<FormProps>({ email: '' });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.getAttribute('name');
    const { value } = event.target;
    setValues({
      ...values,
      [fieldName as string]: value,
    });
  };

  const validateValues = (values: FormProps) => {
    const errors: FormProps = {
      email: '',
    };

    if (!values.email.includes('@') || values.email.length === 0) {
      errors.email = 'Por favor, insira um e-mail válido';
    }

    return errors;
  };

  const isValid = () => {
    const errorsObj = validateValues(values);
    setErrors(errorsObj);

    return Object.values(errorsObj).every((error) => error === '');
  };

  const handleSubtmit = (event: FormEvent) => {
    event?.preventDefault();

    if (isValid()) {
      sendConfirmationEmail(values.email)
        .then(() => {
          alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail: ${values.email}`);
        })
        .catch(() => {
          console.log('Não foi possível enviar o email');
        });
    }
  };

  return (
    <Container>
      <Content>
        <TextContent>
          <h1>
            Sua casa com as
            <br />
            <strong>melhores plantas</strong>
          </h1>
          <p>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
            e assine nossa newsletter para saber das novidades da marca.
          </p>
        </TextContent>

        <Form onSubmit={(e: FormEvent<Element>) => handleSubtmit(e)}>
          <FormContent>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                handleChange(e);
                setErrors({ ...errors, email: '' });
              }}
              placeholder="Insira seu e-mail"
            />

            <button type="submit">Assinar Newsletter</button>
          </FormContent>
          {errors.email && <span>{errors.email}</span>}
        </Form>
      </Content>
    </Container>
  );
}
