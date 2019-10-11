/**
 * Функция `getPath()`, находяющую уникальный css-селектор для элемента в документе
 * $0 // HTMLElement
 * getPath($0) // => "..."
 */

const paragraph1 = document.querySelector('p');
const paragraph2 = [...document.querySelectorAll('p')][0];

const getPath = element => {
  let result = null;

  const getElemName = elem => {
    return elem.nodeName.toLocaleLowerCase()
  };

  const getParent = (elem, acc) => {
    if (getElemName(elem) !== 'html' ) {
      return getParent(elem.parentElement, `${getElemName(elem.parentElement)} > ${acc}`)
    } else {
      return acc
    }
  };

  if (getElemName(element) === 'html') return 'html';
  if (
    getElemName(element) === 'body' && 
    getElemName(element.parentElement) === 'html'
  ) return 'html > body';

  result = getParent(element, getElemName(element))
  console.log(result)
  return result

  // tagName
  // parentElement
  // body > p:nth-child(4) > b
};

const element1 = document.querySelector(getPath(paragraph1));
const element2 = document.querySelectorAll(getPath(paragraph2));

// console.assert([...element2].length === 1);
console.assert(element1 === [...element2][0]); // Сравнение по ссылке .D
