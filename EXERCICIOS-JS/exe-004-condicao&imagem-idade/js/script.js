function verificar() {

    let data = new  Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.querySelector('div#res')


    if (fano.value.length == 0 || fano.value > ano) {
        console.log(`[ERRO] - VERIFIQUE OS DADOS E TENTE NOVAMENTE !!  `);
    } else {
        let fsex = document.getElementsByName('radsex')
        let  idade = ano - Number(fano.value)
        // res.innerHTML = `idade ${idade}`

        let genero = ''
        
        let img = document.createAttribute('img')
        img.setAttribute('id','foto')


        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 & idade <10) {
                
                img.setAttribute('src','../img/homeemmenino.png')
            } else if (idade <21) {
                
            } else if (idade <50) {

            } else {

            }


        } else if( fsex[1].checked) {
            genero='Mulher'

            if (idade >=0 & idade <10) {
                
            } else if (idade <21) {
                
            } else if (idade <50) {

            } else {
                
            }

        }

        res.style.textAlign ='center'
        res.style.color='blue'
        res.style.fontWeight = 'bold'
        res.innerHTML =`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
   
}