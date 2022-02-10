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

// precedencia 

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