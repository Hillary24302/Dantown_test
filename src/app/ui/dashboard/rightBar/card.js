import styles from "./rightBar.module.css";

const Card = ({ header, text, icon, circleColor }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.circle}
        style={{ backgroundColor: circleColor }}
      ></div>
      <div className={styles.content}>
        <span className={styles.header}>{header}</span>
        <span className={styles.text}>{text}</span>
      </div>
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};
export default Card;
