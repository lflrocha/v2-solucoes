// src/components/Blocks/ClientsPartners/schema.js

// Schema de UM logo da lista (object_list)
const logoSchema = {
  title: 'Logo',
  fieldsets: [
    {
      id: 'default',
      title: 'Logo',
      fields: ['image', 'alt'],
    },
  ],
  properties: {
    image: {
      id: 'image',
      title: 'Imagem',
      widget: 'image',
      mode: 'image',
      allowExternals: false,
    },
    alt: {
      id: 'alt',
      title: 'Texto alternativo',
      type: 'string',
    },
  },
  required: ['image'],
};

// Schema do bloco inteiro
const ClientsPartnersSchema = ({ intl } = {}) => ({
  title: 'Clientes & Parcerias',

  // 👇 UM fieldset só, com id "default"
  fieldsets: [
    {
      id: 'default',
      title: 'Configurações',
      fields: [
        'clientsTitle',
        'clientsLogos',
        'partnersTitle',
        'partnersText',
        'buttonText',
        'buttonHref',
        'partnersLogos',
      ],
    },
  ],

  properties: {
    clientsTitle: {
      id: 'clientsTitle',
      title: 'Título (clientes)',
      type: 'string',
      default: 'Nossos clientes',
    },
    clientsLogos: {
      id: 'clientsLogos',
      title: 'Logos dos clientes',
      widget: 'object_list',
      schema: logoSchema,
    },
    partnersTitle: {
      id: 'partnersTitle',
      title: 'Título (parcerias)',
      type: 'string',
      default: 'Parcerias Estratégicas',
    },
    partnersText: {
      id: 'partnersText',
      title: 'Texto (parcerias)',
      widget: 'textarea',
      description: 'Quebra de linha = novo parágrafo.',
    },
    buttonText: {
      id: 'buttonText',
      title: 'Texto do botão',
      type: 'string',
      default: 'Saiba mais',
    },
    buttonHref: {
      id: 'buttonHref',
      title: 'Link do botão',
      type: 'string',
    },
    partnersLogos: {
      id: 'partnersLogos',
      title: 'Logos das parcerias',
      widget: 'object_list',
      schema: logoSchema,
    },
  },

  required: [],
});

export default ClientsPartnersSchema;
