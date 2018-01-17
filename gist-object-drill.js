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
    name: 'Joe',
    jobTitle: 'Store Clerk',
  },

  {
    name: 'Jeff',
    jobTitle: 'Policeman',
    boss: 'Joe',
  },

  {
    name: 'John',
    jobTitle: 'Fisher',
    boss: 'Joe'
  }
];

for(let i = 0; i < arr.length; i++){
  const employee = arr[i];
  if (!employee.boss) {
    console.log(`${employee.name} doesn't have a boss`);
  } else {
    console.log(`${employee.jobTitle} ${employee.name} to ${employee.boss}`);
  }
}
