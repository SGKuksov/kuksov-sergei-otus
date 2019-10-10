/**
 * Функция `getPath()`, находяющую уникальный css-селектор для элемента в документе
 * $0 // HTMLElement
 * getPath($0) // => "..."
 */

const paragraph1 = document.querySelector('p');
const paragraph2 = [...document.querySelectorAll('p')][0];

const getPath = element => {
  let result = null;

  if (element.tagName === 'html') return 'html';
  if (element.tagName === 'body') return 'html > body';
  const b = document.querySelector('html > body');

  

  return result;
};

const element1 = document.querySelector(getPath(paragraph1));
const element2 = document.querySelectorAll(getPath(paragraph2));

console.assert([...element2].length === 1);
console.assert(element1 === [...element2][0]); // Сравнение по ссылке .D
