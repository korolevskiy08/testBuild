import React, { FC } from "react";

import { ReactComponent as ArrowRight } from "../../assets/icon/ArrowLeft.svg";
import { ReactComponent as ArrowLeft } from "../../assets/icon/ArrowRight.svg";
import rectangle from "../../assets/images/Rectangle 108.png";
import { Button } from "../../common/Components/Button/Button";

import style from "./slider.module.css";

export const Slider: FC = () => {
  const sliderItem = [
    {
      name: "Топас-С 4",
      children: "До 4 человек",
      beforeDiscount: "86 700 ₽",
      price: "78 030 ₽",
      cleaning: "0,8 м3/сут",
      reset: "175 л",
    },
    {
      name: "Топас-С 4 Пр",
      children: "До 4 человек",
      beforeDiscount: "98 300 ₽",
      price: "88 470 ₽",
      cleaning: "0,8 м3/сут",
      reset: "175 л",
    },
    {
      name: "Топас-С 5",
      children: "До 5 человек",
      beforeDiscount: "99 500 ₽",
      price: "89 550 ₽",
      cleaning: "1 м3/сут",
      reset: "220 л",
    },
  ];

  return (
    <>
      <div className={style.image}>
        <div className={style.water} />
        <div className={style.pipe} />
      </div>
      <div className={style.sliderBlock}>
        <div className={style.arrowLeftBlock}>
          <ArrowLeft />
        </div>
        <div className="container">
          <h2 className={style.sliderTitle}>Вам также могут понравиться</h2>
          <div className={style.sliderItems}>
            {sliderItem.map((el) => {
              return (
                <div className={style.sliderItem} key={el.name}>
                  <div className={style.sliderItemContent}>
                    <img className={style.rectangle} src={rectangle} alt="" />
                    <div className={style.sliderItemInfo}>
                      <h2 className={style.itemTitle}>{el.name}</h2>
                      <p className={style.children}>{el.children}</p>
                      <p className={style.beforeDiscount}>
                        {el.beforeDiscount}
                      </p>
                      <p className={style.price}>{el.price}</p>
                      <div className={style.textBlock}>
                        <p>очистка:</p>
                        <p>{el.cleaning}</p>
                      </div>
                      <div className={style.textBlock}>
                        <p>Залповый сброс:</p>
                        <p>{el.reset}</p>
                      </div>
                    </div>
                  </div>
                  <div className={style.buttonBlock}>
                    <Button className={style.more} onclick={() => {}}>
                      Подробнее
                    </Button>
                    <Button className={style.toOrder} onclick={() => {}}>
                      Заказать
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.arrowRightBlock}>
          <ArrowRight />
        </div>
      </div>
    </>
  );
};
