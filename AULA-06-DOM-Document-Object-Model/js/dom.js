
// let element = document.getElementsByTagName('p')[0]

// element.style.color='red'
// element.style.fontSize='1.1em'

// let element2 = document.getElementsByTagName('p')[1]
// element2.innerText='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'

// element2.style.color='purple';

// let element = document.getElementById('nome-id');
// element.innerHTML='Acessado via getElementById(nome-id)';

let element = document.getElementsByClassName('classe')[0]

element.innerText='Alterando elemento da  posição[0]....';
element.style.color='navy';
element.style.fontWeight='bold';
// -------------------------------------------------------
let element2 = document.getElementsByClassName('classe')[1]

element2.innerText='Alterando elemento da  posição[1]....';
element2.style.color='purple';
element2.style.fontWeight='bold';

let element3 = document.getElementsByClassName('classe')[2]

element3.innerText='Alterando elemento da  posição[2]....';
element3.style.color='yellow';
element3.style.fontWeight='bold';

// 


let element4 = document.querySelector('p#query')

element4.innerHTML="A seleção segue sintaxe que se usa no css # para id's e  \'.\' para class";
element4.style.color='blue';
element4.style.fontWeight='bold';

// -------------------------------------------------------------


let element5 = document.querySelector('p.class')
element5.innerHTML="A seleção segue sintaxe que se usa no css # para id's e  \'.\' para class";
element5.style.color='blue';
element5.style.fontWeight='bold';


