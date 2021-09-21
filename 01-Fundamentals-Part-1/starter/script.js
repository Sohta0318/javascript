let massMark1 = 78;
let massJohn1 = 92;
let heightMark1 = 1.69;
let heightJohn1 = 1.95;
let MarkBMI1 = massMark1 / heightMark1 ** 2;
let JohnBMI1 = massJohn1 / heightJohn1 ** 2;
console.log(MarkBMI1 > JohnBMI1);
console.log(MarkBMI1, JohnBMI1);

const day = 'monday';
switch (day) {
  case 'monday':
    console.log('hellow')
    break;
  case 'tuesday':
    console.log('hello2');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('hellow3');
    break;
  default:
}
const age = 10;

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);
console.log(`I drink ${age >= 18 ? 'wine' : 'water'}`);
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill} , the tip was${tip}, and total value is ${bill + tip}`);
