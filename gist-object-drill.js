'use strict';

// const loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function () {
//     const hydroCalc = (this.water / this. flour) * 100;
//     return hydroCalc;
//   }
// }

// console.log(`${loaf.flour} ${loaf.water}`);
// console.log(loaf.hydration());

const obj = {
  foo: "Hello",
  bar: "Ola",
  fum: "Aloha",
  quux: "Bonjour",
  spam: "Hallo"
}

for (let key in obj){
  console.log(`${key}:${obj[key]}`)
}