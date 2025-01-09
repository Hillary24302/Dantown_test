import Card from "./card";
import styles from "./rightBar.module.css";
import { SvgPup } from "../../svgIcons";
import { Divider } from "antd";

const Chats = () => {
  return (
    <div className={styles.chatsWrapper}>
      <div className={styles.chatscontent}>
        <span className={styles.chats}>Chats</span>
        <span className={styles.number}>15</span>
      </div>
      <div>
        <Card
          header="Ejike Hillary"
          text="When will the event be hold?"
          icon={<SvgPup />}
          circleColor="#D9EDFF"
        />
        <Divider className={styles.customDivider} />
        <Card
          header="Ariana Grande"
          text="Alright then. See you there"
          circleColor="#FFDAD9"
        />
        <Divider className={styles.customDivider} />
        <Card
          header="Ariana Grande"
          text="Come on join to my party!"
          circleColor="#D9DAFF"
        />
        <Divider className={styles.customDivider} />
        <Card
          header="Ariana Grande"
          text="Come on join to my party!"
          circleColor="#FFDAD9"
        />
      </div>
    </div>
  );
};
export default Chats;
