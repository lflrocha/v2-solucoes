import type { ConfigType } from '@plone/registry';
import installSettings from './config/settings';
import applyHero from './components/Blocks/Hero/config';
import splitMediaSection from './components/Blocks/SplitMediaSection/config';
import contactSection from './components/Blocks/V2ContactSection/config';
import serviceCards from './components/Blocks/ServiceCards/config';
import successCases from './components/Blocks/SuccessCases/config';
import clientsPartness from './components/Blocks/ClientsPartners/config';
import applyHeroInterno from './components/Blocks/HeroInterno/config';
import splitTextSection from './components/Blocks/SplitTextSection/config';

import './theme/extras.css';

function applyConfig(config: ConfigType) {
  // suas configs de idioma etc.
  installSettings(config);

  // registro de Blocos
  applyHero(config);
  splitMediaSection(config);
  contactSection(config);
  serviceCards(config);
  successCases(config);
  clientsPartness(config);
  applyHeroInterno(config);
  splitTextSection(config);

  return config;
}

export default applyConfig;
