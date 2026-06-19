import styles from './CityItem.module.css';
import PropTypes from 'prop-types';
import ReactCountryFlag from 'react-country-flag';
import { Link } from 'react-router-dom';
import { useCities } from '../contexts/CitiesContext';

CityItem.propTypes = {
  city: PropTypes.shape({
    cityName: PropTypes.string,
    emoji: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.number,
    position: PropTypes.shape({ lat: PropTypes.number, lng: PropTypes.number }),
  }).isRequired,
};

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    // weekday: 'long',
  }).format(new Date(date));

function CityItem({ city }) {
  //   console.log('city', city);
  const { currentCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  return (
    <li>
      <Link
        className={`${styles.cityItem} ${id === currentCity.id ? styles['cityItem--active'] : ''}`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>
          {<ReactCountryFlag countryCode={emoji} svg />}
        </span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
