import type { ConfigType } from '@plone/registry';

export default function install(config: ConfigType) {
  config.settings.isMultilingual = false;
  config.settings.supportedLanguages = ['pt-br'];
  config.settings.defaultLanguage = 'pt-br';

  if (!config.settings.apiExpanders) {
    config.settings.apiExpanders = [];
  }

  config.settings.apiExpanders = [
    ...config.settings.apiExpanders,
    {
      match: '',
      GET_CONTENT: ['inherit'],
      querystring: {
        'expand.inherit.behaviors':
          'voltolighttheme.header,voltolighttheme.theme,voltolighttheme.footer',
      },
    },
  ];

  return config;
}
