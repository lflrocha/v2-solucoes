// packages/volto-v2-solucoes/src/components/Blocks/SuccessCases/SuccessCasesEdit.jsx

import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import SuccessCasesView from './SuccessCasesView';
import SuccessCasesSchema from './schema';
import { BlockDataForm } from '@plone/volto/components';

const SuccessCasesEdit = (props) => {
  const { data, block, onChangeBlock, selected } = props;

  const schema = SuccessCasesSchema(props.intl);

  return (
    <>
      <SuccessCasesView {...props} />
      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          title={schema.title}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          formData={data}
        />
      </SidebarPortal>
    </>
  );
};

export default SuccessCasesEdit;
