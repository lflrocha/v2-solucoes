// packages/volto-v2-solucoes/src/customizations/volto/components/theme/Navigation/Navigation.jsx

import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Image from '@plone/volto/components/theme/Image/Image';
import Icon from '@plone/volto/components/theme/Icon/Icon';

import LogoV2 from '../../../../../theme/assets/logos/logo-v2.svg';
import IconBallon from '../../../../../theme/assets/icons/iconBallon.svg';
import IconUser from '../../../../../theme/assets/icons/iconUser.svg';
import ArrowDown from '../../../../../theme/assets/icons/arrow-down.svg';

import './navigation.css';

const ALL_ITEMS = [
  { to: '/', label: 'Início', exact: true },
  { to: '/quem-somos', label: 'Quem Somos' },
  { to: '/solucoes', label: 'Soluções e Serviços' },
  { to: '/cases', label: 'Cases de Sucesso' },
  { to: '/carreiras', label: 'Carreiras' },
];

const ACTION_ITEMS = [
  {
    to: '/canal-de-etica',
    label1: 'Canal',
    label2: 'de Ética',
    icon: IconBallon,
    alt: 'Canal de ética',
  },
  {
    to: '/area-do-cliente',
    label1: 'Área do',
    label2: 'Cliente',
    icon: IconUser,
    alt: 'Área do cliente',
  },
];

const MORE_MENU_ID = 'v2-more-menu';
const MOBILE_MENU_ID = 'v2-mobile-menu';

const Navigation = () => {
  const [visibleItems, setVisibleItems] = useState(ALL_ITEMS);
  const [overflowItems, setOverflowItems] = useState([]);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const moreRef = useRef(null);
  const burgerRef = useRef(null);
  const firstMobileLinkRef = useRef(null);

  /* ------------------------------
     OVERFLOW RESPONSIVO (botão “Mais”)
  -------------------------------- */
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      let maxVisible;

      if (w >= 1600) maxVisible = ALL_ITEMS.length;
      else if (w >= 1366) maxVisible = ALL_ITEMS.length - 1;
      else if (w >= 1200) maxVisible = ALL_ITEMS.length - 2;
      else if (w >= 1024) maxVisible = ALL_ITEMS.length - 3;
      else if (w >= 900) maxVisible = ALL_ITEMS.length - 4;
      else maxVisible = 0;

      maxVisible = Math.max(0, Math.min(ALL_ITEMS.length, maxVisible));

      setVisibleItems(ALL_ITEMS.slice(0, maxVisible));
      setOverflowItems(ALL_ITEMS.slice(maxVisible));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /* ------------------------------
     FECHAR “Mais” AO ROLAR
  -------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      if (moreOpen) setMoreOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [moreOpen]);

  /* ------------------------------------------
     FECHAR “Mais” AO CLICAR FORA
  ------------------------------------------ */
  useEffect(() => {
    function handleClickOutside(e) {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    }

    if (moreOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [moreOpen]);

  /* ------------------------------------------
     ESC fecha “Mais” e menu mobile
  ------------------------------------------ */
  useEffect(() => {
    function handleKeydown(e) {
      if (e.key === 'Escape') {
        if (moreOpen || mobileOpen) {
          e.stopPropagation();
        }
        setMoreOpen(false);
        setMobileOpen(false);
        if (burgerRef.current) {
          burgerRef.current.focus();
        }
      }
    }

    if (moreOpen || mobileOpen) {
      document.addEventListener('keydown', handleKeydown);
    }

    return () => document.removeEventListener('keydown', handleKeydown);
  }, [moreOpen, mobileOpen]);

  /* ------------------------------------------
     FOCO no drawer mobile (abre -> 1º link,
     fecha -> volta pro hambúrguer)
  ------------------------------------------ */
  useEffect(() => {
    if (mobileOpen) {
      if (firstMobileLinkRef.current) {
        firstMobileLinkRef.current.focus();
      }
    } else if (!mobileOpen && burgerRef.current) {
      burgerRef.current.focus();
    }
  }, [mobileOpen]);

  /* ------------------------------------------
     MOBILE CONTROLS
  ------------------------------------------ */
  const toggleMobile = () => setMobileOpen((prev) => !prev);

  const closeMobile = () => {
    setMobileOpen(false);
    setMoreOpen(false);
  };

  const mobileItems = [...ALL_ITEMS, ...ACTION_ITEMS];

  return (
    <>
      {/* NAV DESKTOP / TABLET */}
      <nav className="v2-nav" aria-label="Menu principal">
        <Link to="/" className="v2-logo" onClick={closeMobile}>
          <Image src={LogoV2} alt="V2 Tec Soluções" />
        </Link>

        <div className="v2-menu-desktop">
          <div className="v2-menu-main">
            {visibleItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                exact={item.exact}
                className="v2-link"
                activeClassName="active"
              >
                <div className="content-link">{item.label}</div>
              </NavLink>
            ))}

            {overflowItems.length > 0 && (
              <div className="v2-menu-more" ref={moreRef}>
                <button
                  type="button"
                  className="v2-more-button"
                  aria-haspopup="true"
                  aria-expanded={moreOpen}
                  aria-controls={MORE_MENU_ID}
                  onClick={() => setMoreOpen((open) => !open)}
                >
                  <span>Mais</span>
                  <Icon
                    name={ArrowDown}
                    size="12px"
                    className="v2-more-arrow"
                    title=""
                  />
                </button>

                {overflowItems.length > 0 && (
                  <ul
                    id={MORE_MENU_ID}
                    className={`v2-more-menu ${moreOpen ? 'is-open' : ''}`}
                    aria-label="Mais páginas"
                  >
                    {overflowItems.map((item) => (
                      <li key={item.to}>
                        <NavLink
                          to={item.to}
                          exact={item.exact}
                          className="v2-link"
                          activeClassName="active"
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          <div className="v2-menu-actions">
            {ACTION_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="btn-v2-link"
                activeClassName="active"
              >
                <div className="content-btn">
                  <Icon
                    name={item.icon}
                    size="28px"
                    className="content-btn-icon"
                    title={item.alt}
                  />
                </div>

                <div className="content-btn-text">
                  <span className="btn-line1">{item.label1}</span>
                  <span className="btn-line2">{item.label2}</span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>

        {/* HAMBÚRGUER (MOBILE) */}
        <button
          type="button"
          className={`v2-burger ${mobileOpen ? 'is-open' : ''}`}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
          aria-controls={MOBILE_MENU_ID}
          ref={burgerRef}
          onClick={toggleMobile}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* MENU MOBILE */}
      <div
        className={`v2-mobile-menu ${mobileOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <nav id={MOBILE_MENU_ID} aria-label="Menu móvel">
          {mobileItems.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              exact={item.exact}
              className="v2-mobile-link"
              activeClassName="active"
              onClick={closeMobile}
              ref={index === 0 ? firstMobileLinkRef : undefined}
            >
              {item.label || `${item.label1} ${item.label2}`}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navigation;
