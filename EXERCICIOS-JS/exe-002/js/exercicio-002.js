
 function velocidade() {

    

  let element = Number(document.getElementById('velocidade').value)
        

    if (element > 0  && element < 60 ) {

        // alert("No limite de velocidade");
        document.querySelector('span').innerHTML='No limite de velocidade'
        
        
    } else if (element > 60  && element <= 70  ) {
        // alert("Reduza velucidade ! Sujeito a Multas por ecesso");
        document.querySelector('span').innerHTML='Reduza velucidade ! Sujeito a Multas por excesso'

    } else if (element > 70  && element <= 190  ) {
        // alert("Multado!!!");
        document.querySelector('span').innerHTML="Multado!!!" 

    } else if (element == '' || element == '' ) {
        // alert("Preencha campo de velocidade");
        document.querySelector('span').innerHTML='Obrigatorio informar velocidade' 

    } 
  
} // <<< fim funcao

alert("Use cinto de segurança !! ele salva vidas")