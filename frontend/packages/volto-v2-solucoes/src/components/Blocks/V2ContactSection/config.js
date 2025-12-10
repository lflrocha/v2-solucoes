import V2ContactEdit from './V2ContactEdit';
import V2ContactView from './V2ContactView';

export default function applyConfig(config) {
  config.blocks.blocksConfig.V2ContactSection = {
    id: 'V2ContactSection',
    title: 'Contato V2Tec',
    icon: 'mail',
    group: 'common',
    view: V2ContactView,
    edit: V2ContactEdit,
    restricted: false,
    mostUsed: true,
  };

  return config;
}
