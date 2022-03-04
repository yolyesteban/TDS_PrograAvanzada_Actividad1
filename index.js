const mousetrap = require("mousetrap");

document.getElementById("botonUno").addEventListener("click", clickUno);
document.getElementById("botonDos").addEventListener("click", clickDos);
document.getElementById("botonTres").addEventListener("click", clickTres);
document.getElementById("botonCuatro").addEventListener("click", clickCuatro);
document.getElementById("botonCinco").addEventListener("click", clickCinco);
document.getElementById("botonSeis").addEventListener("click", clickSeis);
document.getElementById("botonSiete").addEventListener("click", clickSiete);
document.getElementById("botonOcho").addEventListener("click", clickOcho);
document.getElementById("botonNueve").addEventListener("click", clickNueve);
document.getElementById("botonCero").addEventListener("click", clickCero);
document.getElementById("suma").addEventListener("click", clickSuma);
document.getElementById("resta").addEventListener("click", clickResta);
document.getElementById("division").addEventListener("click", clickDivision);
document.getElementById("mult").addEventListener("click", clickMultiplicacion);
document.getElementById("retroceder").addEventListener("click", clickRetroceder);
document.getElementById("eliminar").addEventListener("click", clickEliminar);
document.getElementById("igual").addEventListener("click",clickIgual);
document.getElementById("historial").addEventListener("click",clickHistorial);
document.getElementById("botonBackCalculadora").addEventListener("click",clickBackCalculadora);

mousetrap.bind("1", clickUno);
mousetrap.bind("2", clickDos);
mousetrap.bind("3", clickTres);
mousetrap.bind("4", clickCuatro);
mousetrap.bind("5", clickCinco);
mousetrap.bind("6", clickSeis);
mousetrap.bind("7", clickSiete);
mousetrap.bind("8", clickOcho);
mousetrap.bind("9", clickNueve);
mousetrap.bind("0", clickCero);
mousetrap.bind("+", clickSuma);
mousetrap.bind("-", clickResta);
mousetrap.bind("/", clickDivision);
mousetrap.bind("*", clickMultiplicacion);
mousetrap.bind("backspace", clickRetroceder);
mousetrap.bind("del", clickEliminar);
mousetrap.bind("enter", clickIgual);
mousetrap.bind("=", clickIgual);

var actualElemento = document.getElementById("numeroActual");
var resultadoElemento = document.getElementById("resultado");
var actual = "";
var resultado = 0;
var operacion ="no"; // "no" =  sin operación.
var cadena = "";

function clickUno() {
    actual += 1;
    actualElemento.innerHTML = actual;
}

function clickDos() {
    actual += 2;
    actualElemento.innerHTML = actual;
}

function clickTres() {
    actual += 3;
    actualElemento.innerHTML = actual;
}

function clickCuatro() {
    actual += 4;
    actualElemento.innerHTML = actual;
}

function clickCinco() {
    actual += 5;
    actualElemento.innerHTML = actual;
}

function clickSeis() {
    actual += 6;
    actualElemento.innerHTML = actual;
}

function clickSiete() {
    actual += 7;
    actualElemento.innerHTML = actual;
}

function clickOcho() {
    actual += 8;
    actualElemento.innerHTML = actual;
}

function clickNueve() {
    actual += 9;
    actualElemento.innerHTML = actual;
}

function clickCero() {
    actual += 0;
    actualElemento.innerHTML = actual;
}


function clickSuma() {
    operacion="+";
    if (actual != "") {
        resultado += parseInt(actual);
        actual = "";
        actualElemento.innerHTML = "0";
        resultadoElemento.innerHTML = resultado;
    }
}

function clickResta() {
    operacion="-";
    if (actual != "") {
        if (resultado != "") {
            resultado -= parseInt(actual);
            actual = "";
            actualElemento.innerHTML = "0";
            resultadoElemento.innerHTML = resultado;
        }
        else {
            resultado = parseInt(actual);
            actual = "";
            actualElemento.innerHTML = "0";
            resultadoElemento.innerHTML = resultado;
        }
    }
}

function clickDivision() {
    operacion="/";
    if (actual != "") {
        if (resultado != "") {
            resultado /= parseInt(actual);
            actual = "";
            actualElemento.innerHTML = "0";
            resultadoElemento.innerHTML = resultado;
        }
        else {
            resultado = parseInt(actual);
            actual = "";
            actualElemento.innerHTML = "0";
            resultadoElemento.innerHTML = resultado;
        }
    }
}

function clickMultiplicacion() {
    operacion="*";
    if (actual != "") {
        if (resultado != "") {
            resultado *= parseInt(actual);
            actual = "";
            actualElemento.innerHTML = "0";
            resultadoElemento.innerHTML = resultado;
        }
        else {
            resultado = parseInt(actual);
            actual = "";
            actualElemento.innerHTML = "0";
            resultadoElemento.innerHTML = resultado;
        }
    }
}

function clickIgual() {
    if (actual != "") {
        if (operacion=="no") {
            actualElemento.innerHTML = "0";
            resultadoElemento.innerHTML = actual;
        }
        else{
            switch (operacion) {
                case "+":
                    resultado += parseInt(actual);
                    guardarHistorial();
                    break;
                case "-":
                    resultado -= parseInt(actual);
                    guardarHistorial();
                    break;
                case "*":
                    resultado *= parseInt(actual);
                    guardarHistorial();
                    break; 
                case "/":
                    resultado /= parseInt(actual);
                    guardarHistorial();
                    break;                                                   
                default:
                    break;
            }
            actual = "";
            actualElemento.innerHTML = "0";
            resultadoElemento.innerHTML = resultado;
        }
    }
}

function clickRetroceder() {
        actualElemento.innerHTML = "0";
        resultadoElemento.innerHTML = "0";
        retrocederClick();
}

function clickEliminar() {
    resultado = 0;
    actual = "";
    actualElemento.innerHTML = "0";
    resultadoElemento.innerHTML = "0";
}

function retrocederClick(){
    cifras=actual.length;               //Número de caracteres en pantalla
    br=actual.substr(cifras-1,cifras)   //Identificar último caracter
    actual=actual.substr(0,cifras-1)    //Quitar el ultimo caracter
    if (actual=="") {actual="0";}       //Si ya no quedan caracteres, colocar 0
    actualElemento.innerHTML=actual;    //Mostrar resultado en pantalla	
}

function guardarHistorial(){
    cadena += resultadoElemento.innerHTML + operacion + actualElemento.innerHTML + " = " + resultado + "<br/>";
    document.getElementById('operationsContainer').innerHTML = cadena;
}

function clickHistorial(){
    document.getElementById("calculadora").style.visibility = 'hidden';
    document.getElementById("historyContainer").style.visibility = 'visible';
}

function clickBackCalculadora(){
    document.getElementById("calculadora").style.visibility = 'visible' ;
    document.getElementById("historyContainer").style.visibility = 'hidden';
}

window.addEventListener('load', init, false);
function init() {
    let div = document.querySelector('#historyContainer');
    div.style.visibility = 'hidden';
}