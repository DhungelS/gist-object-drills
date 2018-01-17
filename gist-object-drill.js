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



// function decode (word){

//   const cipher = {
//     a: 2,
//     b: 3,
//     c: 4,
//     d: 5
//   };

//   const splitWords = word.split(' ');
//   const splitArray = splitWords.map ( word => {
//     let offset;
//     if(cipher[word[0]]){
//       offset = cipher[word[0]] - 1;
//     }
//     return offset ? word[offset] : ' ';
//   });
//   // else {
//   //   console.log(" ")
//   // }

//   return splitArray.join('');
// }

// console.log(decode('craft block argon meter bells brown croon droop'));

// DRILL 7

// const lotrCharacters = {

//   { name: 'Gandalf The White',
//     nickname: 'Gandalf',
//     race: 'Wizard',
//     origin:'Middle Earth',
//     attack: 10,
//     defense: 6,
//   }
//   { name: 'Bilbo Baggins',
//     nickname: 'Bilbo',
//     race: 'Hobbit',
//     origin:'The Shire',
//     attack: 2,
//     defense: 1,
//   }
//   { name: 'Frodo Baggins,
//     nickname: 'Frodo',
//     race: 'Hobbit',
//     origin:'The Shire',
//     attack: 6,
//     defense: 8,
//   }
//   { name: 'Aragorn son of Arathorn',
//     nickname: 'Aragorn',
//     race: 'Man',
//     origin:'Dunnedain',
//     attack: 6,
//     defense: 8,
//   }
//   { name: 'Legolas',
//     nickname: 'Legolas',
//     race: 'Elf',
//     origin:'Woodland Realm',
//     attack: 8,
//     defense: 5,
//   }
  
// }



function createCharacter (name, nickname, race, origin, attack, defense, describe) {
  return {
    name, nickname, race, origin, attack, defense,
    describe() {
      console.log(`${name} is a ${race} from ${origin}.`);
    },
    evaluateFight(character) {
      let attacker = 0;
      let defender = 0;
      if (defense > attack) {
        attacker =
      } if () {}
    },
  };
}

