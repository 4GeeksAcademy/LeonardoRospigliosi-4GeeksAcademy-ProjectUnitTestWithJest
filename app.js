// Declaramos una función con el nombre exacto "formEuroToDollar"

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let resultDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return resultDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let resultYen = (valueInDollar/oneEuroIs.USD) * oneEuroIs.JPY;
    return resultYen;
}

const fromYenToPound = function(valueInYen) {
    let resultPound = (valueInYen/oneEuroIs.JPY) * oneEuroIs.GBP;
    return resultPound;
}


// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen,fromYenToPound}