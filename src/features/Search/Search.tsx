import React, { FC } from "react";

import { Button } from "../../common/Components/Button/Button";
import { Input } from "../../common/Components/Input/Input";

import style from "./search.module.css";

export const Search: FC = () => {
  return (
    <div className={style.search}>
      <div className={style.cloud} />
      <div className={style.box} />
      <div className="container">
        <h2 className={style.searchTitle}>Не нашли то, что искали?</h2>
        <p className={style.searchText}>
          Заполните форму и мы перезвоним вам в течение 30 минут!
        </p>
        <Input inputStyle={style.input} placeholder="Ваше имя" />
        <Input inputStyle={style.input} placeholder="Номер телефона" />
        <Input
          inputStyle={style.question}
          placeholder="Ваш вопрос (необязательно)"
        />
        <Button className={style.button} onclick={() => {}}>
          Отправить
        </Button>
      </div>
      <div className={style.key} />
      <div className={style.bigCloud} />
    </div>
  );
};
