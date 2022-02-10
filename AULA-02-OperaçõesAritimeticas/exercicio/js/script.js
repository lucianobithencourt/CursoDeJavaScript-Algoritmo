
let tanqueEthanol = 40;
let distanciaEthanolKm = 300;

let tanqueGasolina = 40;
let distanciaGasolinaKm = 480;

let mediaConsumoG = (distanciaEthanolKm / tanqueEthanol)

let mediaConsumoE = (distanciaGasolinaKm / tanqueGasolina)


let pularLinha = function (){

    document.write("<hr>")
}


document.write('Seu consumo  médio foi de ' + mediaConsumoG + ' quilometros para um 1lt rodado... com gasolina');
pularLinha()
document.write ('Seu consumo  médio foi de ' + mediaConsumoE + ' quilometros para um 1lt rodado...com ethanol');
pularLinha()
let precoGasolina = 6.89
let precoEthanol = 5.89

let precolitroG = (mediaConsumoG/precoGasolina);

let precolitroE = (mediaConsumoE/precoEthanol);
+Math.round

document.write("Custando R$ " + precolitroG.toFixed(2)+" o quilometro rodado com gasolina ")
pularLinha()

document.write("Custando R$" + precolitroE.toFixed(2)+" o quilometro rodado com ethanol" )