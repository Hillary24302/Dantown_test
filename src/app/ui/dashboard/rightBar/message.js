import { Span } from "next/dist/trace";
import styles from "./rightBar.module.css";
import { SvgCancel, Svgmoj, SvgSend } from "../../svgIcons";

const Message = () => {
  return (
    <div className={styles.message}>
      <div className={styles.boxheader}>
        <span className={styles.boxtext}>Ironman</span>
        <SvgCancel />
      </div>
      <div className={styles.textmessages}>
        <span className={styles.today}>Today</span>
        <div className={styles.sentmessages}>
          <span className={styles.recieved}>When will the event be held?</span>
          <span className={styles.time}>10:22 am</span>
        </div>
        <div className={styles.sentmessages}>
          <span className={styles.time}>10:24 am</span>
          <span className={styles.sent}>Tommorow at 4 pm</span>
        </div>
        <div className={styles.searchWrapper}>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Type here..."
              className={styles.input}
            />
            <Svgmoj />
          </div>
          <SvgSend />
        </div>
      </div>
    </div>
  );
};
export default Message;
