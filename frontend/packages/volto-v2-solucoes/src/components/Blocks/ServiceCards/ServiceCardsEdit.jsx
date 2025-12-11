import React from 'react';
import ServiceCardsView from './ServiceCardsView';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import BlockDataForm from '@plone/volto/components/manage/Form/BlockDataForm';
import ServiceCardsSchema from './schema';

const ServiceCardsEdit = (props) => {
  const { block, data, onChangeBlock, selected } = props;

  const schema = ServiceCardsSchema(props);

  return (
    <>
      {/* Preview do bloco na página */}
      <ServiceCardsView {...props} />

      {/* Form na aba "Bloco" */}
      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          title={schema.title}
          formData={data}
          onChangeField={(id, value) =>
            onChangeBlock(block, {
              ...data,
              [id]: value,
            })
          }
          block={block}
        />
      </SidebarPortal>
    </>
  );
};

export default ServiceCardsEdit;
