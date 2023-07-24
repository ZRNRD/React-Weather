export const getCorrectDescription = (description: string): string => {

    switch (description) {
        case "Clear":
            return "Чисто";
        case "Clouds":
            return "Облачно";
        case "Rain":
        case "Drizzle":    
            return "Дождливо";
        case "Snow":
            return "Снежно";
        case "Thunderstorm":
            return "Гроза";
        case "Mist":
        case "Haze":
        case "Fog":
            return "Туман";
        case "Smoke":
            return "Дым";
        case "Dust":
        case "Sand":
        case "Ash":
            return "Пыль";
        case "Squal":
            return "Шквал";
        case "Tornado":
            return "Торнадо";
        default: return "";
    }

};
