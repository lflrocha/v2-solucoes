import React from 'react';
import Image from '@plone/volto/components/theme/Image/Image';
import { flattenToAppURL } from '@plone/volto/helpers';
import { resolveImageUrl } from '../../../utils/resolveImageUrl';
import './styles.less';

const getImageSrc = (img) => {
  if (!img) return '';
  try {
    const resolved = resolveImageUrl(img);
    return resolved ? flattenToAppURL(resolved) : '';
  } catch {
    return '';
  }
};

const ClientsPartnersView = ({ data }) => {
  const clients = Array.isArray(data?.clientsLogos) ? data.clientsLogos : [];
  const partners = Array.isArray(data?.partnersLogos) ? data.partnersLogos : [];

  const safeClients = clients.filter((i) => i?.image);
  const infiniteClients = [...safeClients, ...safeClients];

  const safePartners = partners.filter((i) => i?.image);

  const partnersParagraphs = (data?.partnersText || '')
    .split('\n')
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <section
      className="v2-clients-partners"
      aria-labelledby="clients-section-title"
    >
      <div className="v2-clients conteudo-centralizado">
        {data?.clientsTitle && (
          <div className="v2-clients__title-wrapper">
            <h2 id="clients-section-title" className="v2-clients__title">
              {data.clientsTitle}
            </h2>
            <span className="line" aria-hidden="true" />
          </div>
        )}

        {safeClients.length > 0 && (
          <div
            className="v2-clients__carousel"
            aria-roledescription="carousel"
            aria-label="Logos de clientes"
            aria-live="polite"
          >
            <div className="v2-clients__track">
              {infiniteClients.map((item, index) => (
                <div className="v2-clients__item" key={index}>
                  <Image
                    src={getImageSrc(item.image)}
                    alt={item.alt || 'Logo de cliente'}
                    loading="lazy"
                    className="v2-clients__logo"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* PARCERIAS */}
      <div className="v2-partners conteudo-centralizado">
        <div className="v2-partners__text">
          {data?.partnersTitle && (
            <div>
              <h2 id="partners-section-title" className="v2-partners__title">
                {data.partnersTitle}
              </h2>
              <span className="line" aria-hidden="true" />
            </div>
          )}

          {partnersParagraphs.length > 0 && (
            <div className="v2-partners__body">
              {partnersParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          {data?.buttonText && data?.buttonHref && (
            <a
              href={data.buttonHref}
              className="v2-partners__button"
              aria-label={`Saiba mais sobre ${data.partnersTitle}`}
            >
              {data.buttonText}
            </a>
          )}
        </div>

        {safePartners.length > 0 && (
          <div className="v2-partners__card">
            <div className="v2-partners__logos">
              {safePartners.map((item, i) => (
                <div className="v2-partners__logo-item" key={i}>
                  <Image
                    src={getImageSrc(item.image)}
                    alt={item.alt || 'Logo de parceria'}
                    className="v2-partners__logo"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientsPartnersView;
