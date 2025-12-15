// packages/volto-v2-solucoes/src/customizations/volto/components/theme/Navigation/Navigation.jsx

import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Image from '@plone/volto/components/theme/Image/Image';
import Icon from '@plone/volto/components/theme/Icon/Icon';

import LogoV2 from '../../../../../theme/assets/logos/logo-v2.svg';
import IconBallon from '../../../../../theme/assets/icons/iconBallon.svg';
import IconUser from '../../../../../theme/assets/icons/iconUser.svg';
import ArrowDown from '../../../../../theme/assets/icons/arrow-down.svg';

import './navigation.css';

/* ------------------------------
   DROPDOWNS MANUAIS (fonte única)
-------------------------------- */
const DROPDOWNS = {
  quemSomos: [
    { to: '/quem-somos/nossa-historia', label: 'Nossa História' },
    { to: '/quem-somos/equipe-e-cultura', label: 'Equipe e Cultura' },
    { to: '/quem-somos/clientes', label: 'Clientes' },
    { to: '/quem-somos/parcerias', label: 'Parcerias' },
  ],
  solucoes: [
    {
      to: '/solucoes/desenvolvimento-adaptativo',
      label: 'Desenvolvimento Adaptativo',
    },
    {
      to: '/solucoes/monitoramento-inteligente-aiops',
      label: 'Monitoramento Inteligente (AIOps)',
    },
    {
      to: '/solucoes/sustentacao-e-transformacao-digital',
      label:
        'Sustentação de infraestrutura, automações e transformação digital',
    },
  ],
};

