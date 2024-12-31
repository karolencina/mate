import styles from "./page.module.css";
import MateInteraction from "./_components/MateInteraction";

const Home = () => {
  return (
    <div className={styles.page}>
      <MateInteraction />
    </div>
  );
};

export default Home;
