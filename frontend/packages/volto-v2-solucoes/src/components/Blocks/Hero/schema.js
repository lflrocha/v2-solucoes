export default function HeroSchema() {
  return {
    title: 'Hero',
    fieldsets: [
      {
        id: 'default',
        title: 'Configurações',
        fields: [
          'title',
          'subtitle',
          'backgroundImage',
          'focalArea',
          'buttonPrimaryText',
          'buttonPrimaryUrl',
          'buttonSecondaryText',
          'buttonSecondaryUrl',
        ],
      },
    ],
    properties: {
      title: {
        title: 'Título',
      },
      subtitle: {
        title: 'Subtítulo',
      },
      backgroundImage: {
        title: 'Imagem de fundo',
        widget: 'image',
      },
      buttonPrimaryText: {
        title: 'Texto botão primário',
      },
      buttonPrimaryUrl: {
        title: 'URL botão primário',
      },
      buttonSecondaryText: {
        title: 'Texto botão secundário',
      },
      buttonSecondaryUrl: {
        title: 'URL botão secundário',
      },
      focalArea: {
        title: 'Foco da imagem',
        description:
          'Escolha qual parte da imagem deve aparecer mais em destaque atrás do texto.',
        widget: 'select',
        choices: [
          ['center', 'Centro'],
          ['left', 'Esquerda'],
          ['right', 'Direita'],
          ['top', 'Topo'],
          ['bottom', 'Base'],
        ],
        default: 'center',
      },
    },
    required: ['title'],
  };
}
