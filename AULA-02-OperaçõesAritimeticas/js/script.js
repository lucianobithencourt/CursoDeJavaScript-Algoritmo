// Operator	Description
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Division Remainder)
// ++	Increment
// --	Decrement

// Seu carro tem um tanque de 40 litros. Com gasolina, e usando todo o
// tanque, você fez um caminhoComGasolina de 480 quilômetros. Qual é o
// consumoDeGasolina? Para calculá-lo, divida a distância percorrida pela quantidade de litros gasto. Imprima esse valor, organizando suas contas em variáveis.
// É comum utilizar uma variável dessa forma, como consumoDeGasolina. A letra
// D e G facilitam a leitura. Compare consumoDeGasolina com consumodegasolina.
// E fique atento: se você errar o maiúscula/minúscula depois que criar a variável, o
// código não funcionará como esperado.

let tanque = 40;
let distanciaKm = 300;

let mediaConsumo = (distanciaKm / tanque)

alert ('Seu consumo  médio foi de ' + mediaConsumo + ' quilometros para um 1lt rodado...');