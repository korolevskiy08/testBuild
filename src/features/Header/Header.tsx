import React, { FC } from "react";

import { ReactComponent as Layout } from "../../assets/icon/3dMaket.svg";
import { ReactComponent as ContactPhone } from "../../assets/icon/contactsPhone.svg";
import { ReactComponent as Logo } from "../../assets/icon/Logo.svg";
import { ReactComponent as Phone } from "../../assets/icon/phone.svg";
import { ReactComponent as Telegram } from "../../assets/icon/telegram.svg";
import { ReactComponent as Viber } from "../../assets/icon/viber.svg";
import { Button } from "../../common/Components/Button/Button";

import style from "./header.module.css";

export const Header: FC = () => {
  return (
    <div className="container">
      <div className={style.header}>
        <Logo />
        <div className={style.workMode}>
          <p className={style.workText}>Пн-Сб: c 10:00 до 20:00</p>
          <p className={style.workText}>Выходной: воскресенье</p>
        </div>
        <div className={style.orderLayout}>
          <Layout className={style.layoutIcon} />
          <p className={style.textOrderLayout}>Заказать 3D-макет дома</p>
        </div>
        <div className={style.contacts}>
          <Phone className={style.phoneIcon} />
          <div className={style.contactsPhone}>
            <p className={style.phoneNumber}>+7 (915) 168-55-50</p>
            <div className={style.contactsMessengers}>
              <ContactPhone className={style.contactMessenger} />
              <Telegram className={style.contactMessenger} />
              <Viber className={style.contactMessenger} />
            </div>
          </div>
          <div className={style.call}>
            <Button onclick={() => {}}>Заказать звонок</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
