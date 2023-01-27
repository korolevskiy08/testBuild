import React, { FC } from "react";

import { ReactComponent as ArrowNav } from "../../assets/icon/arrowNav.svg";

import style from "./navbar.module.css";

export const NavBar: FC = () => {
  const navItems = [
    { id: 1, name: "Каталог домов" },
    { id: 2, name: "Услуги" },
    { id: 3, name: "О нас" },
    { id: 4, name: "Контакты" },
    { id: 5, name: "Блог" },
  ];

  return (
    <div className="container">
      <ul className={style.navList}>
        {navItems.map((el) => {
          return (
            <li className={style.itemList} key={el.id}>
              {el.name}
              {el.name !== "Контакты" ? (
                <ArrowNav className={style.arrowNav} />
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
