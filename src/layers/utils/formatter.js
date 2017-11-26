
export const getCesiumDegree = (value) => {
    let resultString = '';
    
    if (value == null){
        return resultString;
    }

    if (value > 0) {
        resultString = '+';
    }

    resultString = resultString + value + '°C';
    
    return resultString;
}
export const getWind = (value) => {
    return `Wind: ${value} m/s`;
}
export const getPressure = (value) => {
    return `Pressure: ${value} mm`
}