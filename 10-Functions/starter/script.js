'use strict';
const bookings = [];
const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  //ES5
  // numPassenger = numPassenger || 1;
  // price = price || 199;
  const booking = { flightNum, numPassenger, price };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
// cant skip but set undefined = default
createBooking('LH123', undefined, 800);

const flight = 'LH123';
const jonas = {
  name: 'Jonas schmit',
  passport: 45657584,
};
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr' + passenger.name;
//   if (passenger.passport === 45657584) {
//     alert('check in');
//   } else {
//     alert('wrong passport');
//   }
// };
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);
// // is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.floor(Math.random() * 1000000000);
// };
// newPassport(jonas);
// checkIn(flight, jonas);

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// higher order function
const transformer = function (str, fn) {
  console.log(`Original string ${str}`);
  console.log(`Transformed string ${fn(str)}`);

  console.log(`Transformed by ${fn.name}`);
};
transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);
// JS callback all the time
const high5 = function () {
  console.log('👏');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('jonas');
greeterHey('steven');
greet('Hello')('Jonas');
// arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Jonas schit');
lufthansa.book(659, 'Sohta Iguchi');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// does not work
// book(23, 'Sarah william');

// call method
book.call(eurowings, 23, 'Sarah williams');
console.log(eurowings);
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply methods = not be used anymore
const flightData = [583, 'Geroge Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven William');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas schit');
bookEW23('Martha Cooper');

// with enentlister
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial applicaton
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

// challenge1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
  answers: new Array(4).fill(0),
  // 2
  registerNewAnswer: function () {
    // get answer

    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    // 1.2
    // register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    console.log(this.answers);
    // 4
    this.displayResults();
    this.displayResults('string');
  },
  // if (typeof answer === 'number' && answer < this.answers.length) {
  //   this.answers[answer]++;
  // }
  // && is stopped by falsey value ( if it is true, it will keep going and execute last one)
  // 3
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// 2
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// bonus
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();
// IIFE  Immediate Invoked Function Expression
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();
// console.log(isPrivate);

(() => console.log('This will also never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(notPrivate);
// console.log(isPrivate);

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    // let i = 1;
    passengerCount++;
    console.log(`${passengerCount} passenger`);
    // return function () {
    //   console.log(i);
    // };
  };
};
const booker = secureBooking();
booker();
booker();
booker();
// const bookk = booker();
// booker();
console.dir(booker);

// example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
// re-assigned f function
h();
f();
console.dir(f);

//example2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now all boarding ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers `);
  }, wait * 1000);

  console.log(`Will start boarding ${wait} second`);
};
const perGroup = 1000;
boardPassengers(180, 3);

// it will execute per second(1second)
// setTimeout(function () {
//   console.log('timer');
// }, 1000);

// challenge2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
