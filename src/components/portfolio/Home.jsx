import styles from "./Home.module.css";
import classNames from "classnames";
function Home() {
  return (
    // <>
    //   <div className={styles.left}>
    //     <h1 className={classNames(styles.h1, styles.textGrad)}>
    //       FRONTEND DEVELOPER
    //     </h1>
    //     <h4 className="h4">
    //       I am Javohir - <span>web-developer</span> width a passion for creating
    //       beautiful and responsive websites
    //     </h4>
    //     <button className={styles.btnGrad}>VIEW MY WORK</button>
    //   </div>
    //   <div className="right"></div>
    // </>

    <section className="home-section" id="home" style={{ height: "93vh" }}>
      <div className="container">
        <div className="home-body">
          <h1 className="fw-semibold mb-4 mt-3">I AM JAVOHIR XOLMAMATOV</h1>
          <p className="mb-4 fs-5">
            I'm a web developer who loves bringing innovative ideas to life.{" "}
            <br />
            I'm always eager to learn new technologies and <br />
            continuously work on improving my skills.
          </p>
          <div className="button">
            <br />
            <button id="download-btn" className="btn1">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
