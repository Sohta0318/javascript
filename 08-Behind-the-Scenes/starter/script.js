'use strict';
// function calcage(birthyear) {
//   const age = 2037 - birthyear;
//   console.log(firstname);

//   function printage() {
//     const output = `You are ${age} years old, born in ${birthyear}`;
//     console.log(output);
//   }
//   printage();
//   return age;
// }
// // const firstname = 'jonas';
// // calcage(1999);

// // console.log(this);

// // const calcage = function (birthyear) {};

// const jonas = {
//   firstname: 'jonas',
//   year: 1991,
//   calcage: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     // const self = this;

//     // const isMichel = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1989 && self.year <= 1996);
//     // };
//     // isMichel();
//     const isMichel = () => {
//       console.log(this);
//       console.log(this.year >= 1989 && this.year <= 1996);
//     };
//     isMichel();
//   },
//   greet: () => console.log(`Hey ${this.firstname}`),
// };
// jonas.greet();
// jonas.calcage();

// const addedd = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addedd(2, 5);

const a = {
  name: 'sohta',
  age: 22,
};
console.log(this.name);
