import * as React from 'react';
import { FC, PropsWithChildren } from "react";


import style from "./WeatherForm.module.scss";

type T_WeatherForm = PropsWithChildren<{ city?: string;}>;

export const WeatherForm: FC<T_WeatherForm> = ({ children, city }) => {
  return (
    <div className="container">
        <div className="weather">
            <div className="weather__show">
                <h1 className="city-name"></h1>
                <p className="current-time"></p>
                <div className="current-weather">
                    <div className="current-weather__top">
                        <p className="temperature"></p>
                        
                        <p className="description"></p>
                    </div>
                    <div className="current-weather__bottom">
                        <p className="wind"></p>
                        <p className="humidity"></p>
                        <p className="pressure"></p>
                    </div>
                </div>
            </div>

            <div className="weather__get">
                <h2>Введите город</h2>
                <input type="text" className="city-input" placeholder="Название города" />
                <div className="cities__list"></div>
                
                <button className="get-weather">Запросить погоду</button>
            </div>
            
        </div>
    </div>
  );
};