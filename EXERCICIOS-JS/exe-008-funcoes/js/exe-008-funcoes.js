let base = Number(prompt("Digite valor da base","Digite aqui"))
let altura = Number(prompt("Digite valor da altura","Digite aqui"))


function calcularArea( base,altura) {

    let area =( base*altura)
    return area
}

console.log(`A area têm ${calcularArea(base,altura)}mt<sup>2<sup>`);
document.write(`A area têm ${calcularArea(base,altura)}mt<sup>2<sup>`)