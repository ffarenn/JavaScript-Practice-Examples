// 1st example of callback 

const fnA = function (message, callback) {
    console.log(message);
    // console.log(callback);
    callback(100)
}

const fnB = function (number) {
    console.log('This is log for fnB', number);
}
 
fnA('ffdjlkjdf', fnB)

// 2nd example using different parameters

const array = function (array1, toTheMoon) {
    console.log(array1);
    toTheMoon()
}

const toTheMoon = function () {
    console.log('This is callback')
}

array('array1', toTheMoon)
// Callbacks can be called anywhere as well
toTheMoon()


// Math

const doMath = function (a, b, callback) {
    const result = callback(a, b);
    console.log(result);
}

const add = function (x, y) {
    return x + y;
}

const sub = function (x, y) {
    return x - y;
}

doMath(2, 3, add);
doMath(10, 3, sub);

// Short version using inline function

const doMathAgain = function (c, d, callback) {
    const result = callback(c, d);
    console.log(result);
}

doMath(6, 3, function (e, w) {
    return e + w;
});
doMath(15, 3, function (e, w) {
    return e - w;
});

// Example - event registration

// const buttonRef = document.querySelector('.js-button');

// buttonRef.addEventListener('click', function () {
//         console.log('Button click ' + Date.now())
//     });


// Example  - Geolocation

const getPosSucess = function (position) {
    console.log(position);
}

const onPosError = function (error) {
    console.log(error);
}

window.navigator.geolocation.getCurrentPosition(getPosSucess, onPosError);

// Example of filtering arrays and getting 

const filter = function (array, test) {
    const filteredArray = [];

    for (const el of array) {
        console.log(el);
        const passed = test(el)

        if (passed) {
            filteredArray.push(el)
        }
    }
    return filteredArray
};

const callback = function (value) {
    return value >= 3;
}

const r1 = filter([1, 2, 3, 4, 5], callback)
console.log(r1);
const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
    return value <= 4;
})
console.log(r2);