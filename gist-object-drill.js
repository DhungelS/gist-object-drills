'use strict';
// drill 1
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

// drill 2
// const obj = {
//   foo: "Hello",
//   bar: "Ola",
//   fum: "Aloha",
//   quux: "Bonjour",
//   spam: "Hallo"
// }

// for (let key in obj){
//   console.log(`${key}:${obj[key]}`)
// }


// DRILL 3
// const theHobbit = {
//   meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']};
// console.log(theHobbit.meals[3]);

const arr = [
{
  name: "Joe",
  jobTitle: "Store Clerk"
},

{
  name: "Jeff",
  jobTitle: "Policeman"
},

{
  name: "John",
  jobTitle: "Fisher"
}
]

for(let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}