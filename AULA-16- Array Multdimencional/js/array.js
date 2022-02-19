// let num = []

// num.push(4,5,6,7,8)

// console.log(num.indexOf(8));

// for (let i = 0; i < num.length; i++) {
//     console.log(`A posicao ${i} tem o valor ${num[i]}`);
    
// }

// FOR IN
// for (let i in num) {
//     console.log(`A posicao ${i} tem o valor ${num[i]}`);
        
//     }



// .push() - adiciona do final
// .length - comprimento do vetor
// .sort() - organiza em ordem crescente
// indexOf - buscar a posicao do valor desejado


/**
 * ------------------------------------------
 * Criando um arrays
 * 
 * let nome-do-array ['elemento','elemento']
 * 
 * nume-array[posicao]= valor-elemento
 * -------------------------------------------
 *  - Acessar um item do array []
 * nome-array[elemento[posicao-elemento]]
 * 
 * -------------------------------------------
 * 
 * Adicionar um item ao final do Array .push()
 * 
 * nume-array[posicao]= valor-elemento (automatizado)
 * ou
 * nome-array.push(nome-novo-elemento) - no final da array
 * 
 * -------------------------------------------
 * 
 * Remover um item do final do Array .pop()
 * nome-array.pop()
 * 
 * -------------------------------------------
 * 
 * Adicionar ao início do Array .unshift()
 * nome-array.unshift(nome-novo-elemento)
 * 
 * -------------------------------------------
 * Remover do início do Array .shift()
 * nome-array.shift
 * 
 * -------------------------------------------
 * Procurar o índice de um item na Array .push()
 * 
 * nome-array.push(nome-elemento)
 * 
 * -------------------------------------------
 * Remover um item pela posição do índice .splice()
 * Procurar o índice de um item na Array .indexof('nome-elemento')
 * 
 */

let listadecoisas = []

listadecoisas['frutas']=['limao','laranja','pessego','maçã']
listadecoisas['pessoas']=['luciano','luciana','vitor','felipe']

listadecoisas.frutas.sort()
console.log(listadecoisas.frutas);
console.log(listadecoisas.frutas[0]);