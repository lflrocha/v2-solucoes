// src/components/Blocks/SplitMediaSection/SplitMediaSectionEdit.jsx

import React from 'react';
import { SidebarPortal, BlockDataForm } from '@plone/volto/components';

import SplitMediaSectionSchema from './SplitMediaSectionSchema';
import SplitMediaSectionView from './SplitMediaSectionView';

const SplitMediaSectionEdit = (props) => {
  const { block, data, selected, onChangeBlock } = props;

  const schema = SplitMediaSectionSchema(props);

  const handleChange = (newData) => {
    onChangeBlock(block, {
      ...data,
      ...newData,
    });
  };

  // função “tradutora” para o caso do Volto usar onChangeField
  const handleFieldChange = (fieldId, value) => {
    handleChange({
      [fieldId]: value,
    });
  };

  return (
    <>
      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          formData={data}
          // 1) caminho moderno
          onChangeFormData={handleChange}
          // 2) fallback para versões / usos que esperam onChangeField
          onChangeField={handleFieldChange}
        />
      </SidebarPortal>

      <SplitMediaSectionView {...props} />
    </>
  );
};

export default SplitMediaSectionEdit;
