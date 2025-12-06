import React from 'react';
import Image from '@plone/volto/components/theme/Image/Image';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import './footer.css';

import LogoCurta from '../../../../../theme/assets/logos/logo-v2-curta.svg';
import Instagram from '../../../../../theme/assets/icons/icon-instagram.svg';
import Whatsapp from '../../../../../theme/assets/icons/icon-whatsapp.svg';
import LinkedIn from '../../../../../theme/assets/icons/icon-linkedin.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="v2-footer" aria-label="Rodapé do site">
      {/* barrinha laranja decorativa */}
      <div className="v2-footer__top-bar" aria-hidden="true" />

      {/* blocos principais do rodapé */}
      <div className="v2-footer__main">
        {/* Bloco 1 – logo + endereço */}
        <section
          className="v2-footer__block v2-footer__block--company"
          aria-label="Informações da empresa"
        >
          <a
            href="/"
            className="v2-footer__logo"
            aria-label="Página inicial da V2 Tec"
          >
            <Image src={LogoCurta} alt="V2 Tec Soluções" />
          </a>

          <h2 className="v2-footer__heading v2-footer__heading--sr">
            Informações da empresa
          </h2>

          <address className="v2-footer__text v2-footer__address">
            Edifício Victória Office Tower – Setor de
            <br />
            Autarquias Sul Q. 4 Bloco A – Sala 305 –
            <br />
            308 Asa Sul, Brasília – DF CEP: 70070-938
          </address>

          <p className="v2-footer__text v2-footer__text--cnpj">
            CNPJ nº 44.142.273/0001-46
          </p>
        </section>

        {/* Separador */}
        <div className="v2-footer__divider" aria-hidden="true" />

        {/* Bloco 2 – mapa do site */}
        <nav
          className="v2-footer__block v2-footer__block--menu"
          aria-label="Mapa do site"
        >
          <h2 className="v2-footer__heading v2-footer__heading--sr">
            Mapa do site
          </h2>

          <div className="v2-footer__menus">
            <ul className="v2-footer__menu">
              <li>
                <a href="/" className="v2-footer__link">
                  Início
                </a>
              </li>
              <li>
                <a href="/nossa-historia" className="v2-footer__link">
                  Nossa História
                </a>
              </li>
              <li>
                <a href="/equipe-e-cultura" className="v2-footer__link">
                  Equipe &amp; Cultura
                </a>
              </li>
              <li>
                <a href="/clientes" className="v2-footer__link">
                  Clientes
                </a>
              </li>
              <li>
                <a href="/parcerias" className="v2-footer__link">
                  Parcerias
                </a>
              </li>
              <li>
                <a
                  href="/desenvolvimento-adaptativo"
                  className="v2-footer__link"
                >
                  Desenvolvimento Adaptativo
                </a>
              </li>
              <li>
                <a
                  href="/monitoramento-inteligente-aiops"
                  className="v2-footer__link"
                >
                  Monitoramento Inteligente (AIOps)
                </a>
              </li>
            </ul>

            <ul className="v2-footer__menu">
              <li>
                <a
                  href="/sustentacao-de-infraestrutura"
                  className="v2-footer__link"
                >
                  Sustentação de infraestrutura, automações e transformação
                  digital
                </a>
              </li>
              <li>
                <a href="/cases-de-sucesso" className="v2-footer__link">
                  Cases de Sucesso
                </a>
              </li>
              <li>
                <a href="/carreiras" className="v2-footer__link">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="/canal-de-etica" className="v2-footer__link">
                  Canal de Ética
                </a>
              </li>
              <li>
                <a href="/area-do-cliente" className="v2-footer__link">
                  Área do Cliente
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Separador */}
        <div className="v2-footer__divider" aria-hidden="true" />

        {/* Bloco 3 – redes sociais */}
        <section
          className="v2-footer__block v2-footer__block--social"
          aria-label="Redes sociais"
        >
          <h2 className="v2-footer__heading v2-footer__heading--sr">
            Redes sociais
          </h2>

          <p className="v2-footer__social-title">
            Siga a V2 Tec nas redes sociais
          </p>

          <ul className="v2-footer__social-list">
            <li>
              <a
                href="https://www.instagram.com/v2tec_solucoes/"
                target="_blank"
                rel="noopener noreferrer"
                className="v2-footer__social-link"
              >
                <Icon
                  name={Instagram}
                  size="24px"
                  className="v2-footer__social-icon"
                  aria-hidden="true"
                  focusable="false"
                />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.link/xqthm7"
                target="_blank"
                rel="noopener noreferrer"
                className="v2-footer__social-link"
              >
                <Icon
                  name={Whatsapp}
                  size="24px"
                  className="v2-footer__social-icon"
                  aria-hidden="true"
                  focusable="false"
                />
                <span>Whatsapp</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/v2tec-soluc%C3%A7%C3%B5es/"
                target="_blank"
                rel="noopener noreferrer"
                className="v2-footer__social-link"
              >
                <Icon
                  name={LinkedIn}
                  size="24px"
                  className="v2-footer__social-icon"
                  aria-hidden="true"
                  focusable="false"
                />
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </section>
      </div>

      {/* parte inferior com copyright */}
      <div className="v2-footer__bottom">
        <p className="v2-footer__bottom-text">
          © {currentYear} V2 Tec Soluções — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
