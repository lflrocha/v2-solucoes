import React from 'react';
import V2ContactSection from './V2ContactSection';

const View = ({ data }) => {
  return (
    <V2ContactSection
      title={data.title}
      subtitle={data.subtitle}
      phone={data.phone}
      email={data.email}
      image={data.image}
    />
  );
};

export default View;
