import styles from './Advertisement.module.css';

export const Advertisement = () => {
  return (
    <div className={styles.main}>
      <a
        href="https://l2oops.com"
        style={{ zIndex: 99999 }}
        target="_blank">
        <img
          src="https://l2oops.com/logo/black_l2oops_mini.png"
          width="122"
          height="31"
          alt="Новые сервера Lineage 2"
          title="Новые сервера Lineage 2"/>
      </a>
    </div>
  );
}
