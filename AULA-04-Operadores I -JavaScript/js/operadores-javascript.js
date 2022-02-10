// OPERADORES ARITMETICOS 

/**
 * +	Adição
-	Subtração
*	Multiplicação
/	Divisão
%	Módulo
++	Incremento
--	diminuição
**  exponenciação
 */

let valorNum1 = 5;
let valorNum2 = 2;

let  adicao = (valorNum1+valorNum2);
console.log(`Resultado da operação de adicao dos valores ${valorNum1} + ${valorNum2} =   ${adicao}`);

let  subtracao = (valorNum1-valorNum2);
console.log(`Resultado da operação de adicao dos valores ${valorNum1} - ${valorNum2} =   ${subtracao}`);

let  multiplicacao = (valorNum1*valorNum2);
console.log(`Resultado da operação de adicao dos valores ${valorNum1} * ${valorNum2} =   ${multiplicacao}`);

let  divisao = (valorNum1/valorNum2);
console.log(`Resultado da operação de adicao dos valores ${valorNum1} / ${valorNum2} =   ${divisao}`);

let  modulo = (valorNum1%valorNum2);
console.log(`Resultado da operação de adicao dos valores ${valorNum1} % ${valorNum2} =   ${modulo}`);

let  exponenciacao = (valorNum1**valorNum2);
console.log(`Resultado da operação de adicao dos valores ${valorNum1} ** ${valorNum2} =   ${exponenciacao}`);

// PRECEDENCIA NA OPERAÇÃO ARITIMETICA

let a = 5 + 3
console.log(a);
let b = a % 5
console.log(b);
let c = 5 * b**2
console.log(c);
let d = 10-a/2
console.log(d);
let e = 6 * 2 / d
console.log(e);
let f = b%e + 4/e
console.log(f);

// AUTO-ATRIBUIÇÃO

let n = 3

// n = n += 4 
// é o mesmo que n = 3 + 4

n = n += 4
console.log(n);

n = n-=5 
console.log(n);

n = n*=4
console.log(n)

n = n/=2
console.log(n)

n = n**=2
console.log(n)

n = n%=5
console.log(n)

// INCREMENTO ++ E DECREMENTO --

// incremento 

 let x1 = 5
 x1++
 console.log(x1);

// pre-incremento 
let x2 = 5
 ++x2
 console.log(x2);

//  decremento 
let y1 = 10 
y1--
console.log(y1);


//  pré-decremento 
let y2 = 10 
--y2
console.log(y2);

