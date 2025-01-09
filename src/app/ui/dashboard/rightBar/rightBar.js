import Chats from "./chats";
import Message from "./message";
import styles from "./rightBar.module.css";

const RightBar = () => {
  return (
    <div className={styles.rightBar}>
      <Chats />
      <Message />
    </div>
  );
};
export default RightBar;
