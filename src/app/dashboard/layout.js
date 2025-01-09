import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Topbar from "../ui/dashboard/toppbar/topbar";
import styles from "../ui/dashboard/dashboard.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Topbar />
        {children}
      </div>
    </div>
  );
};
export default Layout;
