import * as React from 'react';
import { FC, PropsWithChildren, FormEventHandler } from "react";

import { Background } from '../Background/Background.tsx';
import { ListOfCities } from '../ListOfCities/ListOfCities.tsx';

import style from "./WeatherForm.module.scss";
import { getWeather } from '../../utils/getWeather.tsx';
import { getArrayOfCitiesFromLetters } from '../../utils/getArrayOfCitiesFromLetters.tsx';


type T_WeatherForm = PropsWithChildren<{ city?: string;}>;
type T_WeatherState = {
    city: string,
    time: string,
    temperature: string,
    description: string,
    background: string,
    wind: string,
    humidity: string,
    pressure: string,
};

export const WeatherForm: FC<T_WeatherForm> = ({ children, city }) => {

    const [weather, changeWeather] = React.useState<T_WeatherState>({
        city: "",
        time: "",
        temperature: "",
        description: "",
        background: "",
        wind: "",
        humidity: "",
        pressure: "",
    });

    const [weatherInput, changeWeatherInput] = React.useState<string>("");

    const [listOfCities, changeListOfCities] = React.useState<Array<string>>([]);

    const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        getWeather(weatherInput, changeWeather);
        changeWeatherInput("");
        changeListOfCities([]);
    };

    React.useEffect(()=>{getWeather(localStorage.getItem("currentCity") || 'Москва', changeWeather);}, []);

  return (
    <Background background={weather.background}>
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
                            onChange={(e) => { 
                                changeWeatherInput(e.target.value); 
                                let citiesArray = getArrayOfCitiesFromLetters(e.target.value).map(city=>city.city);
                                changeListOfCities(citiesArray);
                                }}/>
                    <ListOfCities 
                        cities={listOfCities} 
                        callback={(e)=>{
                            changeWeatherInput(e); 
                            getWeather(e, changeWeather);
                            changeWeatherInput(""); 
                            changeListOfCities([])}}
                    />
                    
                    <button className={style["get-weather"]}>Запросить погоду</button>
                </form>
                
            </div>
        </div>
    </Background>
  );
};
