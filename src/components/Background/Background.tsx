import * as React from 'react';
import { FC, PropsWithChildren } from "react";

import defaultBG from "../../assets/images/Clear-bg.jpg";

import style from "./Background.module.scss";

type T_BackgroundProps = PropsWithChildren<{ src?: string;}>;

export const Background: FC<T_BackgroundProps> = ({ children }) => {
  const imgSrc = defaultBG;
  return (
    <div className={global["container"]}>
      <img src={imgSrc} alt={"background"} className={style["background"]} />
      {children}
    </div>
  );
};
