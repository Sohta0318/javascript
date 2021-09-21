'use strict';
// const getCountryData = function (country) {
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
<img class="country__img" src="${data.flag}" />
<div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>POP ${(
    +data.population / 1000000
  ).toFixed(1)}</p>
  <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
  <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
</div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

//   ///////////////////////////////////////

// //   const request = new XMLHttpRequest();
// //   request.open(
// //     'GET',
// //     `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
// //   );
// //   request.send();
// //   // console.log(this.responseText);

// //   request.addEventListener('load', function () {
// //     console.log(this.responseText);

// //     const [data] = JSON.parse(this.responseText); //[0];
// //     console.log(data);

// //     const html = `<article class="country">
// //   <img class="country__img" src="${data.flag}" />
// //   <div class="country__data">
// //     <h3 class="country__name">${data.name}</h3>
// //     <h4 class="country__region">${data.region}</h4>
// //     <p class="country__row"><span>👫</span>POP ${(
// //       +data.population / 1000000
// //     ).toFixed(1)}</p>
// //     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
// //     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// //   </div>
// // </article>`;

// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //     countriesContainer.style.opacity = 1;
// //   });
// // };

// // getCountryData('portugal');
// // getCountryData('japan');
// // getCountryData('usa');

// // const getCountryAndNeighbour = function (country) {
// //   // AJAX call country 1
// //   const request = new XMLHttpRequest();
// //   request.open(
// //     'GET',
// //     `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
// //   );
// //   request.send();
// //   // console.log(this.responseText);

// //   request.addEventListener('load', function () {
// //     console.log(this.responseText);

// //     const [data] = JSON.parse(this.responseText); //[0];
// //     console.log(data);

// //     // Render country 1
// //     renderCountry(data);

// //     // Get neighour country (2)
// //     const [neighbour] = data.borders; //[0];

// //     if (!neighbour) return;

// //     // AJAX call country 2
// //     const request2 = new XMLHttpRequest();
// //     request2.open(
// //       'GET',
// //       `https://restcountries.eu/rest/v2/alpha/${neighbour}?fullText=true`
// //     );
// //     request2.send();

// //     request2.addEventListener('load', function () {
// //       const data2 = JSON.parse(this.responseText);
// //       console.log(data2);

// //       renderCountry(data2, 'neighbour');
// //     });
// //   });
// // };

// // // getCountryAndNeighbour('portugal');
// // // getCountryAndNeighour('japan');
// // getCountryAndNeighbour('usa');

// // const request = new XMLHttpRequest();
// // request.open(
// //   'GET',
// //   `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
// // );
// // request.send();

// // const request = fetch(
// //   'https://restcountries.eu/rest/v2/name/portugal?fullText=true'
// // );
// // console.log(request);

// // const getCountryData = function (country) {
// //   fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
// //     .then(function (response) {
// //       console.log(response);
// //       return response.json();
// //     })
// //     .then(function (data) {
// //       console.log(data);
// //       renderCountry(data[0]);
// //     });
// // };

// // then is only called fetch is successed
// // catch is only called fetch is not successd
// // finally is called when fetch is successed and not successed

// // const getCountryData = function (country) {
// //   // Country 1
// //   fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
// //     .then(response => {
// //       console.log(response);

// //       if (!response.ok) throw new Error(`Country not found ${response.status}`);

// //       return response.json();
// //     })
// //     // ,err => alert(err))
// //     .then(data => {
// //       renderCountry(data[0]);
// //       // const neighbour = data[0].borders[0];
// //       const neighbour = 'nekfjnk';

// //       if (!neighbour) return;

// //       // Country 2
// //       return fetch(
// //         `https://restcountries.eu/rest/v2/alpha/${neighbour}?fullText=true`
// //       );
// //       //.then(response => response.json())   Do NOT chain like this
// //       // return 23;
// //     })
// //     // .then(data => alert(data));
// //     .then(response => {
// //       if (!response.ok) throw new Error(`Country not found ${response.status}`);

// //       return response.json();
// //     })
// //     // ,err => alert(err))

