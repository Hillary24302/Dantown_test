import CardContent from "../ui/dashboard/cardContent/cardContent";
import styles from "../ui/dashboard/dashboard.module.css";
import RightBar from "../ui/dashboard/rightBar/rightBar";
import FriendsList from "../ui/dashboard/friendsList/friendsList";

const Home = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContent}>
        <CardContent />
        <FriendsList />
      </div>
      <div className={styles.RightBar}>
        <RightBar />
      </div>
    </div>
  );
};
export default Home;
