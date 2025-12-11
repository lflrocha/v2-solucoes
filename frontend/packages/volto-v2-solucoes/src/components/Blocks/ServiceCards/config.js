import ServiceCardsEdit from './ServiceCardsEdit';
import ServiceCardsView from './ServiceCardsView';
import ServiceCardsSchema from './schema';

const applyServiceCardsBlock = (config) => {
  config.blocks.blocksConfig.serviceCards = {
    id: 'serviceCards',
    title: 'Cards de Serviços',
    icon: 'grid layout',
    group: 'common',
    view: ServiceCardsView,
    edit: ServiceCardsEdit,
    schema: ServiceCardsSchema,
    mostUsed: true,
    restricted: false,
  };

  return config;
};

export default applyServiceCardsBlock;
