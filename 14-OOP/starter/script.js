'use strict';
// constructor function
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Method   and Never use this inside of OOP
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};
const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. function automaticallt return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';

console.log(jonas instanceof Person);
console.log(jay instanceof Person);

Person.hey = function () {
  console.log(`Hey there 👏`);
  console.log(this);
};
Person.hey();
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
// Prototypes
console.log(Person.prototype);
// implement method
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));
console.log(Person.prototype.isPrototypeOf(jay));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);

// coding challenge
// 1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// Class version
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
//   }
// }

// 2
Car.prototype.accelate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

// 3
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

// 4
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelate();
car1.accelate();
car1.accelate();
car1.brake();
car1.brake();
car1.brake();
car2.accelate();
car2.accelate();
car2.accelate();
car2.brake();
car2.brake();
car2.brake();

//class expression   class is still function
// const PersonCI = class {}

//class declaration
class PersonCI {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  // greet = function () {
  //   console.log(`Hey ${this.firstName}`);
  // };

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not Full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log(`Hey there 👏`);
    console.log(this);
  }
}
const jessica = new PersonCI('Jessica Davis', 1996);

console.log(jessica);
jessica.calcAge('me');
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCI.prototype);

// PersonCI.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizens
// 3. classes are executed in strict mode even if did not activate strict mode('use strict')

const walt = new PersonCI('Walt White', 1965);
console.log(walt);

const account = {
  owener: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();
// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// coding challenge 2
// 1
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
    return this;
  }
  //2
  get speedUS() {
    return this.speed / 1.6;
  }
  // 3
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
// 4
const Ford = new CarCl('Ford', 120);
console.log(Ford.speedUS);
Ford.accelate();
Ford.accelate();
Ford.brake();
Ford.speedUS = 50;
console.log(Ford);

const Person2 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person2.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
const Student = function (firstName, birthYear, course) {
  Person2.call(this, firstName, birthYear);
  this.course = course;
};
// Linking prototypes
Student.prototype = Object.create(Person2.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person2);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// Coding challenge 3
// 1
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
// Link prototype
EV.prototype = Object.create(Car.prototype);
// 2
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  return this;
};
// 3
//child overwrite prototype if there are same prototype
EV.prototype.accelate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
  return this;
};
//4
const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelate();
// console.log(EV.prototype);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not Full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`Hey there 👏`);
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to  happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      }years old, but as astudent I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
    return this;
  }
}
// const martha = new StudentCl('Martha Jonas', 2012);
const martha = new StudentCl('Martha Jonas', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
// martha.greet();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jays = Object.create(StudentProto);
jays.init('Jay', 2010, 'Computer Science');

jays.introduce();
jays.calcAge();

// 1)  Publi fields
// 2)  Private fields
// 3)  Public methods
// 4)  Private methods
// (There is also the static version)

class Account {
  // 1)  Public fields (instances)
  locale = navigator.language;
  // _movements = [];

  // 2) Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // this.pin = pin;
    //protected property
    this._pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening account ${owner}`);
  }

  // 3)  Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  // _approveLoan(val) {
  //   return true;
  // }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  //#approvedLoan(val){
  _approveLoan(val) {
    return true;
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);
console.log(acc1.getMovements());
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approved(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

// Codingchallenge4
// 1)
class EVCL extends CarCl {
  // 1)
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}
// 3) just add return this to CarCl accelate,brake property and EV chargeBattery property

// 4)
// 'Rivian' going at 120 km/h, with a charge of 23%
const rivian = new EVCL('Rivian', 120, 23);
// rivian.accelate().accelate().brake().chargeBattery(90);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();
console.log(rivian);
