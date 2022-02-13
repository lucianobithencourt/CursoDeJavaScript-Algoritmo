function carregar() {

    // variaveis
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    

    // dados dos sistemaOp
     let data = new Date();
     let hora = data.getHours()
     let min = data.getMinutes()


    // visualização na tela

    msg.innerHTML = `Agora são : ${hora}h${min}`

    // condicinmal

    if (hora >= 0 && hora < 12) {


        img.src = 'img/fotomanha.png'
        document.body.style.background = '#C4AC95'
        alert(`Bom Dia !! ${hora}:${min}`)

    } else if (hora >= 12 && hora < 18) {

        img.src = 'img/fototarde.png'
        document.body.style.background = '#EB8F7A'
        alert(`Boa Tarde !! ${hora}:${min}`)
        
    } else {

        img.src = 'img/fotonoite.png'
        document.body.style.background = '#30425F'
        alert(`Boa Noite !! ${hora}:${min}`)
    }
}