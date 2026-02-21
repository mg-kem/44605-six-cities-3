import { memo } from 'react';
import { IOfferImagesProps } from '../../types/types.props';

function OfferImages({ images }: IOfferImagesProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((src) => (
          <div className="offer__image-wrapper" key={src}>
            <img className="offer__image" src={src} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(OfferImages);
