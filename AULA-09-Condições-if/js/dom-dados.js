function calcular() {

    // pegando pegando dados na pagina
    let element1 = Number(document.getElementById('valor1').value);
    let element2 = Number(document.getElementById('valor2').value);

    // processamento
    let soma = (element1+element2);
    console.log(soma);

    
    // enviar para html resultado
    let tela =  document.getElementById('resposta-calculo')
    tela.innerHTML=soma

} // <<--fim  da função

