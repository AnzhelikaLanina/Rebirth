import styles from './WikiLayout.module.css';

type WikiLayoutProps = {
  title: string;
  children: React.ReactNode;
  id: string;
  imgStyle: string;
};

export const WikiLayout = ({
  title,
  children,
  id,
  imgStyle,
}: WikiLayoutProps) => {
  return (
    <div className={styles.content} id={id}>
      <div className={styles.info}>
        <h3 className={styles.header}>{title}</h3>
        <div className={imgStyle} />
      </div>
      {children}
    </div>
  );
};
