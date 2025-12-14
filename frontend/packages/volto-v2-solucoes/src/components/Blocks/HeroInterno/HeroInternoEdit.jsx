import React from 'react';
import { SidebarPortal, BlockDataForm } from '@plone/volto/components';
import HeroInternoView from './HeroInternoView';
import HeroInternoSchema from './schema';

const HeroInternoEdit = (props) => {
  const { data, block, onChangeBlock, selected } = props;
  const schema = HeroInternoSchema();

  return (
    <>
      <HeroInternoView data={data} />

      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          title={schema.title}
          formData={data}
          block={block}
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

export default HeroInternoEdit;
