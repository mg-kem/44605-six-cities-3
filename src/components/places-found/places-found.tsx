import { IPlacesFoundProps } from '../../types/types.props';

export default function PlacesFound({ filteredOffers }: IPlacesFoundProps): JSX.Element {

  const countOffersOfCity = filteredOffers?.length;
  let cityName: string = '';
  if (countOffersOfCity) {
    cityName = filteredOffers[0].city.name;
  }


  return (
    <b className="places__found">{countOffersOfCity} places to stay in {cityName}</b>
  );
}
