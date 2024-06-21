'use strict'
const module1 = {
  x: 42,
  getX: function () {
    //alert(this);
   return this.x;
  }
};
const unboundGetX = module1.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined
const boundGetX = unboundGetX.bind(module1);
console.log(boundGetX());
// expected output: 42
console.log(module1.getX.call(module1));
