import { RingLoader } from 'react-spinners';
import styles from './Spinner.module.css';

export const Spinner = () => (
  <div className={styles.spinner}>
    <RingLoader color="#20f129" size={80} />
  </div>
);