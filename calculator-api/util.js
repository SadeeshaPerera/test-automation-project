const calculator = {
    add: (val1, val2) => val1 + val2,
    subtract: (val1, val2) => val1 - val2,
    multiply: (val1, val2) => val1 * val2,
    divide: (val1, val2) => {
      if (val2 === 0) return "Cannot divide by zero";
      return val1 / val2;
    }
  };
  
  export default calculator;
  