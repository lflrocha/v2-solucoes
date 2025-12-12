// packages/volto-v2-solucoes/src/components/Blocks/SuccessCases/schema.js

const SuccessCasesSchema = (intl) => ({
  title: intl.formatMessage({
    id: 'successCasesBlock',
    defaultMessage: 'Cases de sucesso',
  }),
  fieldsets: [
    {
      id: 'default',
      title: intl.formatMessage({
        id: 'default',
        defaultMessage: 'Padrão',
      }),
      fields: [
        'title',
        'description',
        'image',
        'seeAllLabel',
        'seeAllUrl',
        'cases',
      ],
    },
  ],
  properties: {
    title: {
      title: intl.formatMessage({
        id: 'title',
        defaultMessage: 'Título',
      }),
    },
    description: {
      title: intl.formatMessage({
        id: 'description',
        defaultMessage: 'Descrição',
      }),
      widget: 'textarea',
    },
    image: {
      title: intl.formatMessage({
        id: 'image',
        defaultMessage: 'Imagem de fundo',
      }),
      widget: 'image',
      mode: 'image',
    },
    seeAllLabel: {
      title: intl.formatMessage({
        id: 'seeAllLabel',
        defaultMessage: 'Texto do botão "Ver todos os cases"',
      }),
      default: 'Ver todos os cases',
    },
    seeAllUrl: {
      title: intl.formatMessage({
        id: 'seeAllUrl',
        defaultMessage: 'URL do botão',
      }),
      widget: 'url',
    },
    cases: {
      title: intl.formatMessage({
        id: 'cases',
        defaultMessage: 'Cards de cases',
      }),
      widget: 'object_list',
      schema: {
        title: intl.formatMessage({
          id: 'case',
          defaultMessage: 'Case',
        }),
        fieldsets: [
          {
            id: 'default',
            title: intl.formatMessage({
              id: 'default',
              defaultMessage: 'Padrão',
            }),
            fields: ['title', 'summary', 'ctaLabel', 'ctaUrl'],
          },
        ],
        properties: {
          title: {
            title: intl.formatMessage({
              id: 'caseTitle',
              defaultMessage: 'Título do case',
            }),
          },
          summary: {
            title: intl.formatMessage({
              id: 'caseSummary',
              defaultMessage: 'Resumo',
            }),
            widget: 'textarea',
          },
          ctaLabel: {
            title: intl.formatMessage({
              id: 'ctaLabel',
              defaultMessage: 'Texto do link',
            }),
            default: 'Ver case',
          },
          ctaUrl: {
            title: intl.formatMessage({
              id: 'ctaUrl',
              defaultMessage: 'URL do case',
            }),
            widget: 'url',
          },
        },
      },
    },
  },
  required: ['title'],
});

export default SuccessCasesSchema;
