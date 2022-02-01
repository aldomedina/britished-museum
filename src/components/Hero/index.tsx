import React from "react";
import img from "../../assets/home-bg.jpeg";

import components from "../../styles/components.module.scss";
import Button from "../Button";
import style from "./style.module.scss";

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.background}>
        <img className={style.bgImage} src={img} alt="home-hero" />
      </div>
      <div className={components.container}>
        <div className={style.body}>
          <div className={style.card}>
            <h2 className={components.header2}>
              Welcome to the Britished Museum, gonorreas
            </h2>
            <p>
              Experience cultures across the globe, from the dawn of human
              history to the present.
            </p>
            <Button>Plan your visit</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
