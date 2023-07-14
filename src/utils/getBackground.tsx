import clearBG from "../assets/images/Clear-bg.jpg";
import cloudsBG from "../assets/images/Clouds-bg.jpg";
import dustBG from "../assets/images/Dust-bg.jpg";
import mistBG from "../assets/images/Mist-bg.jpg";
import rainBG from "../assets/images/Rain-bg.jpg";
import smokeBG from "../assets/images/Smoke-bg.jpg";
import snowBG from "../assets/images/Snow-bg.jpg";
import squalBG from "../assets/images/Squal-bg.jpg";
import thunderstormBG from "../assets/images/Thunderstorm-bg.jpg";
import tornadoBG from "../assets/images/Tornado-bg.jpg";

export function getBackground(background: string){
    switch (background) {
        case "Clear":
            return clearBG;
        case "Clouds":
            return cloudsBG;
        case "Rain":
        case "Drizzle":    
            return rainBG;
        case "Snow":
            return snowBG;
        case "Thunderstorm":
            return thunderstormBG;
        case "Mist":
        case "Haze":
        case "Fog":
            return mistBG;
        case "Smoke":
            return smokeBG;
        case "Dust":
        case "Sand":
        case "Ash":
            return dustBG;
        case "Squal":
            return squalBG;
        case "Tornado":
            return tornadoBG;
        default: break;
    }
}