/**parte de fronted 
 * Usamos esto para generar el tablero y probar la lógica.
*/

function inicializarJuego(){
    const app = document.getElementById('app');
    const tablero = document.createElement('div');

    tablero.id = "tablero-test";// Coincide con el CSS temporal

    // bucle un tablero con 9 
    for(let i = 0;i<9;i++){
        const celda = document.createElement('div');
        celda.classList.add('celda');

        //CLAVE: El Frontend debe poner este atributo data-index
        celda.dataset.index = i;

        // Vinculamos TU lógica de clic aquí
        celda.addEventListener('click',manejarClick);
        tablero.appendChild(celda);
    }
    app.appendChild(tablero);
    console.log("Tablero temporal generado para pruebas.")
}


//Backed part -----------------------------------------------------------------------------------------------

// State management

// para gaurdar los datos del tablero
// iniciar = null string (9)
// depende jugadores will change
let estadoTablero = ["", "", "", "", "", "", "", "", ""];

// El primero jugador , default X
let jugadorActual = "X";

//juego esta avanzado. si alquien WIN or EMPATE -> False
let juegoACtivo = true;

// obtener el activo de mostrar,para examinar
const statusDisplay = document.getElementById("status");


// Event Handle

// para function de click 
function manejarClick(evento){
    // obtener el elemento de html donde esta click
    const celdaClickeada = evento.target;

    // reade dataset obtener data index
    //parseInt para cambiar 0 de STRING a 0 de numeroçç
    const indice = parseInt(celdaClickeada.dataset.index);

    // guardar logico
    // si ya existe un X o O o juego ya esta final que RETURN directo (no  podemos jugar mas)
    if(estadoTablero[indice] !== "" || !juegoACtivo){
        return;
    }

    // si todo esta bien ni X y O y todavia esta jugando
    actualizarEstado (celdaClickeada, indice);

    // when finish game
    validarResultado();

}
    /** Actualizar*/

    function actualizarEstado(celda, indice){

        // actuar los datos
        estadoTablero[indice] = jugadorActual;

        // actuar la pantalla de frontend
        celda.innerText = jugadorActual;

        // Añadir css color para sparar X y O
        if(jugadorActual === "X"){
            celda.classList.add('jugador-x');// blue
        }else{
            celda.classList.add('jugador-o');//red
        }

    }

    // logica principal
    
    const condicionesVictoria = [
        [0,1,2], [3,4,5], [6,7,8], //filas
        [0,3,6], [1,4,7], [2,5,8], // columnas
        [0,4,8], [2,4,6] // diagonales
    ]

    function validarResultado(){
        let rondaGanar = false;

        // bucle, Compruebe si las condiciones actuales del mercado cumplen uno de estos criterios
        for(let i= 0 ; i < condicionesVictoria.length ; i++){

            const condicional = condicionesVictoria[i];

            const a = estadoTablero[condicional[0]];
            const b = estadoTablero[condicional[1]];
            const c = estadoTablero[condicional[2]];

            // si a,b y c hay un sitio esta null , pues no victoria ,pass
            if (a === '' || b === '' || c ===''){
                continue;
            }

            // if all have nececitamos pensar que todos string son igual o no
            if(a === b && b === c){
                rondaGanar = true; // we found winer
                break; // stop bc we already have winer
            } 
        }

        // Condicional A -- WIN
        if(rondaGanar){
            // actual texxt
            if(statusDisplay) statusDisplay.innerText = `¡ Ganar : ${jugadorActual}`;

            // attencion
            alert(`¡ jugador ${jugadorActual} ha ganado !`);

            // stop
            juegoACtivo = false;
            return;
        }


        // condicional B -- DRAW

        // si la tabla de array no hay null---
        if(!estadoTablero.includes("")){
            if(statusDisplay) statusDisplay.innerText = `¡ Empate !`;

            alert("¡ EMPATE !");

            // stop
            juegoACtivo = false;
            return;
        }


        // condicional C--continual

        jugadorActual = jugadorActual ==="X" ? "O" : "X";

        // alert
        if (statusDisplay) statusDisplay.innerText = `Turno del jugador : ${jugadorActual}`;

    }

    // RESET 

    document.addEventListener('keydown',(evento)=>{
        // if click r o R --> reset
        if (evento.key.toLowerCase() === 'r'){
            reiniciarJuego();
        }
    });

    function reiniciarJuego(){
        estadoTablero = ["", "", "", "", "", "", "", "", ""];
        juegoACtivo = true;
        jugadorActual = "X";

        if (statusDisplay) statusDisplay.innerText = `Turno del jugador X`;

        // cleanup all
        const celdas = document.querySelectorAll('.celda');
        celdas.forEach(celda =>{
            celda.innerText = "";
            celda.classList.remove('jugador-x');
            celda.classList.remove('jugador-o');
        });
        console.log("El sistema ya reiniciar...");
    }


// start ...
inicializarJuego();