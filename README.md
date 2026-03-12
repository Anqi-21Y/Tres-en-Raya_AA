# TRES EN RAYA

Pequeño proyecto del juego clásico **Tres en Raya (Tic-Tac-Toe)** desarrollado con **HTML, CSS y JavaScript**.

El objetivo del proyecto es practicar la manipulación del **DOM**, el uso de **eventos** y la implementación de **lógica de juego** en JavaScript.

---

# DESCRIPCIÓN

El juego genera dinámicamente un tablero de **3x3** donde dos jugadores se turnan colocando:

**X** y **O**

El sistema detecta automáticamente:

- Victoria de un jugador
- Empate
- Cambio de turno

También es posible **reiniciar la partida presionando la tecla R**.

---

# ESTRUCTURA DEL PROYECTO
tres-en-raya/
│
├── index.html
├── README.md
│
├── css/
│ └── style.css
│
└── js/
└── script.js


**index.html**

Contiene la estructura principal de la página y el contenedor donde se genera el tablero.

**style.css**

Define el estilo visual del tablero y las celdas.

**script.js**

Contiene toda la lógica del juego:

- creación del tablero
- manejo de clics
- control de turnos
- verificación de victoria o empate
- reinicio del juego

---

# FUNCIONAMIENTO

El estado del tablero se guarda en un **array de 9 posiciones**:
["", "", "", "", "", "", "", "", ""]


Cada posición representa una celda del tablero:
0 | 1 | 2
3 | 4 | 5
6 | 7 | 8


El programa comprueba varias combinaciones posibles para determinar si un jugador ha ganado.

Si el tablero se llena y no hay ganador, el juego termina en **empate**.

---

# CÓMO EJECUTAR EL PROYECTO

1. Descargar el proyecto.
2. Abrir el archivo **index.html** en el navegador.
3. Jugar haciendo clic en las celdas del tablero.

Para reiniciar el juego, presiona la tecla: R



---

# TECNOLOGÍAS UTILIZADAS

HTML5  
CSS3  
JavaScript
