import React, { useMemo } from 'react';
import { resolveImageUrl } from '../../../utils/resolveImageUrl';
import './styles.less';

const HeroInternoView = ({ data = {} }) => {
  const { title, subtitle, backgroundImage, focalArea = 'center' } = data;

  const imageUrl = useMemo(
    () => (backgroundImage ? resolveImageUrl(backgroundImage) : ''),
    [backgroundImage],
  );

  const backgroundPosition = (() => {
    switch (focalArea) {
      case 'left':
        return 'left center';
      case 'right':
        return 'right center';
      case 'top':
        return 'center top';
      case 'bottom':
        return 'center bottom';
      case 'center':
      default:
        return 'center center';
    }
  })();

  return (
    <section
      className="v2-hero interno"
      aria-labelledby={title ? 'hero-heading' : undefined}
      style={{
        ...(imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}),
        backgroundPosition,
      }}
    >
      <div className="v2-hero__overlay" aria-hidden="true" />

      <div className="conteudo-centralizado">
        <div className="v2-hero__content">
          {title && <h1 id="hero-heading">{title}</h1>}
          {subtitle && <p className="subtitle">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
};

export default HeroInternoView;
