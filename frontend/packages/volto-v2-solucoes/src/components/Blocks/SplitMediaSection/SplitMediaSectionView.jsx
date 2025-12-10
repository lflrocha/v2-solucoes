import React from 'react';
import cx from 'classnames';
import './styles.less';

import { resolveImageUrl } from '../../../utils/resolveImageUrl';
import Button from '../../Elements/Button';

const SplitMediaSectionView = ({ data }) => {
  const side = data.imagePosition || 'left';
  const imageUrl = resolveImageUrl(data.image);

  const descriptionHtml =
    typeof data.description === 'string'
      ? data.description
      : data.description?.data || '';

  return (
    <section
      className={cx('split-media-section', {
        'image-left': side === 'left',
        'image-right': side === 'right',
      })}
    >
      <div className="bg-shape" aria-hidden="true" />

      <div className="inner conteudo-centralizado">
        <div className="image-wrapper">
          {imageUrl && <img src={imageUrl} alt={data.imageAlt || ''} />}
        </div>

        <div className="content">
          {data.title && <h2>{data.title}</h2>}

          <span className="line" aria-hidden="true" />

          {data.subtitle && <h3 className="subtitle">{data.subtitle}</h3>}

          {descriptionHtml && (
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />
          )}

          {data.listItems?.length > 0 && (
            <ul className="bullets">
              {data.listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          {data.buttonLabel && data.buttonUrl && (
            <Button href={data.buttonUrl} variant="primary">
              {data.buttonLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default SplitMediaSectionView;
