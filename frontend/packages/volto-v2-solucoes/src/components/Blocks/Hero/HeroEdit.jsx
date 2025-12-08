import React from 'react';
import { SidebarPortal, BlockDataForm } from '@plone/volto/components';
import HeroView from './HeroView';
import HeroSchema from './schema';

const HeroEdit = (props) => {
  const { data, block, onChangeBlock, selected } = props;
  const schema = HeroSchema();

  return (
    <>
      <HeroView data={data} />

      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          title={schema.title}
          onChangeField={(id, value) =>
            onChangeBlock(block, {
              ...data,
              [id]: value,
            })
          }
          formData={data}
          block={block}
        />
      </SidebarPortal>
    </>
  );
};

export default HeroEdit;
