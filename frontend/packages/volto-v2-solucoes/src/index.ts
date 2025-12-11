import type { ConfigType } from '@plone/registry';
import installSettings from './config/settings';
import applyHero from './components/Blocks/Hero/config';
import splitMediaSection from './components/Blocks/SplitMediaSection/config';
import contactSection from './components/Blocks/V2ContactSection/config';
import serviceCards from './components/Blocks/ServiceCards/config';
import './theme/extras.css';

function applyConfig(config: ConfigType) {
  // suas configs de idioma etc.
  installSettings(config);

  // registro de Blocos
  applyHero(config);
  splitMediaSection(config);
  contactSection(config);
  serviceCards(config);

  return config;
}

export default applyConfig;
