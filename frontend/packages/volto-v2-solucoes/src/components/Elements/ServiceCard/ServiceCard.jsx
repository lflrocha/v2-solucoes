import React from 'react';
import styles from './ServiceCard.module.less';
import { resolveImageUrl } from 'volto-v2-solucoes/utils/resolveImageUrl';
import Button from '../Button';

const ServiceCard = ({
  image,
  imageAlt,
  title,
  description,
  buttonLabel,
  buttonLink,
}) => {
  const imgUrl = resolveImageUrl(image);

  const descriptionHtml =
    typeof description === 'string' ? description : description?.data || '';

  const hasButton = !!(buttonLabel && buttonLink);

  return (
    <article className={styles.card}>
      {imgUrl && (
        <img
          src={imgUrl}
          alt={imageAlt || ''}
          className={styles.image}
          loading="lazy"
        />
      )}

      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}

        {descriptionHtml && (
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
        )}

        {hasButton && (
          <Button href={buttonLink} variant="primary">
            {buttonLabel}
          </Button>
        )}
      </div>
    </article>
  );
};

export default ServiceCard;
