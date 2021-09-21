'use strict';

const weekday = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekday[3]]: {
    open: 12,
    close: 22,
  },
  [weekday[4]]: {
    open: 11,
    close: 23,
  },
  [weekday[5]]: {
    open: 0,
    close: 24,
  },
};
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0,
//     close: 24,
//   },
// };

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours,
  // openingHours: openingHours,
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0,
  //     close: 24,
  //   },
  // },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderpasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  // guest: 20,
  guest: 0,
};

restaurant.orderDelivery({
  starterIndex: 2,
  mainIndex: 1,
  address: 'v6z',
});

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// // const temp = main;
// // const main = secondary;
// // const secondary = temp;

// [main, secondary] = [secondary, main];
// console.log(main, secondary);
// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);
// const nesed = [5, 9, [7, 8]];
// const [i, , [j, k]] = nesed;
// console.log(i, j, k);

// const arr = [7, 8, 9];
// const newbadarr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(newbadarr);
// const newarr = [1, 2, ...arr];
// console.log(newarr);
// console.log(...newarr);
// const newmenu = [...restaurant.mainMenu, 'Gnocchi'];
// const mainMenuCopy = [...restaurant.mainMenu];
// const main = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(main);

// const str = 'jonas';
// const letter = [...str, '', 'S.'];
// console.log(letter);

// const ingredients = [prompt("let's"), prompt("let's"), prompt("let's")];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// const arr = [1, 2, ...[3, 4]];
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

const [pizza, , rezzoto, ...others] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, rezzoto, others);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

const add = function (...numbers) {
  console.log(numbers);
};
add(2, 3, 4);
// || is take only truesly value
console.log(3 || 'hello');
console.log(0 || true);
console.log('' || 'jonas');
console.log(null || '' || undefined || 'hello' || 3);

const guest = restaurant.guest ? restaurant.guest : (restaurant.guest = 10);
console.log(guest);

const guest2 = restaurant.guest || 10;
console.log(guest2);
// only nullish (null or undefined) not include(0 or'')
const guest3 = restaurant.guest ?? 10;
console.log(guest3);
// && is only take falsey value
console.log(0 && 'joans');
console.log('jonas' && 0);
console.log('hello' && 3 && 'jonas' && null);

if (restaurant.orderPizza) {
  restaurant.orderPizza('mashroom', 'spinazzi');
}
console.log(
  restaurant.orderPizza
    ? restaurant.orderPizza
    : restaurant.orderPizza('mashroom', 'spinazzi')
);

// codeing challenge1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1
const [players1, players2] = game.players;
console.log(players1, players2);
// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3
const allPlayers = players1.concat(players2);
console.log(allPlayers);
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// 4
game.playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(game);
// 5
const { team1, x: draw, team2 } = game.odds;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
console.log(team1, draw, team2);
// 6
const printGoals = function (...number) {
  console.log(number);
  console.log(`${number.length} goals were scored`);
};
printGoals(...game.scored);
// 7
team1 > team2
  ? console.log('Team1 is more likely win')
  : console.log('Team2 is more likely win');

// team1 > team2 && console.log('Team1 is more likely win');
// team1 < team2 && console.log('Team2 is more likely win');

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (let item of menu) {
  console.log(item);
}
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}
// menu.forEach(function (item, index) {
//   console.log(`${index + 1}:${item}`);
// });
if (restaurant.openingHours && restaurant.openingHours.fri) {
  console.log(restaurant.openingHours.fri.open);
}
console.log(restaurant.openingHours.mon?.open);
// example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

days.forEach(day => {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
});
// Method
console.log(restaurant.order?.(0, 1) ?? 'not included');
// array
const users = [{ name: 'jonas', age: 22 }];
// const users = [];
console.log(users[0]?.name ?? 'not included');
// if (users.length > 0) {
//   console.log(users[0]?.name);
// } else {
//   console.log('not included');
// }
const properties = Object.keys(openingHours);
console.log(properties);

let OpenStr = `We are open on ${properties.length}:`;

for (let day of properties) {
  OpenStr += `${day},`;
}
console.log(OpenStr);

const value = Object.values(openingHours);
console.log(value);

const entry = Object.entries(openingHours);
console.log(entry);

for (let [key, { open, close }] of entry) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
// codeing challenge
// 1
for (let [index, scorepoint] of game.scored.entries()) {
  console.log(`Goal ${index + 1} ${scorepoint}`);
}
// 2
const odds = Object.values(game.odds);
let average = 0;
for (let odd of odds) {
  average += odd;
  console.log(average / odds.length);
}
// 3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamstr = team === 'x' ? 'draw' : `victory${game[team]}`;
  console.log(`odd of ${teamstr}:${odd}`);
}
// bonus
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

