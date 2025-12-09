import type { ConfigType } from '@plone/registry';
import installSettings from './config/settings';
import applyHero from './components/Blocks/Hero/config';
import splitMediaSection from './components/Blocks/SplitMediaSection/config';
import './theme/extras.css';

function applyConfig(config: ConfigType) {
  // suas configs de idioma etc.
  installSettings(config);

  // registro de Blocos
  applyHero(config);
  splitMediaSection(config);

  return config;
}

export default applyConfig;
