import React from "react";
import { Link } from "react-router-dom";
import paths from "../../../../containers/Router/paths";

import s from "./style.module.scss";
import c from "../../../../styles/components.module.scss";

const Exhibition = () => {
  return (
    <div className={s.wrapper}>
      <div className={c.container}>
        <div className={s.innerWrapper}>
          <div className={s.header}>
            <h2 className={c.h2}>Exhibitions and events</h2>
            <Link to={paths.collection()}>See all exhibitions and events</Link>
          </div>
          <div className={s.body}>
            <article className={s.card}>
              <div className={s.content}>
                <div className={s.innerContent}>
                  <h3 className={c.header1}>Peru a journey in time</h3>
                </div>
              </div>
              <div className={s.image} />
            </article>
            <article className={s.card}>
              <div className={s.content}>
                <div className={s.innerContent}>
                  <h3 className={c.header1}>The world of Stonehenge</h3>
                </div>
              </div>
              <div className={s.image} />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;