// set is almost same with array
const ordersSet = new Set([
  'pizza',
  'pasta',
  'pizza',
  'rizzoto',
  'rizzoto',
  'pasta',
]);
// only work for new set, not normal array
console.log(ordersSet);
console.log(new Set('jonas'));
console.log(ordersSet.size);
console.log(ordersSet.has('bread'));
console.log(ordersSet.has('pasta'));
ordersSet.add('bread');
ordersSet.add('bread');
ordersSet.delete('pasta');
console.log(ordersSet);
// ordersSet.clear();
for (let i of ordersSet) {
  console.log(i);
}
// if (ordersSet.has('pasta')) {
//   console.log('they have pasta');
// }
const staff = ['manager', 'waiter', 'chief', 'waiter', 'manager'];
// console.log(staff);
// convert array to set
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size);
console.log(new Set('jonasswitch').size);

// map is almost simmilar with object
const reset = new Map();
reset.set('name', 'Classico Italiano');
reset.set(1, 'Frizen', 'Italy');
console.log(reset.set(2, 'Brazzile', 'Japan'));
reset
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are opened : D')
  .set(false, 'we are closed : (');
console.log(reset.get('name'));
console.log(reset.get(false));

// const time = new Date();
// const hours = time.getHours();
// const mini = time.getMinutes();
// console.log(time);
// console.log(hours);
// console.log(mini);
// console.log(`${hours} : ${mini}`);
const time = 21;
console.log(reset.get(time > reset.get('open') && time < reset.get('close')));
console.log(reset.has('categories'));
reset.delete(2);
console.log(reset.size);
const arr = [1, 2];
// reset.set([1, 2], 'Test');
reset.set(arr, 'Test');
reset.set(document.querySelector('h1'), 'Heading');
console.log(reset);
// console.log(reset.get([1, 2]));
console.log(reset.get(arr));
// reset.clear();
// console.log(reset);

const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);
console.log(question);
// convert object to map
console.log(Object.entries(openingHours));
const hours = new Map(Object.entries(openingHours));
// quiz app
console.log(question.get('question'));
for (let [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`${key} : ${value}`);
  }
}
// const answer = parseInt(window.prompt('your answer'));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));
// // covert map to array
// console.log(...question);
// console.log([...question.keys()]);
// console.log([...question.values()]);
// coding challenge 3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// 1
const event = [...gameEvents.values()];
console.log(event);
const events = [...new Set(event)];
console.log(events);
// 2
gameEvents.delete(64);
console.log(gameEvents);
// 3
console.log(
  `Aneventhappened,on average, every ${90 / gameEvents.size} minutes`
);
const times = [...new Set(gameEvents.keys())].pop();
console.log(times);
console.log(
  `Aneventhappened,on average, every ${times / gameEvents.size} minutes`
);
// 4
// for (let [key, value] of gameEvents) {
//   if (key < 45) {
//     console.log(`[FIRST HALF] ${key} : ${value}`);
//   } else {
//     console.log(`[SECOND HALF] ${key} : ${value}`);
//   }
// }
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

// IndexOf, latIndexof
const airline = 'Tap Air Japanr';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Japan'));

// slice
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('you got a middle seat');
  } else {
    console.log('you got lucky');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// tolowecase,toUppercase
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// fix capitalization in name
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
// console.log(passengerLower);
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// function version
const rename = function (name) {
  const lower = name.toLowerCase();
  const correct = lower[0].toUpperCase() + lower.slice(1);
  console.log(correct);
};
rename('SOHTA');

// trim
// comparering email
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.IO \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);
// function
const match = function (mail) {
  const normal = mail.toLowerCase().trim();
  console.log(normal);
};
match(' Nicosohta0318@gamil.com \n');

// replacing
const priceGB = '288,97∏';
const priceUS = priceGB.replace('∏', 'Á').replace(',', '.');
console.log(priceUS);
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));
// new one
console.log(announcement.replaceAll('door', 'gate'));

// boolean
// include, starstwith, endsWith
const planes = 'Airbus A320neo';
console.log(planes.includes('A320'));
console.log(planes.includes('Bolean'));
console.log(planes.startsWith('Airbus'));
console.log(planes.startsWith('A320'));

if (planes.startsWith('Airbus') && planes.endsWith('neo')) {
  console.log('Part of the Airbus family');
}
// practice excercise
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcom board');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// split and join
console.log('a+very+nice+string'.split('+'));
// console.log(...'jonas');
console.log('Jonas Schimt'.split(' '));
const [firstName, lastName] = 'Jonas Schimt'.split(' ');
console.log(firstName);

const newname = ['Mr', firstName, lastName.toLowerCase()].join(' ');
console.log(newname);

const capitalization = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  names.forEach(n => {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  });
  console.log(namesUpper.join(' '));
};
capitalization('jesscica ann smith davis');

// padding
const message = 'Go to gate 23';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(45678376374747));
console.log(maskCreditCard('5423774385734877772'));
// repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
// challenge4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');
button.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);
  for (let [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, '.')}${'✅'.repeat(i + 1)}`);
  }
});

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const getCode = str => {
  return str.slice(0, 3).toUpperCase();
};
for (let flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
