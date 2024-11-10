const numArr1: number[] = [1, 2, 3, 4, 5];
const numArr2: number[] = [6, 7, 8, 9, 10];

const newArr: number[] = [...numArr1, ...numArr2];

// console.log(newArr);

const func = (...numbers: number[]) => {
  console.log(numbers);
};

func(1, 2, 3);
