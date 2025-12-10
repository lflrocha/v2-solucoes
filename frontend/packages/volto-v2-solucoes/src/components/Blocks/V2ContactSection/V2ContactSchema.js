// src/components/Blocks/V2Contact/schema.js
const V2ContactSchema = (props) => ({
  title: 'Bloco de Contato V2Tec',
  fieldsets: [
    {
      id: 'default',
      title: 'Configurações',
      fields: ['title', 'subtitle', 'phone', 'email', 'image'],
    },
  ],
  properties: {
    title: {
      title: 'Título',
      type: 'string',
      default: 'Fale com a gente',
    },
    subtitle: {
      title: 'Texto',
      type: 'string',
      widget: 'textarea',
      default:
        'Vamos entender seu contexto e sugerir a melhor abordagem técnica.',
    },
    phone: {
      title: 'Telefone',
      type: 'string',
      default: '(61) 99999-9999',
    },
    email: {
      title: 'E-mail',
      type: 'string',
      default: 'contato@v2tec.com.br',
    },
    image: {
      title: 'Imagem',
      widget: 'image',
    },
  },
  required: ['title'],
});

export default V2ContactSchema;
