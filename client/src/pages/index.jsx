import styles from "@/styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Your Trips</h2>
      <div className={styles.trip_container}>
        <div className={styles.trip_box}>
          <h3>Current Trips</h3>
        </div>
        <div className={styles.trip_box}>
          <h3>Upcoming Trips</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
