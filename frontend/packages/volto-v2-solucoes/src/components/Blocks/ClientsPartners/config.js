import ClientsPartnersView from './ClientsPartnersView';
import ClientsPartnersEdit from './ClientsPartnersEdit';
import imageSVG from '@plone/volto/icons/image.svg';

export default function applyConfig(config) {
  config.blocks.blocksConfig.clientsPartners = {
    id: 'clientsPartners',
    title: 'Clientes & Parcerias',
    icon: imageSVG,
    group: 'common',
    view: ClientsPartnersView,
    edit: ClientsPartnersEdit,
    restricted: false,
    mostUsed: true,
  };

  return config;
}
