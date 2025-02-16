import styles from "./Skills.module.css";
import classNames from "classnames";
import html from "../../assets/HTML5_logo_and_wordmark.svg";
import css from "../../assets/CSS3_logo_and_wordmark.svg";
import javascript from "../../assets/JavaScript-logo.png";
import bootstrap from "../../assets/Bootstrap_logo.svg";
import npm from "../../assets/Npm-logo.svg";
import figma from "../../assets/Figma-logo.svg";
import react from "../../assets/react.svg";
import git from "../../assets/Git_icon.svg";
import sass from "../../assets/Sass_Logo_Color.svg";
import tailwind from "../../assets/Tailwind_CSS_Logo.svg";

function Skills() {
  return (
    <div className="container w-100 h-100">
      <div
        className="d-flex flex-column justify-content-center h-100 w-100"
        style={{
          overflowY: "scroll",
          WebkitScrollSnapType: "none",
          scrollbarWidth: "none", // Firefox uchun
          msOverflowStyle: "none", // IE va eski Edge uchun
        }}
      >
        <h1 className={classNames(styles.h1, styles.textGrad, "text-center")}>
          Skills
        </h1>
        <h2 className="text-center">
          The skills, tools and technologies I use:
        </h2>
        <div
          className="d-flex flex-wrap gap-3 w-100 justify-content-center pt-4"
          style={{ margin: "0 auto", width: "45%" }}
        >
          <div className="row m-0 p-0 align-items-center justify-content-center g-3 text-center">
            <div className="col-4 ">
              <img
                src={html}
                alt="html"
                style={{ width: "4rem", height: "4rem" }}
              />
            </div>
            <div className="col-4 ">
              <img
                src={css}
                alt="css"
                style={{ width: "4rem", height: "4rem" }}
              />
            </div>
            <div className="col-4 ">
              <img
                src={javascript}
                alt="javascript"
                style={{ width: "4rem", height: "4rem" }}
              />
            </div>
            <div className="col-4 ">
              <img
                src={react}
                alt="react"
                style={{ width: "4rem", height: "4rem" }}
              />
            </div>
            <div className="col-4 ">
              <img
                src={bootstrap}
                alt="bootstrap"
                style={{ width: "4rem", height: "4rem" }}
              />
            </div>
            <div className="col-4 ">
              <img
                src={npm}
                alt="npm"
                style={{ width: "4rem", height: "4rem" }}
              />
            </div>
            <div className="col-4 ">
              <img
                src={figma}
                alt="figma"
                style={{ width: "4rem", height: "4rem" }}
              />
            </div>
            <div className="col-4 ">
              <img
                src={git}
                alt="git"
                style={{ width: "4rem", height: "4rem" }}
              />
            </div>
            <div className="col-4 ">
              <img
                src={sass}
                alt="sass"
                style={{ width: "4rem", height: "4rem" }}
              />
            </div>
            <div className="col-4 ">
              <img
                src={tailwind}
                alt="tailwind"
                style={{ width: "4rem", height: "4rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
