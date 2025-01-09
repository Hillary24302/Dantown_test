import { SvgCycle, SvgSkater, SvgYoga } from "../../svgIcons";
import Card from "./card";
import styles from "./cardContent.module.css";

const CardContent = () => {
  return (
    <div className={styles.cardContent}>
      <Card
        icon={<SvgCycle />}
        headerText="Real Wild Cyclist"
        plaintext="We are the wildest cyclist."
      />
      <Card
        icon={<SvgYoga />}
        headerText="Yoga Forces"
        plaintext="Welcome to the biggest..."
      />
      <Card
        icon={<SvgSkater />}
        headerText="Skater Boys"
        plaintext="The best states of skaters."
      />
    </div>
  );
};
export default CardContent;
