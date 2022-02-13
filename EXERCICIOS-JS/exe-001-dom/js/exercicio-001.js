
 function nacionalidade () {

    

  let element = document.getElementById('nacional').value

        

    if (element == 'brasileiro' || element == 'brasileira' ) {

        alert("Brasileiro(a)-Nato");
        document.querySelector('span').innerHTML='Brasileiro(a)-Nato'
        
        
    } else if (element == 'Brasileiro' || element == 'Brasileira' ) {
        alert("Brasileiro(a)-Nato)");
        document.querySelector('span').innerHTML='Brasileiro(a)-Nato'

    } else if (element == 'BRASILEIRO' || element == 'BRASILEIRA' ) {
        alert("Brasileiro(a)-Nato");
        document.querySelector('span').innerHTML='Brasileiro(a)-Nato' 

    } else if (element == '' || element == '' ) {
        alert("Preencha campo de nacionalidade");
        document.querySelector('span').innerHTML='Preencha campo de nacionalidade' 

    } else {
        alert("Estrangeiro(a)");
        document.querySelector('span').innerHTML='Estrangeiro(a)'
    }
    
        
        
    
} // <<< fim funcao