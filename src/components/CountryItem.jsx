import styles from './CountryItem.module.css';
import PropTypes from 'prop-types';
import ReactCountryFlag from 'react-country-flag';

CountryItem.propTypes = {
  countryDetail: PropTypes.shape({
    country: PropTypes.string,
    emoji: PropTypes.string,
  }),
};

function CountryItem({ countryDetail }) {
  const { country, emoji } = countryDetail;
  return (
    <li className={styles.countryItem}>
      <span>{<ReactCountryFlag countryCode={emoji} svg />}</span>
      <span>{country}</span>
    </li>
  );
}

export default CountryItem;
