import styles from "./About.module.css";
import classNames from "classnames";

function AboutMe() {
  return (
    <div className="d-flex row align-items-center" style={{ height: "82vh" }}>
      <div className="col-4">
        <img src="#" alt="#" />
      </div>
      <div className="col-8">
        <h3 className="mb-4 fw-bold">
          I'm Javohir Xolmamatov and{" "}
          <span className="text-danger">Developer</span>
        </h3>
        <p className="mb-4 lh-lg fw-semibold ">
          Hi! My name is <span className="text-danger">Javohir Xolmamatov</span>
          . I am a Web developer, and I'm very passionate and dedicated to my
          work. With 20 years experience as a profissional Web developer. I have
          acquired the skills and knowledge neseccary to make your project a
          success.
        </p>
        <div className="row fw-bold">
          <p className="col-6">
            <i className="bi bi-gift text-danger"></i> Birthday:{" "}
            <span className="text-body-secondary">02.03.2002</span>
          </p>
          <p className="col-6">
            <i className="bi bi-calendar-date text-danger"></i> {""}
            Age: <span className="text-body-secondary">22</span>
          </p>
          <p className="col-6">
            <i className="bi bi-geo-alt text-danger"></i> {""}
            Location:{" "}
            <span className="text-body-secondary">
              Qashqadaryo, Qamashi, Chim
            </span>
          </p>
          <p className="col-6">
            <i className="bi bi-controller text-danger"></i> {""}
            Interests:{" "}
            <span className="text-body-secondary">
              Football, Reading, Chess
            </span>
          </p>
          <p className="col-6">
            <i className="bi bi-bank text-danger"></i> {""}
            Study:{" "}
            <span className="text-body-secondary">
              Tashkent university of information technologies
            </span>
          </p>
          <p className="col-6">
            <i className="bi bi-mortarboard text-danger"></i> {""}
            Degree: <span className="text-body-secondary">Bachelor</span>
          </p>
          <p className="col-6">
            <i className="bi bi-envelope text-danger"></i> {""}
            Mail:{" "}
            <span className="text-body-secondary">
              xolmamatovjavohir390@gmail.com
            </span>
          </p>
          <p className="col-6 pb-3">
            <i className="bi bi-phone text-danger"></i> {""}
            Phone: <span className="text-body-secondary">+99894 988 04 77</span>
          </p>
        </div>
        <button className={styles.btnGrad}>
          Download CV {""}
          {""}
          <i className="bi bi-download text-white"></i>
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
