// packages/volto-v2-solucoes/src/customizations/volto/components/theme/Header/Header.jsx
import React, { useEffect, useState } from 'react';
import { SkipLinks } from '@plone/volto/components';
import Navigation from '../Navigation/Navigation';
import './header.css';

const STICKY_OFFSET = 120;

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      setIsSticky(y > STICKY_OFFSET);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ÚNICO header semântico */}
      <header className="v2-header-wrapper v2-header-static" role="banner">
        <SkipLinks />
        <div className="v2-header-inner">
          <Navigation />
        </div>
      </header>

      {/* Sticky sempre no DOM, só anima via classe */}
      <div
        className={`v2-header-wrapper v2-header-sticky ${
          isSticky ? 'is-visible' : ''
        }`}
        aria-hidden={!isSticky}
      >
        <div className="v2-header-inner">
          <Navigation />
        </div>
      </div>
    </>
  );
};

export default Header;
