// // 'use strict';
// // // const calcAge = function (birthYear) {
// // //   return 2037 - birthYear;
// // // }

// // // const yearsUnitretirement = function (birthYear, firstName) {
// // //   const age = calcAge(birthYear);
// // //   const retirement = 65 - age;
// // //   if (retirement > 0) {
// // //     console.log(`${firstName} will retire in ${retirement}`);
// // //     return retirement;
// // //   } else {
// // //     console.log(`${firstName} have already retired`);
// // //     return -1
// // //   };
// // // }
// // // console.log(yearsUnitretirement(1999, 'sohta'));




// // // const calcAverage = (a, b, c) => {
// // //   return (a + b + c) / 3
// // // };
// // // console.log(calcAverage(3, 4, 5));
// // // const scoreDolphins = calcAverage(44, 23, 71);
// // // const scoreKoalas = calcAverage(65, 54, 49);
// // // console.log(scoreDolphins, scoreKoalas);

// // // const checkWinner = function (avgDolphins, avgKoalas) {
// // //   if (avgDolphins >= 2 * avgKoalas) {
// // //     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
// // //   } else if (avgKoalas >= 2 * avgDolphins) {
// // //     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
// // //   } else {
// // //     console.log('noone win');
// // //   }
// // // }
// // // checkWinner(scoreDolphins, scoreKoalas);

// // // const friends = ['michel', 'steven', 'john'];
// // // console.log(friends);

// // // challenge
// // function calcTip(bill) {
// //   if (bill >= 50 && bill <= 300) {
// //     return bill * 0.15;
// //   } else {
// //     return bill * 0.2;
// //   }
// // };
// // console.log(calcTip(100));

// // const bills = [125, 555, 44];
// // const tips = [calcTip(125), calcTip(555), calcTip(44)];
// // // console.log(tips);
// // const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// // console.log(totals);

// // // const jonas = {
// // //   firstName: 'Jonas',
// // //   lastName: 'Schmedtmann',
// // //   age: 2037 - 1991,
// // //   job: 'teacher',
// // //   friends: ['Michael', 'Peter', 'Steven']
// // // }

// // // const type = window.prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// // // console.log(jonas[type]);

// // // console.log(`${jonas['firstName']} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// // const jonas = {
// //   firstName: 'Jonas',
// //   lastName: 'Schmedtmann',
// //   birthYeah: 1991,
// //   job: 'teacher',
// //   friends: ['Michael', 'Peter', 'Steven'],
// //   hasDriversLicense: true,
// //   calcAge: function () {
// //     return 2037 - this.birthYeah;
// //   },

// //   summery: function () {
// //     return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers licence`;
// //   }

// // }

// // // challenge
// // console.log(jonas.summery());

// // // test3
// // const mark = {
// //   fullname: 'Mark Miller',
// //   mass: 78,
// //   hight: 1.69,
// //   calcBMI: function () {
// //     this.bmi = this.mass / this.hight ** 2;
// //     return this.bmi
// //   }
// // };
// // const john = {
// //   fullname: 'John Smith',
// //   mass: 92,
// //   hight: 1.95,
// //   calcBMI: function () {
// //     this.bmi = this.mass / (this.hight * this.hight);
// //     return this.bmi
// //   }
// // };
// // mark.calcBMI();
// // john.calcBMI();
// // console.log(mark.bmi);
// // console.log(john.bmi)

// // const high = function () {
// //   if (john.calcBMI() > mark.calcBMI()) {
// //     console.log(`${john.fullname}'s BMI${john.bmi} is higher than ${mark.fullname}'s ${mark.calcBMI()}`);
// //   } else {
// //     console.log(`${mark.fullname}'s BMI${mark.bmi} is higher than ${john.fullname}'s ${john.calcBMI()}`);
// //   }
// // };
// // high();

// // const years = [1991, 2007, 1969, 2020];
// // const ages = [];
// // for (let i = 0; i < years.length; i++) {
// //   ages.push(2037 - years[i]);
// // }
// // console.log(ages);
// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ];

// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== 'string') continue;
//   console.log(jonas[i], typeof jonas[i]);
// };
// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === 'number') break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(jonas[i]);
// };

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);

//   for (let i = 1; i < 6; i++) {
//     console.log(`champion${i}`);
//   }
// };

// let i = 0;
// while (i < jonas.length) {
//   console.log(jonas[i]);
//   i++
// };

// code challenge final

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip)
  const total = tip + bills[i];
  totals.push(total)
};
console.log(bills, tips, totals);

// bonus
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
