import styles from './ItemCard.module.css';
import { TableItemProps, parseTextWithIcons } from '@/shared';

export const ItemCard = ({ src, alt, text }: TableItemProps) => {
  return (
    <div className={styles.box}>
      {src && <img className={styles.img} src={src} alt={alt} />}
      <p className={styles.text}>{parseTextWithIcons(text)}</p>
    </div>
  );
};
