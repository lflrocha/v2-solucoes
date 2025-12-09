// src/components/Blocks/SplitMediaSection/SplitMediaSectionSchema.js

const imageSideOptions = [
  ['left', 'Imagem à esquerda'],
  ['right', 'Imagem à direita'],
];

const SplitMediaSectionSchema = () => ({
  title: 'Split Media Section',

  fieldsets: [
    {
      id: 'default',
      title: 'Conteúdo',
      fields: [
        'title',
        'subtitle',
        'description',
        'listItems',
        'buttonLabel',
        'buttonUrl',
        'image',
      ],
    },
    {
      id: 'layout',
      title: 'Layout',
      fields: ['imagePosition'],
    },
  ],

  properties: {
    title: {
      title: 'Título',
      type: 'string',
    },
    subtitle: {
      title: 'Subtítulo',
      type: 'string',
    },
    description: {
      title: 'Descrição',
      widget: 'richtext',
    },
    listItems: {
      title: 'Lista de itens',
      type: 'array',
      items: { type: 'string' },
    },
    buttonLabel: {
      title: 'Texto do botão',
      type: 'string',
    },
    buttonUrl: {
      title: 'Link do botão',
      type: 'string',
    },
    image: {
      title: 'Imagem',
      widget: 'image',
    },
    imagePosition: {
      title: 'Posição da imagem',
      widget: 'select',
      choices: imageSideOptions,
      default: 'left',
    },
    imageAlt: {
      title: 'Texto alternativo da imagem',
      type: 'string',
    },
  },

  required: ['title', 'image'],
});

export default SplitMediaSectionSchema;
