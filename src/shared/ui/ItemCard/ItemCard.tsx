import styles from './ItemCard.module.css';
import { TableItemProps } from '@/shared/types';

export const ItemCard = ({ src, alt, text }: TableItemProps) => {
  return (
    <div className={styles.box}>
      <img className={styles.img} src={src} alt={alt} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};