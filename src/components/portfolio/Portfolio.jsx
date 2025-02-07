import styles from "./Portfolio.module.css";
import classNames from "classnames";
import SinglePortfolioCard from "./SinglePortfolioCard";
import { useState } from "react";
import react from "../../assets/react.svg";

function Portfolio() {
  const [title, setTitle] = useState("Title");
  const [img, setImg] = useState("react");
  console.log(react);

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <SinglePortfolioCard text={title} img={img} />
          <SinglePortfolioCard text={title} img={img} />
          <SinglePortfolioCard text={title} img={img} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
