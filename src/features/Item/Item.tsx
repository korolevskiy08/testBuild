import React, { FC } from "react";

import { ReactComponent as Binoculars } from "../../assets/icon/Binoculars.svg";
import { ReactComponent as Calc } from "../../assets/icon/Calc.svg";
import { ReactComponent as Compass } from "../../assets/icon/Compas.svg";
import { ReactComponent as Scroll } from "../../assets/icon/Scroll.svg";
import { ReactComponent as ScrollItem } from "../../assets/icon/ScrollItem.svg";
import { ReactComponent as Worker } from "../../assets/icon/Worker.svg";
import item1 from "../../assets/images/item1.png";
import item2 from "../../assets/images/item2.png";
import item3 from "../../assets/images/item3.png";
import item4 from "../../assets/images/item4.png";
import item5 from "../../assets/images/item5.png";

import style from "./item.module.css";

export const Item: FC = () => {
  const itemInfo = [
    { id: 1, name: "Количество пользователей:", info: "4 человека" },
    { id: 2, name: "Производительность:", info: "0.8 м3/сут" },
    { id: 3, name: "Объем залпового сброса:", info: "175 л." },
    { id: 4, name: "Глубина подводящей трубы:", info: "40-80 см" },
    { id: 5, name: "Потребляемая электроэнергия:", info: "1500 Вт/сут." },
  ];

  const panel = [
    { id: 1, svg: <Calc /> },
    { id: 2, svg: <Binoculars /> },
    { id: 3, svg: <Compass /> },
    { id: 4, svg: <Worker /> },
  ];

  return (
    <div className={style.item}>
      <div className="container">
        <h1 className={style.nameItem}>Топас-С 4</h1>
        <div className={style.scroll}>
          <Scroll className={style.scroll} />
          <ScrollItem className={style.scrollItem} />
        </div>
        <div className={style.descriptionBlock}>
          <div className={style.imageBlock}>
            <div className={style.verticalImage}>
              <img src={item1} alt="" />
              <img src={item2} alt="" />
              <img src={item3} alt="" />
              <img src={item4} alt="" />
            </div>
            <img src={item5} alt="" />
          </div>
          <div className={style.info}>
            <ul className={style.infoList}>
              {itemInfo.map((el) => {
                return (
                  <li className={style.itemInfo} key={el.id}>
                    <p>{el.name}</p>
                    <p>{el.info}</p>
                  </li>
                );
              })}
            </ul>
            <div className={style.panelBlock}>
              {panel.map((el) => {
                return (
                  <div className={style.panelItem} key={el.id}>
                    {el.svg}
                  </div>
                );
              })}
            </div>
            <div className={style.priceBlock}>
              <p className={style.priceText}>Цена: </p>
              <p className={style.price}>78 030 ₽</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
