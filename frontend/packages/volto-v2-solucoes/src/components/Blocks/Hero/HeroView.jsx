import React, { useEffect, useMemo, useState } from 'react';
import './styles.less';

const resolveImageUrl = (backgroundImage) => {
  if (!backgroundImage) return '';

  if (typeof backgroundImage === 'string') {
    if (backgroundImage.includes('@@images')) {
      return backgroundImage;
    }
    const base = backgroundImage.replace(/\/$/, '');
    return `${base}/@@images/image`;
  }

  const scales =
    backgroundImage?.image?.scales ||
    backgroundImage?.scales ||
    backgroundImage?.image?.['@id']?.scales;

  if (scales) {
    return (
      scales.huge?.download ||
      scales.large?.download ||
      scales.preview?.download ||
      scales.thumb?.download ||
      ''
    );
  }

  if (backgroundImage['@id']) {
    const base = backgroundImage['@id'].replace(/\/$/, '');
    if (base.includes('@@images')) {
      return base;
    }
    return `${base}/@@images/image`;
  }

  return backgroundImage.download || backgroundImage.href || '';
};

const HeroView = ({ data = {} }) => {
  const {
    title,
    subtitle,
    buttonPrimaryText,
    buttonPrimaryUrl,
    buttonSecondaryText,
    buttonSecondaryUrl,
    backgroundImage,
    focalArea,
  } = data;

  const imageUrl = useMemo(
    () => resolveImageUrl(backgroundImage),
    [backgroundImage],
  );

  const [analysis, setAnalysis] = useState({
    brightness: 0.5,
    accentColor: '#ffa200', // fallback: cor da V2
    accentTextColor: '#0D1514',
  });

  // Análise simples da imagem (média de brilho + cor dominante)
  useEffect(() => {
    if (!imageUrl) return;
    if (typeof window === 'undefined') return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;

    img.onload = () => {
      const sampleWidth = 64;
      const sampleHeight = Math.max(
        1,
        Math.round((img.height / img.width) * sampleWidth),
      );

      const canvas = document.createElement('canvas');
      canvas.width = sampleWidth;
      canvas.height = sampleHeight;
      const ctx = canvas.getContext('2d');

      if (!ctx) return;

      ctx.drawImage(img, 0, 0, sampleWidth, sampleHeight);
      const { data } = ctx.getImageData(0, 0, sampleWidth, sampleHeight);

      let totalLuma = 0;
      let totalR = 0;
      let totalG = 0;
      let totalB = 0;
      const count = data.length / 4;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        totalR += r;
        totalG += g;
        totalB += b;

        totalLuma += 0.299 * r + 0.587 * g + 0.114 * b;
      }

      const avgR = totalR / count;
      const avgG = totalG / count;
      const avgB = totalB / count;

      const brightness = totalLuma / count / 255;
      const accentColor = `rgb(${Math.round(avgR)}, ${Math.round(
        avgG,
      )}, ${Math.round(avgB)})`;

      const accentBrightness =
        (0.299 * avgR + 0.587 * avgG + 0.114 * avgB) / 255;
      const accentTextColor = accentBrightness > 0.6 ? '#0D1514' : '#ffffff';

      setAnalysis({
        brightness,
        accentColor,
        accentTextColor,
      });
    };
  }, [imageUrl]);

  const overlayClass =
    analysis.brightness > 0.55 ? 'overlay-dark' : 'overlay-light';

  // Posição da imagem conforme o focalArea (schema)
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
      className={`v2-hero ${overlayClass}`}
      aria-labelledby="hero-heading"
      style={{
        ...(imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}),
        backgroundPosition,
        '--hero-accent': analysis.accentColor,
        '--hero-accent-text': analysis.accentTextColor,
      }}
    >
      <div className="v2-hero__overlay" aria-hidden="true" />

      <div className="conteudo-centralizado">
        <div className="v2-hero__content">
          <h1 id="hero-heading">{title}</h1>
          {subtitle && <p className="subtitle">{subtitle}</p>}

          <div className="buttons">
            {buttonPrimaryText && (
              <a href={buttonPrimaryUrl} className="btn btn-primary">
                {buttonPrimaryText}
              </a>
            )}

            {buttonSecondaryText && (
              <a href={buttonSecondaryUrl} className="btn btn-outline">
                {buttonSecondaryText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroView;
