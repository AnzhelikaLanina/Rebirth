import styles from './WikiAutoHuntingContent.module.css';
import { useLocalizedData } from '@/shared/lib';

export const WikiAutoHuntingContent = () => {
  const { autoHunting } = useLocalizedData();

  const list = [
    autoHunting.fixedZone,
    autoHunting.skipUnfinishedTarget,
    autoHunting.disableRaidBosses,
    autoHunting.toggleOnMove,
    autoHunting.changeTargetDistance,
  ];
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{autoHunting.title}</h3>
        <div className={styles.image} />
      </div>
      <div className={styles.list}>
        <p className={styles.text}>{autoHunting.description}</p>
        {list.map((text, index) => (
          <div className={styles.box} key={index}>
            <p className={styles.text}>&bull; {text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
