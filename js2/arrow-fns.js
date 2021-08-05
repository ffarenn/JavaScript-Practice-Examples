const add = function (a, b, c) {
    console.log(a, b, c);
    return a + b + c;
}

const addArrow = (a, b, c) => {
    return a + b + c;
}

const addArrowNew = (a, b, c) => a - b - c;

console.log(add(5, 10, 15));
console.log(addArrowNew(2, 6, 8));


const addArrow2 = (...args) => {
    console.log(args);
}

console.log(addArrow2(1, 4, 7));


const fnA = function () {
    return {
        a: 5,
    }
}

console.log(fnA());

const arrowFnA = () => ({arrow: 5})


console.log(arrowFnA());