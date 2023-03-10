    
    var loginCadastrado = "Tabuada";
    var senhaCadastrada = "Tabuada321";

    
    function informeLogin(loginInformado, senhaInformada) {
    if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {

        return(1);

    } else {

        return(0);
    }}
    while(true){
    var loginInformado = prompt("Informe seu login");
    var senhaInformada = prompt("Informe sua senha");
    
    x = informeLogin(loginInformado, senhaInformada);
    if(x == 1) {
        break;
    }
    }
    function pulaLinha() {
        document.write("<br><br>");
    }
    function mostra(frase){
        
        document.write(frase);
        document.write("<br>");
    }
    var aqueleQueMulti = parseInt(prompt("digite aqui o multiplicador: "));
    var multiplicador = 1;
    var numeroMulti = parseInt(prompt("digite aqui seu numero multiplicado: "));
    while( isNaN(numeroMulti)) {
        numeroMulti = parseInt(prompt("digite aqui seu numero multiplicado: "));
    }
        while( isNaN(aqueleQueMulti)) {
        aqueleQueMulti = parseInt(prompt("digite aqui seu numero multiplicado: "));
    }
   for(var multiplicador = 1; multiplicador <= aqueleQueMulti; multiplicador = multiplicador + 1) {

        mostra(numeroMulti * multiplicador);
        

    }
    mostra("FIM!");
    issta