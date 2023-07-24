import * as React from 'react';
import { FC, PropsWithChildren } from "react";

import style from "./ListOfCities.module.scss";

type T_ListOfCitiesProps = PropsWithChildren<{ cities?: Array<string>; callback: Function}>;

export const ListOfCities: FC<T_ListOfCitiesProps> = ({ children, cities, callback }) => {
  return (
    <div className={style["cities__list"]}>
        <ul onClick={(e)=>callback(e.target.innerHTML)}>
            {cities?.map((el,index)=>{
                return <li key={index}>{el}</li>
            })}
        </ul>
    </div>
  );
};

