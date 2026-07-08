import styles from './PromoCodeContent.module.css';
import { ButtonClose, useLocalizedData } from '@/shared';
import { getRebirthConfig } from '@/shared/config/getConfig';

export const PromoCodeContent = ({ onClose }: { onClose: () => void }) => {
  const { modal } = useLocalizedData();
  const config = getRebirthConfig();
  const promoCodes = config?.promoCodes ?? [];

  return (
    <>
      <div className={styles.headerBox}>
        <h2 className={styles.header}>{modal.promoCode.header}</h2>
        <ButtonClose onClose={onClose} />
      </div>
      <div className={styles.codes}>
          {promoCodes.length > 0 ? (
            promoCodes.map((item: string) => (
              <div key={item} className={styles.codeItem}>
                <span className={styles.codeText}>{item}</span>
              </div>
            ))
          ) : (
            <p className={styles.text}>{modal.promoCode.description}</p>
          )}
        </div>
    </>
  );
};