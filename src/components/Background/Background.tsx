import * as React from 'react';
import { FC, PropsWithChildren } from "react";

import clearBG from "../../assets/images/Clear-bg.jpg";
import cloudsBG from "../../assets/images/Clouds-bg.jpg";
import dustBG from "../../assets/images/Dust-bg.jpg";
import mistBG from "../../assets/images/Mist-bg.jpg";
import rainBG from "../../assets/images/Rain-bg.jpg";
import smokeBG from "../../assets/images/Smoke-bg.jpg";
import snowBG from "../../assets/images/Snow-bg.jpg";
import squalBG from "../../assets/images/Squal-bg.jpg";
import thunderstormBG from "../../assets/images/Thunderstorm-bg.jpg";
import tornadoBG from "../../assets/images/Tornado-bg.jpg";

import style from "./Background.module.scss";

type T_BackgroundProps = PropsWithChildren<{ background?: string;}>;

export const Background: FC<T_BackgroundProps> = ({ children, background }) => {
  const imgSrc = background ? "../../assets/images/" + background : clearBG;
  return (
    <div className={style["container"]}>
      <img src={imgSrc} alt={"background"} className={style["background"]} />
      {children}
    </div>
  );
};
