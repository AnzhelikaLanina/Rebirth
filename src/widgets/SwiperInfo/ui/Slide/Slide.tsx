import styles from './Slide.module.css';

type SlideProps = {
  header: string;
  text: string;
};

export const Slide = ({ header, text }: SlideProps) => {
  return (
    <div className={styles.slide}>
      <h3 className={styles.header}>{header}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
