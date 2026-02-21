import { IPlacesFoundProps } from '../../types/types.props';

export default function PlacesFound({ countOffers, cityName }: IPlacesFoundProps): JSX.Element {

  // const countOffersOfCity = filteredOffers?.length;
  // let cityName: string = '';
  // if (countOffersOfCity) {
  //   cityName = filteredOffers[0].city.name;
  // }


  return (
    <b className="places__found">{countOffers} places to stay in {cityName}</b>
  );
}
