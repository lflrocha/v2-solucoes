import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import './skiplinks.css';

const messages = defineMessages({
  skipTo: {
    id: 'skip_to',
    defaultMessage: 'Pular para',
  },
  mainContent: {
    id: 'skip_to_main_content',
    defaultMessage: 'Pular para o conteúdo principal',
  },
  navigation: {
    id: 'skip_to_navigation',
    defaultMessage: 'Pular para a navegação',
  },
  footer: {
    id: 'skip_to_footer',
    defaultMessage: 'Pular para o rodapé',
  },
});

const SkipLinks = () => {
  const intl = useIntl();

  const items = [
    {
      href: '#main', // Plone/Volto normalmente usa id="main" para o conteúdo
      label: intl.formatMessage(messages.mainContent),
    },
    {
      href: '#site-navigation', // vamos colocar esse id no <nav> do header
      label: intl.formatMessage(messages.navigation),
    },
    {
      href: '#footer', // Plone geralmente usa id="footer" no rodapé
      label: intl.formatMessage(messages.footer),
    },
  ];

  return (
    <nav
      className="v2-skiplinks"
      aria-label={intl.formatMessage(messages.skipTo)}
    >
      <ul className="v2-skiplinks__list">
        {items.map((item) => (
          <li key={item.href} className="v2-skiplinks__item">
            <a className="v2-skiplinks__link" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SkipLinks;