const ALL_ITEMS = [
  { to: '/', label: 'Início', exact: true },
  { to: '/quem-somos', label: 'Quem Somos', menuKey: 'quemSomos' },
  { to: '/solucoes', label: 'Soluções e Serviços', menuKey: 'solucoes' },
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
  const location = useLocation();

  const [visibleItems, setVisibleItems] = useState(ALL_ITEMS);
  const [overflowItems, setOverflowItems] = useState([]);

  // desktop: controla dropdowns de topo e o "Mais"
  const [moreOpen, setMoreOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'quemSomos' | 'solucoes' | null
  const [openMoreAccordion, setOpenMoreAccordion] = useState(null); // 'quemSomos' | 'solucoes' | null

  // mobile
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState(null); // 'quemSomos' | 'solucoes' | null

  const navRef = useRef(null);
  const mobileMenuRef = useRef(null); // ✅ NOVO: referência do drawer mobile
  const burgerRef = useRef(null);
  const firstMobileLinkRef = useRef(null);

  /* ------------------------------
     OVERFLOW RESPONSIVO (Mais)
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
     MOBILE: manter accordion aberto quando rota ativa
  -------------------------------- */
  useEffect(() => {
    const path = location.pathname || '';
    if (path.startsWith('/quem-somos')) setOpenMobileAccordion('quemSomos');
    else if (path.startsWith('/solucoes')) setOpenMobileAccordion('solucoes');
  }, [location.pathname]);

  /* ------------------------------
     FECHAR MENUS AO ROLAR
  -------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      if (moreOpen) setMoreOpen(false);
      if (openDropdown) setOpenDropdown(null);
      if (openMoreAccordion) setOpenMoreAccordion(null);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [moreOpen, openDropdown, openMoreAccordion]);

  /* ------------------------------
     FECHAR AO CLICAR FORA (desktop + mobile) ✅ FIX
     - NÃO fecha se clicar dentro do nav do topo
     - NÃO fecha se clicar dentro do drawer mobile
  -------------------------------- */
  useEffect(() => {
    function handleClickOutside(e) {
      const clickedInsideTopNav =
        navRef.current && navRef.current.contains(e.target);

      const clickedInsideMobileMenu =
        mobileMenuRef.current && mobileMenuRef.current.contains(e.target);

      if (clickedInsideTopNav || clickedInsideMobileMenu) return;

      setMoreOpen(false);
      setOpenDropdown(null);
      setOpenMoreAccordion(null);
      setMobileOpen(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /* ------------------------------
     ESC fecha tudo
  -------------------------------- */
  useEffect(() => {
    function handleKeydown(e) {
      if (e.key === 'Escape') {
        setMoreOpen(false);
        setOpenDropdown(null);
        setOpenMoreAccordion(null);
        setMobileOpen(false);
        if (burgerRef.current) burgerRef.current.focus();
      }
    }

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);

  /* ------------------------------
     FOCO no drawer mobile
  -------------------------------- */
  useEffect(() => {
    if (mobileOpen) {
      if (firstMobileLinkRef.current) firstMobileLinkRef.current.focus();
    } else if (!mobileOpen && burgerRef.current) {
      burgerRef.current.focus();
    }
  }, [mobileOpen]);

  /* ------------------------------
     HELPERS
  -------------------------------- */
  const closeAllDesktopMenus = () => {
    setMoreOpen(false);
    setOpenDropdown(null);
    setOpenMoreAccordion(null);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    closeAllDesktopMenus();
  };

  const toggleMobile = () => {
    setMobileOpen((prev) => !prev);
    closeAllDesktopMenus();
  };

  const isItemOverflowed = (item) =>
    overflowItems.some((o) => o.to === item.to);

  /* ------------------------------
     TOP DROPDOWNS (desktop)
  -------------------------------- */
  const handleTopDropdownClick = (e, item) => {
    if (!item.menuKey) return;

    e.preventDefault();
    setMoreOpen(false);
    setOpenMoreAccordion(null);
    setOpenDropdown((cur) => (cur === item.menuKey ? null : item.menuKey));
  };

  /* ------------------------------
     MORE (desktop)
  -------------------------------- */
  const toggleMore = () => {
    setOpenDropdown(null);
    setOpenMoreAccordion(null);
    setMoreOpen((o) => !o);
  };

  const toggleMoreAccordion = (menuKey) => {
    setOpenDropdown(null);
    setOpenMoreAccordion((cur) => (cur === menuKey ? null : menuKey));
  };

  return (
    <>
      {/* NAV DESKTOP / TABLET */}
      <nav className="v2-nav" aria-label="Menu principal" ref={navRef}>
        <Link to="/" className="v2-logo" onClick={closeMobile}>
          <Image src={LogoV2} alt="V2 Tec Soluções" />
        </Link>

        <div className="v2-menu-desktop">
          <div className="v2-menu-main">
            {visibleItems.map((item) => {
              const hasDropdown = !!item.menuKey;
              const subitems = hasDropdown ? DROPDOWNS[item.menuKey] || [] : [];

              if (!hasDropdown) {
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    exact={item.exact}
                    className="v2-link"
                    activeClassName="active"
                    onClick={closeAllDesktopMenus}
                  >
                    <div className="content-link">{item.label}</div>
                  </NavLink>
                );
              }

              if (isItemOverflowed(item)) return null;

              const isOpen = openDropdown === item.menuKey;

              return (
                <div key={item.to} className="v2-link-dropdown">
                  <NavLink
                    to={item.to}
                    exact={item.exact}
                    className="v2-link"
                    activeClassName="active"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={(e) => handleTopDropdownClick(e, item)}
                  >
                    <div className="content-link has-dropdown">
                      <span>{item.label}</span>
                      <Icon
                        name={ArrowDown}
                        size="12px"
                        className={`v2-more-arrow content-btn-icon ${
                          isOpen ? 'is-open' : ''
                        }`}
                        title=""
                      />
                    </div>
                  </NavLink>

                  {subitems.length > 0 && (
                    <ul
                      className={`v2-more-menu v2-dropdown-menu ${
                        isOpen ? 'is-open' : ''
                      }`}
                      aria-label={item.label}
                    >
                      {subitems.map((sub) => (
                        <li key={sub.to}>
                          <NavLink
                            to={sub.to}
                            className="v2-link v2-dropdown-link"
                            activeClassName="active"
                            onClick={closeAllDesktopMenus}
                          >
                            {sub.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}

            {/* MAIS (overflow) */}
            {overflowItems.length > 0 && (
              <div className="v2-menu-more">
                <button
                  type="button"
                  className="v2-more-button"
                  aria-haspopup="true"
                  aria-expanded={moreOpen}
                  aria-controls={MORE_MENU_ID}
                  onClick={toggleMore}
                >
                  <span>Mais</span>
                  <Icon
                    name={ArrowDown}
                    size="12px"
                    className={`v2-more-arrow content-btn-icon ${
                      moreOpen ? 'is-open' : ''
                    }`}
                    title=""
                  />
                </button>

                <ul
                  id={MORE_MENU_ID}
                  className={`v2-more-menu ${moreOpen ? 'is-open' : ''}`}
                  aria-label="Mais páginas"
                >
                  {overflowItems.map((item) => {
                    const hasDropdown = !!item.menuKey;
                    const subitems = hasDropdown
                      ? DROPDOWNS[item.menuKey] || []
                      : [];

                    if (hasDropdown && subitems.length > 0) {
                      const isOpen = openMoreAccordion === item.menuKey;

                      return (
                        <li key={item.to} className="v2-more-accordion">
                          <button
                            type="button"
                            className="v2-more-accordion-trigger"
                            aria-expanded={isOpen}
                            onClick={() => toggleMoreAccordion(item.menuKey)}
                          >
                            <span>{item.label}</span>
                            <Icon
                              name={ArrowDown}
                              size="12px"
                              className={`v2-more-arrow content-btn-icon ${
                                isOpen ? 'is-open' : ''
                              }`}
                              title=""
                            />
                          </button>

                          <div
                            className={`v2-more-accordion-panel ${
                              isOpen ? 'is-open' : ''
                            }`}
                          >
                            {subitems.map((sub) => (
                              <NavLink
                                key={sub.to}
                                to={sub.to}
                                className="v2-link v2-dropdown-link"
                                activeClassName="active"
                                onClick={closeAllDesktopMenus}
                              >
                                {sub.label}
                              </NavLink>
                            ))}
                          </div>
                        </li>
                      );
                    }

                    return (
                      <li key={item.to}>
                        <NavLink
                          to={item.to}
                          exact={item.exact}
                          className="v2-link"
                          activeClassName="active"
                          onClick={closeAllDesktopMenus}
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          {/* ACTION BUTTONS */}
          <div className="v2-menu-actions">
            {ACTION_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="btn-v2-link"
                activeClassName="active"
                onClick={closeAllDesktopMenus}
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
        {/* ✅ importante: ref aqui (ou no nav interno) */}
        <nav id={MOBILE_MENU_ID} aria-label="Menu móvel" ref={mobileMenuRef}>
          {ALL_ITEMS.map((item, index) => {
            const hasDropdown = !!item.menuKey;
            const subitems = hasDropdown ? DROPDOWNS[item.menuKey] || [] : [];

            if (!hasDropdown) {
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  exact={item.exact}
                  className="v2-mobile-link"
                  activeClassName="active"
                  onClick={closeMobile}
                  ref={index === 0 ? firstMobileLinkRef : undefined}
                >
                  {item.label}
                </NavLink>
              );
            }

            const isOpen = openMobileAccordion === item.menuKey;

            return (
              <div key={item.to} className="v2-mobile-accordion">
                <button
                  type="button"
                  className="v2-mobile-link v2-mobile-accordion-trigger"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenMobileAccordion((cur) =>
                      cur === item.menuKey ? null : item.menuKey,
                    )
                  }
                >
                  <span>{item.label}</span>
                  <Icon
                    name={ArrowDown}
                    size="14px"
                    className={`v2-more-arrow content-btn-icon ${
                      isOpen ? 'is-open' : ''
                    }`}
                    title=""
                  />
                </button>

                <div className={`v2-mobile-submenu ${isOpen ? 'is-open' : ''}`}>
                  {subitems.map((sub) => (
                    <NavLink
                      key={sub.to}
                      to={sub.to}
                      className="v2-mobile-link v2-mobile-sublink"
                      activeClassName="active"
                      onClick={closeMobile}
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            );
          })}

          {ACTION_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="v2-mobile-link"
              activeClassName="active"
              onClick={closeMobile}
            >
              {item.label1} {item.label2}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navigation;