// //     .then(data => renderCountry(data, 'neighbour'))
// //     .catch(err => {
// //       console.error(`${err} 💥💥💥`);
// //       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });
// // };

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   getJson(
//     `https://restcountries.eu/rest/v2/name/${country}?fullText=true`,
//     `Country not found`
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error(`No eighbour found!`);

//       // Country 2
//       return getJson(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}?fullText=true`,
//         `Country not found`
//       );
//     })

//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
//   // getCountryData('germany');
// });
// // getCountryData('kdjsnkf');
// // getCountryData('australia');

// // Coding challenge 1
// // 1)
// // const whereAmI = function (lat, lng) {
// //   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
// //     .then(response => {
// //       // console.log(response);
// //       if (!response.ok)
// //         throw new Error(`Problem with geocoding ${response.status}`);
// //       return response.json();
// //     })
// //     .then(data => {
// //       console.log(data);
// //       console.log(`You are in ${data.city}, ${data.country}`);

// //       return fetch(
// //         `https://restcountries.eu/rest/v2/name/${data.country}?fullText=true`
// //       );
// //     })
// //     .then(response => {
// //       if (!response.ok) throw new Error(`Country not found ${response.status}`);

// //       return response.json();
// //     })

// //     .then(data => renderCountry(data[0]))
// //     .catch(err => {
// //       console.error(`${err} 💥💥💥`);
// //     });
// // };
// // whereAmI(52.508, 13.381);
// // whereAmI(19.037, 72.873);
// // whereAmI(-33.933, 18.474);

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10000; i++) {}
//   console.log(res);
// });

// console.log('Test end');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening 🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 💰');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 second passed'));

// // callback hell
// // setTimeout(() => {
// //   console.log('1 second passed');
// //   setTimeout(() => {
// //     console.log('2 second passed');
// //     setTimeout(() => {
// //       console.log('3 second passed');
// //       setTimeout(() => {
// //         console.log('4 second passed');
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(response => {
//       // console.log(response);
//       if (!response.ok)
//         throw new Error(`Problem with geocoding ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(
//         `https://restcountries.eu/rest/v2/name/${data.country}?fullText=true`
//       );
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })

//     .then(data => renderCountry(data[0]))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//     });
// };
// btn.addEventListener('click', whereAmI);

// // codingchallenge 2
// const imgcontainer = document.querySelector('.images');
// // Part 1
// // 1)
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     // 2)
//     img.addEventListener('load', function () {
//       imgcontainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image is not found'));
//     });
//   });
// };
// // Part 2
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image was downloaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image2 was downloaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image3 was downloaded');
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })

//   .catch(err => console.error(err));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(
//       position => resolve(position),
//       err => reject(err)
//     );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse Geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getting location data');
//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);

//     // Country data
//     // fetch(`https://www.sejuku.net/blog/52314`).then(res => console.log(res))
//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}?fullText=true`
//     );
//     if (!res.ok) throw new Error('Problem getting Country');
//     console.log(res);
//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);

//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.error(`${err} 💥`);
//     renderError(`💥 ${err.message}`);

//     // Rject Promise returned from async function
//     throw err;
//   }
// };
// console.log('1 Will get location');
// const city = whereAmI();
// console.log(city);
// whereAmI()
//   .then(city => console.log(`2 :${city}`))
//   .catch(err => console.error(`2. ${err.message}`))
//   .finally(() => console.log('3 finish getting location'));

// Convert to async
// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2 :${city}`);
//   } catch (err) {
//     console.error(`2. ${err.message}`);
//   }
//   console.log('3 finish getting location');
// })();

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }

const get3Countries = async function (c1, c2, c3) {
  try {
    const [data1] = await getJSON(
      `https://restcountries.eu/rest/v2/name/${c1}`
    );
    const [data2] = await getJSON(
      `https://restcountries.eu/rest/v2/name/${c2}`
    );
    const [data3] = await getJSON(
      `https://restcountries.eu/rest/v2/name/${c3}`
    );

    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));

    // console.log([data1.capital, data2.capital, data3.capital]);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
get3Countries('portugal', 'canada', 'tanzania');

// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

// Promise.race
Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err.message));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

// Promise.all
Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any [ES2021]
Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
