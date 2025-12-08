import HeroView from './HeroView';
import HeroEdit from './HeroEdit';

export default function applyHero(config) {
  if (!config.blocks) config.blocks = {};
  if (!config.blocks.blocksConfig) config.blocks.blocksConfig = {};

  config.blocks.blocksConfig.hero = {
    id: 'hero',
    title: 'Hero',
    icon: 'image',
    group: 'common',
    view: HeroView,
    edit: HeroEdit,
    mostUsed: true,
    restricted: false,
  };

  return config;
}
