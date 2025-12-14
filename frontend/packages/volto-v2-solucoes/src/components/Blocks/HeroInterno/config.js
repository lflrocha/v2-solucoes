import HeroInternoView from './HeroInternoView';
import HeroInternoEdit from './HeroInternoEdit';
import imageSVG from '@plone/volto/icons/image.svg';

export default function applyHeroInterno(config) {
  config.blocks = config.blocks || {};
  config.blocks.blocksConfig = config.blocks.blocksConfig || {};

  config.blocks.blocksConfig.heroInterno = {
    id: 'heroInterno',
    title: 'Hero Interno',
    icon: imageSVG,
    group: 'common',
    view: HeroInternoView,
    edit: HeroInternoEdit,
    mostUsed: true,
    restricted: false,
  };

  return config;
}
