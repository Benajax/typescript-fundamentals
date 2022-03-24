let x: number = 7;
let y: number = 11;
const sum: number = x + y;
const result: string = `The sum of ${x} and ${y} is ${sum}`;
console.log(result);

// BO: get dom element with id output
const output = document.querySelector('#output');

// BO: then inject the result into the id element from above
if (output) {
  output.innerHTML = result;
}
