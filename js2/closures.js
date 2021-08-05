//  Function returns result of other function

const fnA = function (parameter) {
    const innerVariable = 'Inner function value';

    const innerFunction = function () {
        console.log('This is innerFunction call');
        console.log(parameter);
        console.log(innerVariable);
    }

    return innerFunction
}

const fnB = fnA(55557)
fnB()

console.log(fnB);

// 2ns example

// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} cooks ${dish}`);
// }

// makeDish('Mango', 'Cookie')
// makeDish('Mango1', 'Cookie1')
// makeDish('Mango2', 'Cookie2')

// makeDish('Man', 'Cookie')
// makeDish('Man1', 'Cookie')
// makeDish('Man2', 'Cookie')

const makeSheff = function (name) {
    const makeDish = function (dish) {
        console.log(`${name} cooks ${dish}`);
    }
    return makeDish
}

const mango = makeSheff('Mango')
console.log(mango);

mango('cookie')
mango('tart')

// 3rd example

const letsTravel = function (country) {
    const hasCity = function (city) {
           console.log(`${country} has city ${city}`);
    }
    return hasCity
}

const countryName = letsTravel('Latvia');
console.log(countryName);

countryName('Riga');
countryName('Jelgava')
countryName('Rezekne')


// Rounding

const floatingPoint = 3.4525214;
const someInt = Math.round(floatingPoint); // 3
const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46


const rounder = function (number, places) {
    return Number(number.toFixed(places));
};

console.log(rounder(3.54654, 2));
console.log(rounder(9.54654, 3));
console.log(rounder(6.54654, 4));
console.log(rounder(5.54654, 5));

const rounderNew = function (places) {
    return function (number) {
        return Number(number.toFixed(places));
    };
};

const rounder2 = rounderNew(2)
const rounder3 = rounderNew(3)
const rounder4 = rounderNew(4)

console.log(rounder2(3.54654));
console.log(rounder3(9.54654));
console.log(rounder2(6.54654));
console.log(rounder4(5.54654));


// const number1 = 3.6589
// console.log(floatingPoint.toFixed(2));
// console.log(floatingPoint.toFixed(3));
// console.log(floatingPoint.toFixed(4));