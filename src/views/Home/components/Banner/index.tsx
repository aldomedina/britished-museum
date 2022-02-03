import React from "react";
import cn from "classnames";

import s from "./style.module.scss";
import c from "../../../../styles/components.module.scss";

const HomeBanner = () => {
  return (
    <div className={s.banner}>
      <div className={c.container}>
        <div className={s.innerSection}>
          <h2 className={cn(c.h2, s.title)}>
            Discover two million years of human history and culture
          </h2>
          <ul className={s.content}>
            <li> Free entry – book online(Opens in new window)</li>
            <li> Open today: 10.00–17.00</li>
            <li> Last entry: 16.00</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
