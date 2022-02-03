import React from "react";

import s from "./style.module.scss";
import c from "../../../../styles/components.module.scss";

const CollectionSection = () => {
  return (
    <div className={s.wrapper}>
      <div className={c.container}>
        <div className={s.inner}>
          <h2 className={c.h2}>Explore the collection</h2>
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
