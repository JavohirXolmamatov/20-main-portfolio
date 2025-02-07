import styles from "./Home.module.css";
import classNames from "classnames";
function Home() {
  return (
    <>
      <div className={styles.left}>
        <h1 className={classNames(styles.h1, styles.textGrad)}>
          FRONTEND DEVELOPER
        </h1>
        <h4 className="h4">
          I am Javohir - <span>web-developer</span> width a passion for creating
          beautiful and responsive websites
        </h4>
        <button className={styles.btnGrad}>VIEW MY WORK</button>
      </div>
      <div className="right"></div>
    </>
  );
}

export default Home;
