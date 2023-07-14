import * as React from 'react';
import { FC, PropsWithChildren } from "react";

import { getBackground } from '../../utils/getBackground.tsx';

import style from "./Background.module.scss";

type T_BackgroundProps = PropsWithChildren<{ background?: string;}>;

export const Background: FC<T_BackgroundProps> = ({ children, background }) => {
  const imgSrc = background ? getBackground(background) : getBackground('Clear');
  return (
    <div className={style["container"]}>
      <img src={imgSrc} alt={"background"} className={style["background"]} />
      {children}
    </div>
  );
};
