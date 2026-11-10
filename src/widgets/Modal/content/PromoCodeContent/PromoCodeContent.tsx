import styles from './PromoCodeContent.module.css';
import { ButtonClose, useLocalizedData } from '@/shared';
import { getRebirthConfig } from '@/shared/config/getConfig';

export const PromoCodeContent = ({ onClose }: { onClose: () => void }) => {
  const { modal } = useLocalizedData();
  const config = getRebirthConfig();
  const noWipeServerCodes = config?.promoCodes?.noWipeServer ?? [];
  const newRebirthCodes = config?.promoCodes?.newRebirth ?? [];

  const groups = [
    { title: modal.promoCode.noWipeServerHeader, codes: noWipeServerCodes },
    { title: modal.promoCode.newRebirthHeader, codes: newRebirthCodes },
  ].filter((group) => group.codes.length > 0);

  return (
    <>
      <div className={styles.headerBox}>
        <h2 className={styles.header}>{modal.promoCode.header}</h2>
        <ButtonClose onClose={onClose} />
      </div>
      <div className={styles.groups}>
        {groups.length > 0 ? (
          groups.map((group) => (
            <div key={group.title} className={styles.group}>
              <h3 className={styles.groupHeader}>{group.title}</h3>
              <div className={styles.codes}>
                {group.codes.map((item) => (
                  <div key={item} className={styles.codeItem}>
                    <span className={styles.codeText}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className={styles.text}>{modal.promoCode.description}</p>
        )}
      </div>
    </>
  );
};
