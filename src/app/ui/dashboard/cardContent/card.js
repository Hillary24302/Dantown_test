import styles from "./cardContent.module.css";

const Card = ({ icon, headerText, plaintext }) => {
  return (
    <div className={styles.card}>
      <div className={styles.illustration}>{icon}</div>
      <div className={styles.text}>
        <span className={styles.textHeader}>{headerText}</span>
        <span className={styles.textPlain}>{plaintext}</span>
      </div>
    </div>
  );
};
export default Card;
