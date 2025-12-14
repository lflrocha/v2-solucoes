import React from 'react';
import { SidebarPortal, BlockDataForm } from '@plone/volto/components';

import schema from './schema';
import SplitTextSectionView from './SplitTextSectionView';

const SplitTextSectionEdit = (props) => {
  const { block, data, selected, onChangeBlock } = props;

  const blockSchema = schema();

  const handleChange = (newData) => {
    onChangeBlock(block, { ...data, ...newData });
  };

  const handleFieldChange = (fieldId, value) => {
    handleChange({ [fieldId]: value });
  };

  return (
    <>
      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={blockSchema}
          formData={data}
          block={block}
          onChangeBlock={onChangeBlock}
          onChangeFormData={handleChange}
          onChangeField={handleFieldChange}
        />
      </SidebarPortal>

      <SplitTextSectionView {...props} />
    </>
  );
};

export default SplitTextSectionEdit;
