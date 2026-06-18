import styles from './CityItem.module.css';
import PropTypes from 'prop-types';
import ReactCountryFlag from 'react-country-flag';

CityItem.propTypes = {
  city: PropTypes.shape({
    cityName: PropTypes.string,
    emoji: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(date));

function CityItem({ city }) {
//   console.log('city', city);
  const { cityName, emoji, date } = city;
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>
        {<ReactCountryFlag countryCode={emoji} svg />}
      </span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>({formatDate(date)})</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;
