export const getCorrectCityName = (cityName:string): string => {
    return cityName.split(" ").map((el) => el[0].toUpperCase() + el.slice(1).toLowerCase()).join(' ');
}
