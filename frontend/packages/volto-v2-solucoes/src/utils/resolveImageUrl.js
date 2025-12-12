const normalizeBackendUrl = (url) => {
  if (!url) return '';

  try {
    // tenta interpretar a URL como absoluta
    let parsed;
    try {
      parsed = new URL(url);
    } catch {
      // se for relativa, usa um base dummy só pra conseguir parsear
      parsed = new URL(url, 'http://127.0.0.1:3000');
    }

    if (parsed.hostname === '0.0.0.0') {
      // aqui podemos colocar localhost ou 127.0.0.1
      parsed.hostname = '127.0.0.1';
    }

    return parsed.toString();
  } catch (e) {
    // se der ruim, devolve a original mesmo pra não quebrar nada
    return url;
  }
};

export const resolveImageUrl = (image) => {
  if (!image) return '';

  // Caso 1 — Já é uma string pronta (com @@images ou não)
  if (typeof image === 'string') {
    let url = image;

    if (!url.includes('@@images')) {
      url = `${url.replace(/\/$/, '')}/@@images/image`;
    }

    return normalizeBackendUrl(url);
  }

  // Caso 2 — Tem scales (Volto retorna isso se a imagem já foi carregada)
  const scales =
    image?.image?.scales || image?.scales || image?.['@id']?.scales;

  if (scales) {
    const url =
      scales.huge?.download ||
      scales.large?.download ||
      scales.preview?.download ||
      scales.thumb?.download ||
      '';

    return normalizeBackendUrl(url);
  }

  // Caso 3 — Tem apenas @id → construir URL manualmente
  if (image['@id']) {
    let base = image['@id'].replace(/\/$/, '');
    if (!base.includes('@@images')) {
      base = `${base}/@@images/image`;
    }
    return normalizeBackendUrl(base);
  }

  // Caso 4 — Estruturas mais antigas do Plone
  const fallback = image.download || image.href || '';
  return normalizeBackendUrl(fallback);
};
