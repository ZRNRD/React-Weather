export const getCorrectTemperature = (temperature: number): string => {
    if(temperature > 0){
        return "+" + temperature + "°C"
    }else{
        return temperature + "°C"
    }
}
