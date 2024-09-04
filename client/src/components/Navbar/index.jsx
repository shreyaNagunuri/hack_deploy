import Link from "next/link";
import styles from "./style.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.title}>
        <Link href="/">HackTravels</Link>
      </div>
      <div className={styles.nav_buttons}>
        <Link href="/uploadTrip">Upload</Link>
      </div>
    </div>
  );
};

export default Navbar;
