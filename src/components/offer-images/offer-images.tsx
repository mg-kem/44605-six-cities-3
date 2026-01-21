const IMAGES = [
  'img/room.jpg',
  'img/apartment-01.jpg',
  'img/apartment-02.jpg',
  'img/apartment-03.jpg',
  'img/studio-01.jpg',
  'img/studio-photos.jpg'
] as const;

export default function OfferImages(): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {IMAGES.map((src) => (
          <div className="offer__image-wrapper" key={src}>
            <img className="offer__image" src={src} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}
