export const getCorrectPressure = (pressure) => {
    return "Давление: " + Math.round(pressure / 1.333) + " мм рт. ст."
}