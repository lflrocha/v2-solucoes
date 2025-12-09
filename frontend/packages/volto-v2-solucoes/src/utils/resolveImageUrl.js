export const resolveImageUrl = (image) => {
  if (!image) return '';

  // Caso 1 — Já é uma string pronta (com @@images)
  if (typeof image === 'string') {
    if (image.includes('@@images')) return image;
    return `${image.replace(/\/$/, '')}/@@images/image`;
  }

  // Caso 2 — Tem scales (Volto retorna isso se a imagem já foi carregada)
  const scales =
    image?.image?.scales || image?.scales || image?.['@id']?.scales;

  if (scales) {
    return (
      scales.huge?.download ||
      scales.large?.download ||
      scales.preview?.download ||
      scales.thumb?.download ||
      ''
    );
  }

  // Caso 3 — Tem apenas @id → construir URL manualmente
  if (image['@id']) {
    const base = image['@id'].replace(/\/$/, '');
    if (base.includes('@@images')) return base;
    return `${base}/@@images/image`;
  }

  // Caso 4 — Estruturas mais antigas do Plone
  return image.download || image.href || '';
};
