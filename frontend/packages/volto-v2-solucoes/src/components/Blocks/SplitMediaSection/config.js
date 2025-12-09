// config.js

import SplitMediaSectionEdit from './SplitMediaSectionEdit';
import SplitMediaSectionView from './SplitMediaSectionView';

export default function applyConfig(config) {
  config.blocks.blocksConfig.splitMediaSection = {
    id: 'splitMediaSection',
    title: 'Split Media Section',
    icon: 'align-justify',
    group: 'common',
    view: SplitMediaSectionView,
    edit: SplitMediaSectionEdit,
    restricted: false,
    mostUsed: true,
  };

  return config;
}
