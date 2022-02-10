
//  .length conta quantidades 
// .toUpperCase() DEIXA AS LETRAS MAIUSCULAS
//  .toLowerCase() deixa as letras minusculas

// let $nome = prompt("Qual seu nome","Digite aqui")

//  alert(`Prazer te conhecer ${$nome}`)

//  alert(`Seu nome ${$nome} tem ${$nome.length} letras`)

//  alert(`Formas de deixar a string do codigo MAIUSCULO e minusculo usando toUppercase toLowercase `);

//  alert(`Ficando assim : ${$nome.toUpperCase()} com toUpperCase()`);
//  alert(`Ficando assim : ${$nome.toLowerCase()} com toLowerCase()`);


//   Math.around() - arredonda valores decimais
//  toFixed() - cola quantidade de numeros decimais pos ponto.
// replace ('origim' , 'novoValor') troca valores 




//  OPERAÇÃO SIMPLES DE SOMA 
 let $num1 = Number(prompt("Digite um valor","Digite aqui"))

let $num2 = Number(prompt("Digite um valor","Digite aqui"))

let $soma = ($num1+$num2)

 console.log(`A soma dos valores é igual ${$soma}`);

 console.log(`A soma dos valores é igual ${Math.round($soma)}`);

 document.write(`A soma dos valores é igual ${$soma}<br>`)

document.write(`A soma dos valores é igual ${Math.round($soma)}`);

console.log(`A soma dos valores é igual ${$soma.toFixed(2)}`);
 
 console.log(`A soma dos valores é igual ${Math.round($soma).toFixed(2)}`);

