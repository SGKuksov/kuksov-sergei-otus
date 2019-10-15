/**
 * Функция `getPath()`, находяющую уникальный css-селектор для элемента в документе
 * $0 // HTMLElement
 * getPath($0) // => "..."
 */

const paragraph1 = document.querySelector('p + p');
// const paragraph2 = [...document.querySelectorAll('p')][0];

const getPath = element => {
  let result = null;

  if (element.tagName === 'html') return 'html';
  if (element.tagName === 'body') return 'html > body';
  const b = document.querySelector('html > body');

  const getName = el => {
    return el.nodeName.toLowerCase();
  };
  const getParent = el => {
    return el.parentNode;
  };
  const getSiblings = el => {
    const name = getName(el)
    let siblings = [];
    let sibling = el;
    while (sibling.previousElementSibling && name === getName(sibling.previousElementSibling)) {
      sibling = sibling.previousElementSibling;
      sibling.nodeType == 1 && siblings.push(sibling);
    }

    sibling = el;
    while (sibling.nextElementSibling && name === getName(sibling.nextElementSibling)) {
      sibling = sibling.nextElementSibling;
      sibling.nodeType == 1 && siblings.push(sibling);
    }

    return siblings;
  };

  const recursiveGetPath = (el, acc) => {
    const siblings = getSiblings(el);
    console.log(siblings);

    if (getName(el) === 'html') {
      return `html > ${acc}`;
    } else {
      const name = getName(el);
      const parent = getParent(el);

      return recursiveGetPath(parent, `${name} > ${acc}`);
    }
  };

  result = recursiveGetPath(getParent(element), getName(element));

  // tagName
  // body > p:nth-child(4) > b

  return result;
};

console.log(getPath(paragraph1));

// const element1 = document.querySelector(getPath(paragraph1));
// const element2 = document.querySelectorAll(getPath(paragraph2));

// console.assert([...element2].length === 1);
// console.assert(element1 === [...element2][0]); // Сравнение по ссылке .D
