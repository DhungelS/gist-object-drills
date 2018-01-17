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

// const arr = [
// {
//   name: "Joe",
//   jobTitle: "Store Clerk"
// },

// {
//   name: "Jeff",
//   jobTitle: "Policeman"
// },

// {
//   name: "John",
//   jobTitle: "Fisher"
// }
// ]

// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }



function decode (word){

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
}

const splitWords = word.split(" ")
const splitArray = splitWords.map ( word => {
  let offset;
  if(cipher[word[0]]){
    offset = cipher[word[0]] - 1
  }
  return offset ? word[offset] : " ";
 })
// else {
//   console.log(" ")
// }

return splitArray.join("");
}

console.log(decode("craft block argon meter bells brown croon droop"));