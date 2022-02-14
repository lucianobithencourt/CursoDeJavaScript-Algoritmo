// switch-case

let element = prompt(`Selecione uma das opções desejadas :  
[01] - CALCULAR IMC -
[02] - CALCULAR SUA IDADE -
[03] - CONVERTER TEMPERATURAS - 
[04] - CALCULAR MEDIA SEMESTRAL - 
`, `Digite aqui`)

let opcao = Number(element)

switch (opcao) {
    case 1:
        

        let peso = parseFloat(prompt("Informe seu peso atual"));
        let altura = parseFloat(prompt("Informe sua altura"));

        let imc = peso / (altura**2)
     
        console.log(imc.toFixed(2));

        if (imc < 18.5) {
            alert(`Seu  imc esta : ${imc.toFixed(2)} - Você esta baixo do peso indicado`)
        } else if (imc > 18.5 && imc < 24.9) {
            alert(`Seu  imc esta : ${imc.toFixed(2)} - Você com peso adequado`)
        } else if (imc > 25 && imc < 29.9) {
            alert(`Seu  imc esta : ${imc.toFixed(2)} - Você com peso sobrepeso`) 
        
        } else if (imc > 30 && imc < 34.9) {
            alert(`Seu  imc esta : ${imc.toFixed(2)} - Você com peso sobrepeso`)

        } else if (imc > 30 && imc < 34.9) {
            alert(`Seu  imc esta : ${imc.toFixed(2)} - Você com peso obesidade de Grau - I`)
        
        } else if (imc > 35 && imc < 39.9) {
            alert(`Seu  imc esta : ${imc.toFixed(2)} - Você com peso obesidade de Grau - II`)

        } else {
            
            alert(`Seu  imc esta : ${imc.toFixed(2)} - Você com peso obesidade de Grau - III`)
        }
        break;

        case 2:

            let anoNascimento = Number(prompt("Digite o ano de seu nascimento","Digite aqui"))

            let anoAtual = new  Date();
            let ano = anoAtual.getFullYear();

            idade = (ano - anoNascimento);
            console.log(idade)
            alert(`Você tem : ${idade} anos - Parabens !!!`)
    break;

case 3:
    alert("Coverter Fahrenheit (°F) em Celsius (°C)");
            let farh =parseFloat(prompt('Informe a temperatura em °F'));
             // (32 °F − 32) × 5/9 = 0 °C
    
             let celsius = (farh-32)*(5/9) 
             console.log(celsius.toFixed(2));
             alert(`Temperatura convertida : ${celsius.toFixed(2)} C°`)
    break;

    case 4:
        alert("OPCAO[1] - Calcular mediafinal de aluno");
    let faltas = parseInt(prompt("Informe total de faltas", "Digite aqui"));
    let nta1 = parseFloat(prompt("Informe valor da 1ªNota", "Digite aqui"));
    let nta2 = parseFloat(prompt("Informe valor da 2ªNota", "Digite aqui"));
    let nta3 = parseFloat(prompt("Informe valor da 3ªNota", "Digite aqui"));

    media = (nta1 + nta2 + nta3) / 3;

    if (faltas < 25 && media > 7.0) {
    //   document.getElementById("mediafinal").innerText = "APROVADO";
      alert(`APROVADO`)
    //   document.write("<br> Media do aluno :" + media.toFixed(2));
      alert(`Media do aluno : ${media.toFixed(2)}`)
    //   document.write("<br> Total de faltas : " + faltas);
      alert(`Total de Faltas : ${faltas}`)

    } else if ((faltas > 25 && faltas <= 27) || (media >= 6.0 && media < 6.9)) {
    //   document.getElementById("mediafinal").innerText = "RECUPERÇÃO";
      alert(`Você esta de : RECUPERAÇÃO`)
    //   document.write("<br> Media do aluno :" + media.toFixed(2));
      alert(`Média do aluno : ${media.toFixed(2)}`)
    //   document.write("<br> Total de faltas : " + faltas);
      alert(`Total de faltas : ${faltas}`)

    } else if (faltas > 27 || (media <= 5.0 && media < 5.9)) {
    //   document.getElementById("mediafinal").innerText = "REPROVADO";
      alert(`Você foi : REPROVADO`)
    //   document.write("<br> Media do aluno :" + media.toFixed(2));
      alert(`Média do aluno : ${media.toFixed(2)}`)
    //   document.write("<br> Total de faltas : " + faltas);
      alert(`Total de faltas : ${faltas}`)
    }
    break;

default:
    alert(`Opcão invalidade ! tente  novamente `)
    break;
    }

    






