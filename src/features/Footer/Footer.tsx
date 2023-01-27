import React, { FC } from "react";

import { ReactComponent as Facebook } from "../../assets/icon/facebook.svg";
import { ReactComponent as Instagramm } from "../../assets/icon/instagramm.svg";
import { ReactComponent as Logo } from "../../assets/icon/Logo.svg";
import { ReactComponent as Vk } from "../../assets/icon/vk.svg";
import { ReactComponent as Youtube } from "../../assets/icon/youtube.svg";
import logoWhite from "../../assets/images/logohite.png";
import { Button } from "../../common/Components/Button/Button";

import style from "./footer.module.css";

export const Footer: FC = () => {
  const navFooter = [
    { id: 1, title: "Главная" },
    { id: 2, title: "Каталог" },
    { id: 3, title: "Услуги" },
    { id: 4, title: "Рассчет стоимости" },
    { id: 5, title: "Консультация архитектора" },
    { id: 6, title: "Экскурсия на обьект" },
    { id: 7, title: "3D-макет дома" },
    { id: 8, title: "О нас" },
    { id: 9, title: "Блог" },
    { id: 10, title: "Контакты" },
  ];

  return (
    <div className={style.footer}>
      <div className="container">
        <div className={style.footerContent}>
          <div className={style.logoBlock}>
            <Logo className={style.logo} />
            <Button className={style.buttonCall} onclick={() => {}}>
              Заказать звонок
            </Button>
          </div>
          <ul className={style.navList}>
            {navFooter.map((el) => {
              return (
                <li className={style.navItem} key={el.id}>
                  {el.title}
                </li>
              );
            })}
          </ul>
          <div>
            <p className={style.titleSocial}>
              Делимся крутыми проектами в соц.сетях. Подписывайтесь!
            </p>
            <ul className={style.social}>
              <li className={style.socialItem}>
                <Vk />
              </li>
              <li className={style.socialItem}>
                <Instagramm />
              </li>
              <li className={style.socialItem}>
                <Facebook />
              </li>
              <li className={style.socialItem}>
                <Youtube />
              </li>
            </ul>
            <p className={style.promotion}>Разработка и продвижение сайта:</p>
            <img src={logoWhite} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
