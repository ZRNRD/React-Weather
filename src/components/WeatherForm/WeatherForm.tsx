import * as React from 'react';
import { FC, PropsWithChildren, FormEventHandler } from "react";


import style from "./WeatherForm.module.scss";
import { getWeather } from '../../utils/getWeather.tsx';

type T_WeatherForm = PropsWithChildren<{ city?: string;}>;

export const WeatherForm: FC<T_WeatherForm> = ({ children, city }) => {

    const [weather, changeWeather] = React.useState({
        city: "Москва",
        time: "00:00",
        temperature: "0°C",
        description: "Чисто",
        wind: "Ветер 0 м/с",
        humidity: "Влажность 100%",
        pressure: "Давление: 746 мм рт. ст.",
    });

    const [weatherInput, changeWeatherInput] = React.useState("");

    const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        getWeather(weatherInput, changeWeather);
        changeWeatherInput("");
    };

    React.useEffect(()=>{getWeather(localStorage.getItem("currentCity") || 'Москва', changeWeather);}, []);

  return (
    <div className={style["container"]}>
        <div className={style["weather"]}>
            <div className={style["weather__show"]}>
                <h1 className={style["city-name"]}>{ weather.city }</h1>
                <p className={style["current-time"]}>{ weather.time }</p>
                <div className={style["current-weather"]}>
                    <div className={style["current-weather__top"]}>
                        <p className={style["temperature"]}>{ weather.temperature }</p>
                        
                        <p className={style["description"]}> { weather.description }</p>
                    </div>
                    <div className={style["current-weather__bottom"]}>
                        <p className={style["wind"]}>{ weather.wind }</p>
                        <p className={style["humidity"]}>{ weather.humidity }</p>
                        <p className={style["pressure"]}>{ weather.pressure }</p>
                    </div>
                </div>
            </div>

            <form className={style["weather__get"]} onSubmit={onFormSubmit}>
                <h2>Введите город</h2>
                <input type="text" 
                        className={style["city-input"]} 
                        placeholder="Название города" 
                        value={weatherInput}
                        onChange={(e) => { changeWeatherInput(e.target.value);}}/>
                <div className={style["cities__list"]}></div>
                
                <button className={style["get-weather"]}>Запросить погоду</button>
            </form>
            
        </div>
    </div>
  );
};
