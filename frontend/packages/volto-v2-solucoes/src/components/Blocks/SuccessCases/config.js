import textSVG from '@plone/volto/icons/text.svg';
import SuccessCasesView from './SuccessCasesView';
import SuccessCasesEdit from './SuccessCasesEdit';
import SuccessCasesSchema from './schema';

export default function applySuccessCases(config) {
  config.blocks.blocksConfig.successCases = {
    id: 'successCases',
    title: 'Cases de Sucesso',
    icon: textSVG,
    group: 'common',
    view: SuccessCasesView,
    edit: SuccessCasesEdit,
    restricted: false,
    mostUsed: true,
    schema: SuccessCasesSchema,
  };

  return config;
}
