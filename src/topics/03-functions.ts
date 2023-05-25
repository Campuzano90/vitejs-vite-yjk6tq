function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiply(firstNumber: number, secondNumber: number, base: number) {
  return firstNumber + base;
}

const result: number = addNumbers(1, 2);
const resul2: string = addNumbersArrow(1, 2);
console.log({ result, resul2 });
export {};
