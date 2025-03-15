import Image from "next/image";
import styles from "./page.module.css";
import LeftSection from "../Components/LeftSection";
import RightSection from "../Components/RightSection";


export default function Home() {
  return (
    <div className={styles.mainpage}>
      <div className={styles.leftOut}>
        <LeftSection /> {/* LeftSection inside leftOut */}
      </div>
      <div className={styles.rightOut}>
        <RightSection /> {/* RightSection inside rightOut */}
      </div>
    </div>
  );
}
