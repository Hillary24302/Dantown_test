import styles from "./topbar.module.css";
import Image from "next/image";
import { MdSearch } from "react-icons/md";
import { SvgMessage, SvgNotification } from "../../svgIcons";
import KDropdown from "./dropDown";
import Profile from "../../../../../public/img.png";

const Topbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.nameitem}>Hey, Hillary!</span>
        <span className={styles.text}>
          Welcome back, nice to see you again!
        </span>
      </div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.iconsWrapper}>
          <div className={styles.icons}>
            <SvgMessage />
            <SvgNotification />
          </div>
          <div className={styles.dropdown}>
            <Image src={Profile} alt="logo" width={30} height={30} />
            <KDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
