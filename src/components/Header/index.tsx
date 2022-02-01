import React from "react";
import classNames from "classnames";
import logo from "../../assets/logo.svg";

import style from "./style.module.scss";
import components from "../../styles/components.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={components.container}>
        <div className={style.wrapper}>
          <img className={style.logo} src={logo} alt="logo" />
          <nav>
            <ul className={classNames(style.menu, style.secondaryMenu)}>
              <li>Shop </li>
              <li>Search </li>
              <li>Donate </li>
            </ul>
            <ul className={classNames(style.menu, style.primaryMenu)}>
              <li> Visit</li>
              <li> Exhibitions and events</li>
              <li> Collection</li>
              <li> Learn</li>
              <li> Membership</li>
              <li> Support us </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
