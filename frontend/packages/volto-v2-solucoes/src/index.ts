import type { ConfigType } from '@plone/registry';
import installSettings from './config/settings';
import './theme/extras.css';

function applyConfig(config: ConfigType) {
  installSettings(config);

  return config;
}

export default applyConfig;
