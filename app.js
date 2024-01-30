let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumeros = [];
let numeroMaximo = 10;

function asignatTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario === numeroSecreto){
        asignatTextoElemento('p', `Acertaste el numero en ${numeroIntentos} ${(numeroIntentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignatTextoElemento('p', 'Numero secreto es menor');
        } else {
            asignatTextoElemento('p', 'Numero secreto es mayor');
        }
        numeroIntentos++;
        limpiarLinea();
    }
    return;
}

function limpiarLinea(){
    document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeros);
    
    if (listaNumeros.length == numeroMaximo){
        asignatTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        //si el numero generado esta en la lista
        if (listaNumeros.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignatTextoElemento('h1','Juego del numero secreto');
    asignatTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
}

function reiniciarJuego(){

    limpiarLinea();
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);

}

condicionesIniciales();

