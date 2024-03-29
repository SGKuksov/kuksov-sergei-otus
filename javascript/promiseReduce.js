/*
 * promiseReduce(asyncFunctions, reduce, initialValue) - последовательно вызывает переданные асинхронные функции и выполняет reduce функцию сразу при получении результата до вызова следующей асинхронной функции. Функция promiseReduce должна возвращать промис с конечным результатом
 *
 * asyncFunctions - массив асинхронных функций, возвращающих промис
 * reduce(memo, value) - функция, которая будет вызвана для каждого успешно завершившегося промиса
 * initialValue - стартовое значение для функции reduce
 *
 */

const fn1 = () => {
  console.log('fn1');
  return Promise.resolve(1);
};

const fn2 = () =>
  new Promise(resolve => {
    console.log('fn2');
    setTimeout(() => resolve(2), 1000);
  });

const fn3 = () =>
  new Promise(resolve => {
    console.log('fn3');
    setTimeout(() => resolve(3), 2000);
  });

const asyncFunctions = [fn1, fn2, fn3];

const reduce = (memo, value) => {
  console.log('reduce');
  return memo * value;
};

const promiseReduce = async (asyncFunctions, reduce, initialValue) => {
  let result = initialValue;

  for (const fn of asyncFunctions) {
    result = reduce(result, await fn());
  }

  return Promise.resolve(result);
};

promiseReduce(asyncFunctions, reduce, 1)
  .then(result => {
    console.log(result);
    console.assert(result === 6);
  })
  .catch(console.error);
