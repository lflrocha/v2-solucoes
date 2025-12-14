import React from 'react';
import './styles.less';
import Button from '../../Elements/Button';

const getHtml = (value) =>
  typeof value === 'string' ? value : value?.data || '';

const hasText = (v) => typeof v === 'string' && v.trim().length > 0;

const hasColumnContent = ({
  title,
  subtitle,
  descriptionHtml,
  listItems,
  buttonLabel,
  buttonUrl,
}) => {
  return (
    hasText(title) ||
    hasText(subtitle) ||
    hasText(descriptionHtml) ||
    (Array.isArray(listItems) && listItems.some((x) => hasText(x))) ||
    (hasText(buttonLabel) && hasText(buttonUrl))
  );
};

const SplitTextSectionView = ({ data = {} }) => {
  const leftDescriptionHtml = getHtml(data.leftDescription);
  const rightDescriptionHtml = getHtml(data.rightDescription);

  const left = {
    title: data.leftTitle,
    subtitle: data.leftSubtitle,
    descriptionHtml: leftDescriptionHtml,
    listItems: data.leftListItems,
    buttonLabel: data.leftButtonLabel,
    buttonUrl: data.leftButtonUrl,
  };

  const right = {
    title: data.rightTitle,
    subtitle: data.rightSubtitle,
    descriptionHtml: rightDescriptionHtml,
    listItems: data.rightListItems,
    buttonLabel: data.rightButtonLabel,
    buttonUrl: data.rightButtonUrl,
  };

  const showLeft = hasColumnContent(left);
  const showRight = hasColumnContent(right);

  // Se não tiver nada preenchido, não renderiza a seção (evita “espaço vazio”)
  if (!showLeft && !showRight) return null;

  return (
    <section
      className={`split-text-section ${
        showLeft && showRight ? 'two-columns' : 'one-column'
      }`}
    >
      <div className="bg-shape" aria-hidden="true" />

      <div className="inner conteudo-centralizado">
        {showLeft && (
          <div className="content content-left">
            {left.title && <h2>{left.title}</h2>}
            <span className="line" aria-hidden="true" />
            {left.subtitle && <h3 className="subtitle">{left.subtitle}</h3>}

            {left.descriptionHtml && (
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: left.descriptionHtml }}
              />
            )}

            {left.listItems?.length > 0 && (
              <ul className="bullets">
                {left.listItems
                  .filter((item) => hasText(item))
                  .map((item, index) => (
                    <li key={`l-${index}`}>{item}</li>
                  ))}
              </ul>
            )}

            {left.buttonLabel && left.buttonUrl && (
              <Button href={left.buttonUrl} variant="primary">
                {left.buttonLabel}
              </Button>
            )}
          </div>
        )}

        {showRight && (
          <div className="content content-right">
            {right.title && <h2>{right.title}</h2>}
            <span className="line" aria-hidden="true" />
            {right.subtitle && <h3 className="subtitle">{right.subtitle}</h3>}

            {right.descriptionHtml && (
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: right.descriptionHtml }}
              />
            )}

            {right.listItems?.length > 0 && (
              <ul className="bullets">
                {right.listItems
                  .filter((item) => hasText(item))
                  .map((item, index) => (
                    <li key={`r-${index}`}>{item}</li>
                  ))}
              </ul>
            )}

            {right.buttonLabel && right.buttonUrl && (
              <Button href={right.buttonUrl} variant="primary">
                {right.buttonLabel}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default SplitTextSectionView;
