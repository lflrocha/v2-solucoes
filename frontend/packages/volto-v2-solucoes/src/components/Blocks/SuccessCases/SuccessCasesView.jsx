// packages/volto-v2-solucoes/src/components/Blocks/SuccessCases/SuccessCasesView.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { resolveImageUrl } from '../../../utils/resolveImageUrl';

import './styles.less';

const SuccessCasesView = ({ data, id }) => {
  const headingId = `success-cases-heading-${id}`;
  const imageUrl = data?.image ? resolveImageUrl(data.image) : null;
  const cases = data?.cases || [];

  return (
    <section className="v2-success-cases" aria-labelledby={headingId}>
      {/* Imagem decorativa, escondida de leitor de tela */}
      {imageUrl && (
        <div className="v2-success-cases__image" aria-hidden="true">
          <img src={imageUrl} alt="" loading="lazy" />
        </div>
      )}

      <div className="v2-success-cases__content">
        <header className="v2-success-cases__header">
          {data?.title && (
            <h2 id={headingId} className="v2-success-cases__title">
              {data.title}
            </h2>
          )}

          {data?.description && (
            <p className="v2-success-cases__description">{data.description}</p>
          )}

          {data?.seeAllUrl && data?.seeAllLabel && (
            <div className="v2-success-cases__all">
              <a className="v2-success-cases__all-button" href={data.seeAllUrl}>
                {data.seeAllLabel}
              </a>
            </div>
          )}
        </header>

        {cases.length > 0 && (
          <ul className="v2-success-cases__list">
            {cases.map((item, index) => (
              <li key={index} className="v2-success-cases__card">
                {item.title && (
                  <h3 className="v2-success-cases__card-title">{item.title}</h3>
                )}

                {item.summary && (
                  <p className="v2-success-cases__card-text">{item.summary}</p>
                )}

                {item.ctaLabel && item.ctaUrl && (
                  <a
                    href={item.ctaUrl}
                    className="v2-success-cases__card-link"
                    aria-label={`${item.ctaLabel} – ${item.title}`}
                  >
                    {item.ctaLabel}
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

SuccessCasesView.propTypes = {
  id: PropTypes.string,
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.any,
    seeAllLabel: PropTypes.string,
    seeAllUrl: PropTypes.string,
    cases: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        summary: PropTypes.string,
        ctaLabel: PropTypes.string,
        ctaUrl: PropTypes.string,
      }),
    ),
  }),
};

export default SuccessCasesView;
