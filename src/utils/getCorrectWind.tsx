export const getCorrectWind = ({speed, deg}) => {
    if(deg >= 335 && deg <= 25){
        return "Ветер: " + speed + " м/с, C" 
    }else if(deg > 25 && deg < 65){
        return "Ветер: " + speed + " м/с, CВ" 
    }else if(deg >= 65 && deg <= 115){
        return "Ветер: " + speed + " м/с, В" 
    }else if(deg > 115 && deg < 155){
        return "Ветер: " + speed + " м/с, ЮВ" 
    }else if(deg >= 155 && deg <= 205){
        return "Ветер: " + speed + " м/с, Ю" 
    }else if(deg > 205 && deg < 245){
        return "Ветер: " + speed + " м/с, ЮЗ" 
    }else if(deg >= 245 && deg <= 295){
        return "Ветер: " + speed + " м/с, З" 
    }else{
        return "Ветер: " + speed + " м/с, CЗ" 
    }
}