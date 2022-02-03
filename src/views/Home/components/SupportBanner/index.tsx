import React from "react";
import cn from "classnames";
import Button from "../../../../components/Button";

import s from "./style.module.scss";
import c from "../../../../styles/components.module.scss";

const SupportBanner = () => {
  return (
    <div className={s.wrapper}>
      <div className={c.container}>
        <div className={s.inner}>
          <div className={s.card}>
            <h2 className={cn(c.h2, s.title)}>We need your support</h2>
            <div className={s.content}>
              <p>
                Your support is vital and helps the Museum to share the
                collection with the world.
              </p>
              <Button styleType="block">Make a donation</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportBanner;
