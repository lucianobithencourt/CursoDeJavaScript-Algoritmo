function contagem() {
    
let inicio = Number(document.querySelector('#inicio').value)
let fim = Number(document.querySelector('#fim').value)
let passo = Number(document.querySelector('#passo').value)

if (inicio == '' || fim == '' || passo =='') {
    alert('[ERRO] - FALTA DADOS')
} else if (inicio == 0 || fim == 0 || passo == 0) {
    alert('[ERRO] - PREENCHA COM VALORES OS CAMPOS')
}

for (i = inicio ; i <= fim ;  i+=passo  ) {
    console.log(i);
    let element = document.querySelector('#count-numbers')
    element.innerHTML  +=` ${i} \u{1F449} ` // <-- colocar contagem
    
}







}