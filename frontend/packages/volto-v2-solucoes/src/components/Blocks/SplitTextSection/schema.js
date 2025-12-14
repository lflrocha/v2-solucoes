const schema = () => ({
  title: 'Split Text Section',

  fieldsets: [
    {
      id: 'default', // ✅ precisa existir
      title: 'Coluna Esquerda',
      fields: [
        'leftTitle',
        'leftSubtitle',
        'leftDescription',
        'leftListItems',
        'leftButtonLabel',
        'leftButtonUrl',
      ],
    },
    {
      id: 'right',
      title: 'Coluna Direita',
      fields: [
        'rightTitle',
        'rightSubtitle',
        'rightDescription',
        'rightListItems',
        'rightButtonLabel',
        'rightButtonUrl',
      ],
    },
  ],

  properties: {
    leftTitle: { title: 'Título', type: 'string' },
    leftSubtitle: { title: 'Subtítulo', type: 'string' },
    leftDescription: { title: 'Descrição', widget: 'richtext' },
    leftListItems: {
      title: 'Lista de itens',
      type: 'array',
      items: { type: 'string' },
    },
    leftButtonLabel: { title: 'Texto do botão', type: 'string' },
    leftButtonUrl: { title: 'Link do botão', type: 'string' },

    rightTitle: { title: 'Título', type: 'string' },
    rightSubtitle: { title: 'Subtítulo', type: 'string' },
    rightDescription: { title: 'Descrição', widget: 'richtext' },
    rightListItems: {
      title: 'Lista de itens',
      type: 'array',
      items: { type: 'string' },
    },
    rightButtonLabel: { title: 'Texto do botão', type: 'string' },
    rightButtonUrl: { title: 'Link do botão', type: 'string' },
  },

  required: [],
});

export default schema;
