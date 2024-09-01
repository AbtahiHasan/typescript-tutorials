// function pow(value: number, exponent: number = 2): number {
//   return value ** exponent;
// }

// const result = pow(4, 2);
// console.log(result);

// const pow = (value: number, exponent: number = 2): number => value ** exponent;

const mathematics = {
  exponent: 5,
  pow(value: number): number {
    return value ** this.exponent;
  },
};

mathematics.pow(50);
