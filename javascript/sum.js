/**
 *  функцию sum, которая может быть исполнена множество раз
 *  sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n
 */

function sum(item) {
  if (item === undefined) {
    return item;
  } else if (!item && item !== 0 && !isNaN(item)) {
    return 0;
  }

  let result = item;

  function func(iter) {
    if (isNaN(iter) && iter !== undefined) {
      iter = iter.toString();
    } else if (!iter && iter !== 0) {
      return result;
    }

    result += iter;
    return func;
  }

  return func;
}

console.assert(sum(1)(2)(3)() === 1 + 2 + 3);
console.assert(sum(1)(1)(1)() === 1 + 1 + 1);
console.assert(sum(5)(0)(0)() === 5 + 0 + 0);
console.assert(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(0)() === 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 0);
console.assert(sum(1)() === 1);
console.assert(sum() === undefined);
console.assert(sum('A-a-a-a-a-a-a')() === 'A-a-a-a-a-a-a');
console.assert(isNaN(sum(NaN)()));
console.assert(
  sum(NaN)(NaN)(NaN)(NaN)(NaN)(NaN)(NaN)(NaN)(', Batman!')() === 'NaNNaNNaNNaNNaNNaNNaNNaN, Batman!'
);
