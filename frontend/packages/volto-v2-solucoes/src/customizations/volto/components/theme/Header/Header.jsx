import React, { useEffect, useState } from 'react';
import { SkipLinks } from '@plone/volto/components';
import Navigation from '../Navigation/Navigation';
import './header.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsSticky(y > 120); // ajusta esse valor conforme a altura do hero
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Header “hero” inicial, dentro do fluxo da página */}
      <header className="v2-header-wrapper v2-header-static" role="banner">
        <SkipLinks />
        <div className="v2-header-inner">
          <Navigation />
        </div>
      </header>

      {/* Header compacto, fixo, que entra quando rolar a página */}
      <header
        className={`v2-header-wrapper v2-header-sticky ${
          isSticky ? 'is-visible' : ''
        }`}
        aria-hidden={!isSticky}
      >
        <div className="v2-header-inner">
          <Navigation />
        </div>
      </header>
    </>
  );
};

export default Header;
