// src/components/Blocks/ClientsPartners/ClientsPartnersEdit.jsx
import React from 'react';
import { SidebarPortal, BlockDataForm } from '@plone/volto/components';
import ClientsPartnersView from './ClientsPartnersView';
import ClientsPartnersSchema from './schema';

const ClientsPartnersEdit = (props) => {
  const { data, block, onChangeBlock, selected } = props;
  const schema = ClientsPartnersSchema(props);

  return (
    <>
      {/* preview na página enquanto edita */}
      <ClientsPartnersView {...props} />

      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          title={schema.title}
          formData={data}
          block={block}
          // 👇 ESSA função é a que o InlineForm usa
          onChangeField={(id, value) =>
            onChangeBlock(block, {
              ...data,
              [id]: value,
            })
          }
        />
      </SidebarPortal>
    </>
  );
};

export default ClientsPartnersEdit;
