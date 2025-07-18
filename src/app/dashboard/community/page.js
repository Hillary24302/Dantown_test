import styles from "./community.module.css";
const CommunityPage = () => {
  const person = function(person){
    return person;
  }
  return <div className={styles.card}>
    <h1>Hello {person('Chioma')}</h1>
    </div>;
};
export default CommunityPage;
