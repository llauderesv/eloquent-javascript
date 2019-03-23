/* eslint-disable */
(function() {
  'use strict';

  const loop = (iterator, test, update, event) => {
    for (let i = iterator; test(i); i = update(i)) {
      event(i);
    }
  };

  loop(3, n => n > 0, n => n - 1, console.log);
  // Output:
  //  3
  //  2
  //  1

  // Using Every
  const every = (array, test) => {
    for (let i = 0; i < array.length; i++) {
      if (!test(array[i])) return false;
    }
    return true;
  };

  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true

  // Using some to find an item in existing array..
  const everySome = (array, test) => {
    const result = array.some(i => test(i));
    return !result ? false : true;
  };

  console.log(everySome([1, 3, 5], n => n < 10));
  // → true
  console.log(everySome([2, 4, 16], n => n < 10));
  // → false
  console.log(everySome([], n => n < 10));
  // → true
});
