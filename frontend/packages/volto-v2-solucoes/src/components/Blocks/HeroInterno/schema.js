export default function HeroInternoSchema() {
  return {
    title: 'Hero Interno',
    fieldsets: [
      {
        id: 'default',
        title: 'Configurações',
        fields: ['title', 'subtitle', 'backgroundImage', 'focalArea'],
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
        mode: 'image',
        allowExternals: false,
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
