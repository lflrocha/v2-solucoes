import React from 'react';
import ServiceCard from '../../Elements/ServiceCard';
import './styles.less';

const ServiceCardsView = ({ data }) => {
  const cards = data?.cards || [];

  return (
    <section className="serviceCards">
      <div className="conteudo-centralizado">
        {data.title && <h2 className="serviceCards-title">{data.title}</h2>}

        <span className="line" aria-hidden="true" />

        <div className="serviceCards-grid">
          {cards.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsView;
