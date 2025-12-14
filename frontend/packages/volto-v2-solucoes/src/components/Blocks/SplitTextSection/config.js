import SplitTextSectionEdit from './SplitTextSectionEdit';
import SplitTextSectionView from './SplitTextSectionView';
import alignJustifySVG from '@plone/volto/icons/align-justify.svg';

export default function applyConfig(config) {
  config.blocks = config.blocks || {};
  config.blocks.blocksConfig = config.blocks.blocksConfig || {};

  config.blocks.blocksConfig.splitTextSection = {
    id: 'splitTextSection',
    title: 'Split Text Section',
    icon: alignJustifySVG,
    group: 'common',
    view: SplitTextSectionView,
    edit: SplitTextSectionEdit,
    restricted: false,
    mostUsed: true,
  };

  return config;
}
