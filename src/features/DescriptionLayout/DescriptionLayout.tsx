import React, { FC } from "react";

import { Button } from "../../common/Components/Button/Button";
import { Input } from "../../common/Components/Input/Input";

import style from "./description-layout.module.css";

export const DescriptionLayout: FC = () => {
  return (
    <div className="container">
      <div className={style.descriptionLayoutBlock}>
        <div className={style.details}>
          <h2 className={style.detailsTitle}>Обсудим детали?</h2>
          <Input inputStyle={style.inputStyle} placeholder="Ваше имя" />
          <Input inputStyle={style.inputStyle} placeholder="Номер телефона" />
          <Button className={style.button} onclick={() => {}}>
            Хочу обсудить детали
          </Button>
        </div>
        <div className={style.descriptionLayout}>
          <h2 className={style.detailsTitle}>Описание модели</h2>
          <p className={style.descriptionText}>
            Индивидуальная система биологической очистки Топас-С 4, как и другие
            УОСВ из данного модельного ряда, очищают стоки до 98% без вреда для
            экологии. Все модификации септика ТОПАС-С 4 очищают до 0.8 м3
            сточных вод в сутки и имеют максимальный залповый сброс в районе 175
            литров. Уже отработанную воду можно накапливать в отдельном
            резервуаре и в дальнейшем использовать для хозяйственных нужд или
            производить сброс очищенной воды в ливневую канаву (для моделей Пр
            со встороенным насосом).
          </p>
        </div>
      </div>
    </div>
  );
};
