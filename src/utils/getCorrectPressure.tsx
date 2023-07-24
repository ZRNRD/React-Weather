export const getCorrectPressure = (pressure:number): string => {
    return "Давление: " + Math.round(pressure / 1.333) + " мм рт. ст."
}
