import PropTypes from 'prop-types';

import styles from './CountryList.module.css';
import Spinner from './Spinner';
import Message from './Message';
import CountryItem from './CountryItem';
import { useCities } from '../contexts/CitiesContext';

CountryList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      cityName: PropTypes.string,
    })
  ),
  isLoading: PropTypes.bool,
};

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your first city by clicking on the map" />;

  const countries = [
    ...new Map(
      cities.map((city) => [
        city.country,
        { country: city.country, emoji: city.emoji },
      ])
    ).values(),
  ];

  return (
    <ul className={styles.countryList}>
      {countries?.map((country) => (
        <CountryItem key={country.country} countryDetail={country} />
      ))}
    </ul>
  );
}

export default CountryList;
