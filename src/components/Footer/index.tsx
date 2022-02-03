import React from "react";

import c from "../../styles/components.module.scss";
import s from "./style.module.scss";

const Footer = () => {
  return (
    <div className={s.wrapper}>
      <div className={c.container}>
        <div className={c.inner}>
          <h2 className={c.h2}> FOOTER</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
