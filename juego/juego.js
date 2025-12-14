const preguntas = [
  {
    pregunta: "¿En qué estado de Brasil se encuentra Florianópolis?",
    opciones: ["Río de Janeiro", "São Paulo", "Santa Catarina", "Paraná"],
    correcta: "Santa Catarina"
  },
  {
    pregunta: "¿Por qué Florianópolis es conocida como “La Isla de la Magia”?",
    opciones: [
      "Por sus playas secretas",
      "Por las leyendas de brujas y mitos",
      "Por sus festivales musicales",
      "Por su clima tropical"
    ],
    correcta: "Por las leyendas de brujas y mitos"
  },
  {
    pregunta: "¿Cuál de estas playas es famosa por el surf?",
    opciones: ["Jurerê Internacional", "Lagoinha do Leste", "Praia Mole", "Canasvieiras"],
    correcta: "Praia Mole"
  },
  {
    pregunta: "¿A qué playa se accede principalmente a través de una trilha?",
    opciones: ["Praia Mole", "Lagoinha do Leste", "Jurerê Internacional", "Ingleses"],
    correcta: "Lagoinha do Leste"
  },
  {
    pregunta: "¿Qué tipo de paisaje se encuentra al recorrer las trilhas de Florianópolis?",
    opciones: [
      "Desiertos y dunas secas",
      "Selva, miradores y vistas al mar",
      "Montañas nevadas",
      "Campos y llanuras"
    ],
    correcta: "Selva, miradores y vistas al mar"
  },
  {
    pregunta: "¿Qué fruto de mar es muy típico en la gastronomía de Florianópolis?",
    opciones: ["Langosta", "Camarón", "Ostras", "Pulpo"],
    correcta: "Ostras"
  },
  {
    pregunta: "¿En qué barrio se pueden encontrar restaurantes tradicionales de pescados y mariscos?",
    opciones: ["Centro", "Santo Antônio de Lisboa", "Ingleses", "Campeche"],
    correcta: "Santo Antônio de Lisboa"
  },
  {
    pregunta: "¿Qué actividad es común al atardecer en las playas de Florianópolis?",
    opciones: [
      "Esquiar",
      "Hacer snorkel nocturno",
      "Ver la puesta del sol",
      "Pescar en alta mar"
    ],
    correcta: "Ver la puesta del sol"
  },
  {
    pregunta: "¿Cuál de estas playas es ideal para caminar y relajarse?",
    opciones: ["Campeche", "Praia Mole", "Lagoinha do Leste", "Joaquina"],
    correcta: "Campeche"
  },
  {
    pregunta: "¿Qué medio de transporte es el más usado para recorrer la isla?",
    opciones: ["Tren", "Subte", "Auto o colectivo", "Lancha"],
    correcta: "Auto o colectivo"
  }
];


let preguntaActual = 0;
let puntaje = 0;
/*const no cambia el tipo de dato */
const pantallaInicio = document.getElementById("pantalla-inicio");
const btnJugar = document.getElementById("btn-jugar");
const juegoDiv = document.getElementById("juego");
const resultadoDiv = document.getElementById("resultado");

btnJugar.addEventListener("click", iniciarJuego);

function iniciarJuego() {
  pantallaInicio.style.display = "none";
  juegoDiv.style.display = "flex";
  juegoDiv.style.flexDirection = "column";
  juegoDiv.style.alignItems = "center";
  resultadoDiv.style.display = "none";
  mostrarPregunta();
}

function mostrarPregunta() {
  juegoDiv.style.display = "flex";
  juegoDiv.style.flexDirection = "column";
  juegoDiv.style.alignItems = "center";
  resultadoDiv.style.display = "none";
  /*la diferencia es que uno es estilos y otro html*/
  resultadoDiv.innerHTML = "";
  /*arranca el juego*/
  const pregunta = preguntas[preguntaActual];

  // Construimos el contenedor para pregunta y opciones
  juegoDiv.innerHTML = ` 
  <div class="pregunta-container">
      <div class="pregunta">${pregunta.pregunta}</div>
      ${pregunta.opciones.map(opcion =>
        `<button class="opcion" onclick="seleccionarOpcion('${opcion}')">${opcion}</button>`
      ).join("")}
    </div>
  `;
}

function seleccionarOpcion(opcionSeleccionada) {
  const botones = document.querySelectorAll('.opcion');
  const correcta = preguntas[preguntaActual].correcta;

  botones.forEach(boton => {
    boton.disabled = true;
    /*si la opcion es correcta, se pone de color verde y si no es correcta se pone de color rojo*/
    if (boton.textContent === correcta) {
      boton.classList.add('correcta');
    } else if (boton.textContent === opcionSeleccionada) {
      boton.classList.add('incorrecta');
    }
  });

  if (opcionSeleccionada === correcta) {
    puntaje++;
  }
//muestra todas las preguntas hasta la 9, y cuando llega ahi muestra el resultado
  setTimeout(() => {
    preguntaActual++;
    if (preguntaActual < preguntas.length) { //longitud del array
      mostrarPregunta();
    } else {
      mostrarResultado();
    }
    //cada un segundo
  }, 1000);
}

function mostrarResultado() {
  juegoDiv.style.display = "none";
  //hace que el html no este
  juegoDiv.innerHTML = "";

  resultadoDiv.style.display = "block";
  resultadoDiv.innerHTML = `
    <div class="resultado-box">
      <p>¡Juego terminado!</p>
      <p>Obtuviste <strong>${puntaje}</strong> de <strong>${preguntas.length}</strong> respuestas correctas.</p>
    <button class="btn-diseño" onclick="reiniciarJuego()">Volver a jugar</button>
    <button class="btn-diseño" onclick="volverAlInicio()">Volver al inicio</button>
 
 
    </div>
  `;
 }

 function volverAlInicio() {
  preguntaActual = 0;
  puntaje = 0;

  resultadoDiv.style.display = "none";
  juegoDiv.style.display = "none";
  juegoDiv.innerHTML = "";

  pantallaInicio.style.display = "flex";
}

 function reiniciarJuego() {
  preguntaActual = 0;
  puntaje = 0;
  iniciarJuego();
}
