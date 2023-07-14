import * as React from 'react';
import { FC, PropsWithChildren } from "react";


import style from "./WeatherForm.module.scss";

type T_WeatherForm = PropsWithChildren<{ city?: string;}>;

export const WeatherForm: FC<T_WeatherForm> = ({ children, city }) => {
  return (
    <div className={style["container"]}>
        <div className={style["weather"]}>
            <div className={style["weather__show"]}>
                <h1 className={style["city-name"]}>Город</h1>
                <p className={style["current-time"]}>21:00</p>
                <div className={style["current-weather"]}>
                    <div className={style["current-weather__top"]}>
                        <p className={style["temperature"]}>18°C</p>
                        
                        <p className={style["description"]}> Гроза</p>
                    </div>
                    <div className={style["current-weather__bottom"]}>
                        <p className={style["wind"]}>Ветер 4 м/с</p>
                        <p className={style["humidity"]}>Влажность 100%</p>
                        <p className={style["pressure"]}>Давление: 746 мм рт. ст.</p>
                    </div>
                </div>
            </div>

            <div className={style["weather__get"]}>
                <h2>Введите город</h2>
                <input type="text" className={style["city-input"]} placeholder="Название города" />
                <div className={style["cities__list"]}></div>
                
                <button className={style["get-weather"]}>Запросить погоду</button>
            </div>
            
        </div>
    </div>
  );
};