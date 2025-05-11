const calculator = {
    add: (val1, val2) => (val1 != undefined && val2 != undefined) ? val1 + val2 : 0,
    subtract: (val1, val2) => (val1 != undefined && val2 != undefined) ? val1 - val2 : 0,
    multiply: (val1, val2) => (val1 != undefined && val2 != undefined) ? val1 * val2 : 0,
    divide: (val1, val2) => {
        if (val1 != undefined && val2 != undefined && val2 !== 0) {
            return val1 / val2;
        }
        return 0;
    },
    power: (val1, val2) => (val1 != undefined && val2 != undefined) ? Math.pow(val1, val2) : 0,
    modulo: (val1, val2) => (val1 != undefined && val2 != undefined && val2 !== 0) ? val1 % val2 : 0,
}

export default calculator;