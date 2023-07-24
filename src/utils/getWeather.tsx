import { getCorrectCityName } from '../utils/getCorrectCityName.tsx' ;
import { getCorrectTemperature } from '../utils/getCorrectTemperature.tsx' ;
import { getCurrentTime } from '../utils/getCurrentTime.tsx' ;
import { getCorrectWind } from '../utils/getCorrectWind.tsx' ;
import { getCorrectPressure } from '../utils/getCorrectPressure.tsx' ;
import { getCorrectDescription } from './getCorrectDescription.tsx';

export const getWeather = async (city: string, callback:Function) => {

    let currentCity = city || localStorage.getItem("currentCity") || 'Москва';

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=85d9877a19499d8c389f1fb40ddcbdb4`);

    if(response.ok){
        let weather = await response.json();
        let currentTemperature = (weather.main.temp -273.15).toFixed(1);
        
        let cityName = getCorrectCityName(currentCity);
        let temperature = getCorrectTemperature(Number(currentTemperature));
        let description = getCorrectDescription(weather.weather[0].main);
        let background = weather.weather[0].main;
        let currentTime = "Сейчас " + getCurrentTime();
        let wind = getCorrectWind(weather.wind);
        let humidity = "Влажность: " + weather.main.humidity + "%";
        let pressure = getCorrectPressure(weather.main.pressure);

        localStorage.setItem("currentCity", currentCity);


        callback({
            city: cityName,
            time: currentTime,
            temperature: temperature,
            description: description,
            background: background,
            wind: wind,
            humidity: humidity,
            pressure: pressure,
        });

    }else{
        alert("Ошибка запроса погоды");
    }
};
