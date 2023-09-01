function dividir(valor1, valor2){
    const resultado = valor1 / valor2;
    return resultado;
}

function calcularIMC(){
    const valor1 = parseInt(prompt("Ingrese su peso en kg: "));
    const valor2 = parseInt(prompt("Ingrese su altura en metros: "));

    if(dividir(valor1,valor2) <= 18.5){
        alert("Su IMC es " + dividir(valor1,valor2) + " por lo tanto se clasifica en: BAJO");
    }
    
    else if( dividir(valor1,valor2) > 18.5 && dividir(valor1,valor2) <= 25){
        alert("Su IMC es " + dividir(valor1,valor2) + " por lo tanto se clasifica en: NORMAL");
    }

    else if( dividir(valor1,valor2) > 25 && dividir(valor1,valor2) <= 30){
        alert("Su IMC es " + dividir(valor1,valor2) + " por lo tanto se clasifica en: SOBREPESO");
    }

    else{
        alert("Su IMC es " + dividir(valor1,valor2) + " por lo tanto se clasifica en: OBESO");
    }
}

function repetirformulario(){
    for(let i = 0; i<5; i++){
    calcularIMC();
    }
}

repetirformulario();
