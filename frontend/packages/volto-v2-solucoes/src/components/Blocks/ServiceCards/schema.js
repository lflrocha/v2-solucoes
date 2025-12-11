const ServiceCardsSchema = ({ intl }) => ({
  title: 'Cards de Serviços',

  fieldsets: [
    {
      id: 'default',
      title: 'Configuração',
      fields: ['title', 'cards'],
    },
  ],

  properties: {
    title: {
      title: 'Título da seção',
    },

    cards: {
      title: 'Cards',
      widget: 'object_list',
      schema: {
        title: 'Card',
        fieldsets: [
          {
            id: 'default',
            title: 'Configuração do Card',
            fields: [
              'image',
              'title',
              'description',
              'buttonLabel',
              'buttonLink',
            ],
          },
        ],
        properties: {
          image: { title: 'Imagem', widget: 'image' },
          imageAlt: { title: 'Texto alternativo da imagem' },
          title: { title: 'Título' },
          description: { title: 'Descrição', widget: 'richtext' },
          buttonLabel: { title: 'Texto do botão' },
          buttonLink: { title: 'Link do botão' },
        },
      },
    },
  },

  required: [],
});

export default ServiceCardsSchema;
