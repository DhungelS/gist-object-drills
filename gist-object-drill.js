'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: function () {
    const hydroCalc = (this.water / this. flour) * 100;
    return hydroCalc;
  }
}

console.log(`${loaf.flour} ${loaf.water}`);
console.log(loaf.hydration());
