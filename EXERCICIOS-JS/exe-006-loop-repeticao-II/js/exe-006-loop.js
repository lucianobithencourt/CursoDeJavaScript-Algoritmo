function contagem() {

    let vlr = Number(document.querySelector('#inicio').value)



    if (vlr == '0' || vlr == '' || vlr < 0) {
        alert('[ERRO] - INFORME VALOR VALIDO')
    }

    for (i = 1; i <= 10; i++) {

        console.log(`${vlr} x ${i} = ${vlr*i}`);
        let element = document.querySelector('#tabuada')
    element.innerHTML +=  ` <br> ${vlr} x ${i} = ${vlr*i} `
            
    }

    














}