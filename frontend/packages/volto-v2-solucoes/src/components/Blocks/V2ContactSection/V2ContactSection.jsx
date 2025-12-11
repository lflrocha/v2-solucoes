// src/components/V2ContactSection.jsx
import { Image } from '@plone/volto/components';
import React, { useState } from 'react';
import './styles.less';

import { resolveImageUrl } from '../../../utils/resolveImageUrl';

const V2ContactSection = ({
  title = 'Fale com a gente',
  subtitle = 'Vamos entender seu contexto e sugerir a melhor abordagem técnica.',
  phone = '(61) 99999-9999',
  email = 'contato@v2tec.com.br',
  image,
  imageAlt = 'Imagem ilustrativa',
}) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const imageUrl = resolveImageUrl(image);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setStatusMessage('Mensagem enviada com sucesso!');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section className="v2-contact" aria-labelledby="v2-contact-title">
      <div className="v2-contact__inner conteudo-centralizado">
        {/* COLUNA ESQUERDA */}
        <div className="v2-contact__info">
          <h2 id="v2-contact-title" className="v2-contact__title">
            {title}
          </h2>

          <span className="line" aria-hidden="true" />

          {subtitle && <p className="v2-contact__subtitle">{subtitle}</p>}

          {/* Address semântico para contato */}
          <address className="v2-contact__contact-data">
            {phone && (
              <a
                href={`tel:${phone.replace(/\D/g, '')}`}
                className="v2-contact__contact-item"
              >
                {phone}
              </a>
            )}

            {email && (
              <a href={`mailto:${email}`} className="v2-contact__contact-item">
                {email}
              </a>
            )}
          </address>

          {imageUrl && (
            <div className="v2-contact__image-wrapper">
              <Image
                src={imageUrl}
                alt={imageAlt || 'Imagem ilustrativa'}
                className="v2-contact__image"
              />
            </div>
          )}
        </div>

        {/* COLUNA DIREITA – FORM */}
        <form
          className="v2-contact__form"
          onSubmit={handleSubmit}
          aria-labelledby="v2-contact-form-title"
        >
          <h3 id="v2-contact-form-title" className="sr-only">
            Envie uma mensagem
          </h3>

          <div className="v2-contact__field">
            <label htmlFor="name" className="v2-contact__label">
              Nome
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className="v2-contact__input"
              value={formState.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="v2-contact__field">
            <label htmlFor="email" className="v2-contact__label">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="v2-contact__input"
              value={formState.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="v2-contact__field v2-contact__field--full">
            <label htmlFor="message" className="v2-contact__label">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              className="v2-contact__textarea"
              rows={6}
              value={formState.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="v2-contact__actions">
            <button type="submit" className="v2-contact__button">
              Enviar
            </button>
          </div>

          {/* Mensagem acessível de status */}
          <div className="v2-contact__status" role="status" aria-live="polite">
            {statusMessage}
          </div>
        </form>
      </div>
    </section>
  );
};

export default V2ContactSection;
