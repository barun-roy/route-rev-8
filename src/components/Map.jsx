import { NavLink } from 'react-router-dom';
import styles from './Map.module.css';

function Map() {
  return (
    <div className={styles.mapContainer}>
      <NavLink to="form">Form</NavLink>
    </div>
  );
}

export default Map;
