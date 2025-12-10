import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import { BlockDataForm } from '@plone/volto/components';

import V2ContactSection from './V2ContactSection';
import V2ContactSchema from './V2ContactSchema';

const Edit = (props) => {
  const { data, block, onChangeBlock, selected } = props;
  const schema = V2ContactSchema(props);

  return (
    <>
      <V2ContactSection
        title={data.title}
        subtitle={data.subtitle}
        phone={data.phone}
        email={data.email}
        image={data.image}
      />

      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          title={schema.title}
          formData={data}
          block={block}
          onChangeField={(field, value) =>
            onChangeBlock(block, { ...data, [field]: value })
          }
        />
      </SidebarPortal>
    </>
  );
};

export default Edit;
