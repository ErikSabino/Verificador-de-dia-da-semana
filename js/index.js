function diaDaSemana() {
    var dia = new Date().getDay();

    console.log(dia);

    switch (dia) {
        case 0:
            document.getElementById("teste").innerHTML = "Hoje é Domingo";
            break;
        case 1:
            document.getElementById("teste").innerHTML = "Hoje é Segunda";
            break;
        case 2:
            document.getElementById("teste").innerHTML = "Hoje é Terca";
            break;
        case 3:
            document.getElementById("teste").innerHTML = "Hoje é Quarta";
            break;
        case 4:
            document.getElementById("teste").innerHTML = "Hoje é Quinta";
            break;
        case 5:
            document.getElementById("teste").innerHTML = "Hoje é Sexta";
            break;
        case 6:
            document.getElementById("teste").innerHTML = "Hoje é Sabado";
            break;                   
        default:  
    
            document.getElementById("teste").innerHTML = "Não sei que dia é...";
    }
}