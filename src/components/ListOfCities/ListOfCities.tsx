import * as React from 'react';
import { FC, PropsWithChildren } from "react";

import style from "./ListOfCities.module.scss";

type T_ListOfCitiesProps = PropsWithChildren<{ cities?: Array<string>; callback: Function}>;

export const ListOfCities: FC<T_ListOfCitiesProps> = ({ children, cities, callback }) => {

  return (
    <div className={style["cities__list"]}>
        <ul>
            {cities?.map((el,index)=>{
                return <li key={index} onClick={()=>callback(el)}>{el}</li>
            }, this)}
        </ul>
    </div>
  );
};

