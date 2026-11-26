// Calendario de Adviento para Oney ❤️
// Diciembre de 2026 · Se abre cada día a las 00:00 (hora local del dispositivo).
// Para cambiar un reto o una frase, edita el objeto correspondiente en "sorpresas".

const ANIO = 2026;
const MES = 11; // JavaScript cuenta enero como 0 y diciembre como 11.
const HORA_APERTURA = 0;

const sorpresas = [
  {
    tipo: "reto", emoji: "🌷", titulo: "Comencemos esta aventura",
    mensaje: "Reto del día: enviar una foto cada hora de lo que hacemos en nuestro día desdde que nos levantemos. Quiero conocer también esos pequeños momentos de tu vida."
  },
  {
    tipo: "frase", emoji: "❤️", titulo: "Un pequeño recordatorio",
    mensaje: "Oney, nunca olvides lo valiosa que eres. Que un día difícil no te haga dudar de todo lo bonito que hay en ti. Confío en ti y deseo que nunca dejes de perseguir tus sueños y tus metas, por que siempre estara este loco celebrando todos tus logros."
  },
  {
    tipo: "reto", emoji: "💌", titulo: "Quiero conocerte más",
    mensaje: "Cuéntame tres cosas sencillas que te hacen feliz y que quizás todavía no conozco de ti."
  },
  {
    tipo: "frase", emoji: "✨", titulo: "Para ti",
    mensaje: "Aunque no siempre pueda estar cerca, quiero que sepas que deseo verte cumplir tus sueños. Ojalá nunca te falten motivos para sonreír ni fuerzas para seguir adelante."
  },
  {
    tipo: "reto", emoji: "🎶", titulo: "Una canción para compartir",
    mensaje: "Envíame una canción que te guste mucho y cuéntame el porque."
  },
  {
    tipo: "reto", emoji: "📸", titulo: "Un recuerdo bonito",
    mensaje: "Compárteme una fotografía de tu infancia. Me gustaría conocer e mi oney de chiquita, tambien te reto a que salgas conmigo a comer pupusas."
  },
  {
    tipo: "frase", emoji: "🌹", titulo: "Quiero que lo sepas",
    mensaje: "Me gusta conocerte, escucharte y descubrir poco a poco quién eres. No quiero apresurar nada; quiero que lo que construyamos sea sincero, tranquilo y bonito. Tampoco dudes de lo mucho que me gustas y lo mucho que te quiero(me gusta el lunar de tus labios, awww<3)."
  },
  {
    tipo: "reto", emoji: "📱", titulo: "Una cita diferente",
    mensaje: "Si nuestros horarios lo permiten, hagamos llamada todo el dia jsjsj no cortar hasta la media noche."
  },
  {
    tipo: "reto", emoji: "💭", titulo: "Hablemos de sueños",
    mensaje: "Cuéntame uno de tus sueños más grandes y qué te gustaría hacer para conseguirlo. Hoy quiero escucharte."
  },
  {
    tipo: "frase", emoji: "🫶", titulo: "Un deseo para ti",
    mensaje: "deseo que Dios te permita cumplir todos tus sueños y me de el privilegio de estar a tu lado en cada uno de ellos."
  },
  {
    tipo: "reto", emoji: "🥰", titulo: "Nuestra primera impresión",
    mensaje: "Cuéntame qué pensaste de mí la primera vez que hablamos y qué piensas ahora. te juro responderte con sinceridad."
  },
  {
    tipo: "reto", emoji: "☕", titulo: "Un momento juntos",
    mensaje: "hagamos la misma comida y compartamos un ratito por llamada. Cada quien desde su casa y viendo una pelicula navideña."
  },
  {
    tipo: "frase", emoji: "❤️", titulo: "Quiero decirte algo",
    mensaje: "Quiero decirte que agradezco al cielo por esta oportunidad, quiero estar contigo hasta el ultimo dia de mi vida, mi meta es poder referirme a ti como mi esposa."
  },
  {
    tipo: "reto", emoji: "🌎", titulo: "Un lugar para dos",
    mensaje: "Dime tres lugares a los que te gustaría ir conmigo algún día. No importa si están cerca o lejos: imaginemos ese paseo."
  },
  {
    tipo: "reto", emoji: "🎬", titulo: "Noche de película",
    mensaje: "Elijamos una película y veámosla al mismo tiempo. Después me cuentas qué fue lo que más te gustó."
  },
  {
    tipo: "frase", emoji: "🌻", titulo: "Nunca dejes de creer en ti",
    mensaje: "Estoy seguro de que tienes muchas cosas bonitas por delante. No te rindas con tus metas la mita esta muy orgullosa de lo que eres y seras mi oney."
  },
  {
    tipo: "reto", emoji: "💬", titulo: "inventarnos apodos unicos",
    mensaje: "hay que inventarnos apodos unicos, que nunca hemos escuchado, no importa que sean raros jsjsjs."
  },
  {
    tipo: "reto", emoji: "📝", titulo: "hagamos cartas a manos",
    mensaje: "escribamos una carta a mano, lo que diga la carta es secreto y nos la daremos la proxima vez que nos veamos."
  },
  {
    tipo: "frase", emoji: "💗", titulo: "La distancia no lo decide todo",
    mensaje: "Quizás no podamos compartir cada momento en persona, pero sí estas comenzando a estar presente en mi corazón y en mis sueños. Quiero que sepas que para mi la distancia y el desvelo no es impedimento para verte."
  },
  {
    tipo: "reto", emoji: "🎄", titulo: "Nuestro plan navideño",
    mensaje: "Cuéntame en una salida este dia cómo sería tu Navidad ideal si pudiéramos compartir un día juntos(Obvio hare lo posible para que lo pasemos juntos)."
  },
  {
    tipo: "reto", emoji: "🤍", titulo: "Algo que agradezco",
    mensaje: "Dime algo que agradezcas de habernos conocido. Yo agradezco la oportunidad de conocerte y de compartir contigo."
  },
  {
    tipo: "frase", emoji: "🌟", titulo: "Eres especial",
    mensaje: "Oney, quiero que recuerdes que eres alguien muy especial para mí. Me alegra muchísimo que nuestros caminos se hayan encontrado y deseo que nuestro futuro se cumpla, me esforzare lo que me tenga que esfozar."
  },
  {
    tipo: "reto", emoji: "💑", titulo: "Un deseo para el futuro",
    mensaje: "Dime algo bonito que te gustaría que viviéramos juntos el próximo año. Puede ser un plan sencillo o un sueño grande."
  },
  {
    tipo: "frase", emoji: "🎁", titulo: "Mi deseo para ti",
    mensaje: "Oney, si algo quiero que sepas es que mis intenciones contigo son sinceras. No quiero prometerte un cuento perfecto, sino demostrarte con hechos que me gustaría construir algo bonito a tu lado, con paciencia, respeto, cariño y muchas ganas de conocernos cada día más. Gracias por permitirme formar parte de tus días. Feliz Navidad, mi bonita, mi princesa, mi niña, mi vidaaaa. ❤️"
  }
];

const calendar = document.getElementById("calendar");
const modal = document.getElementById("surprise-modal");
const countdown = document.getElementById("countdown");

function fechaDeApertura(dia) {
  return new Date(ANIO, MES, dia, HORA_APERTURA, 0, 0, 0);
}

function estaDisponible(dia, ahora = new Date()) {
  return ahora.getTime() >= fechaDeApertura(dia).getTime();
}

function crearCalendario() {
  calendar.innerHTML = "";

  for (let dia = 1; dia <= 24; dia++) {
    const disponible = estaDisponible(dia);
    const tarjeta = document.createElement("button");
    tarjeta.type = "button";
    tarjeta.className = `day ${disponible ? "opened" : "locked"}`;
    tarjeta.disabled = !disponible;
    tarjeta.setAttribute("aria-label",
      disponible ? `Abrir sorpresa del día ${dia}` : `Día ${dia}, todavía cerrado`);

    const icono = disponible ? (sorpresas[dia - 1].tipo === "reto" ? "🎁" : "💌") : "🔒";
    tarjeta.innerHTML = `
      <span class="day-number">${dia}</span>
      <span class="day-icon" aria-hidden="true">${icono}</span>
      <span class="day-status">${disponible ? "Abrir sorpresa" : "Próximamente"}</span>
    `;

    if (disponible) {
      tarjeta.addEventListener("click", () => abrirSorpresa(dia));
    }
    calendar.appendChild(tarjeta);
  }
}

function abrirSorpresa(dia) {
  // Comprobación adicional para que una casilla futura no se pueda abrir.
  if (!estaDisponible(dia)) return;

  const sorpresa = sorpresas[dia - 1];
  document.getElementById("modal-emoji").textContent = sorpresa.emoji;
  document.getElementById("modal-day").textContent = `DÍA ${dia} · DICIEMBRE`;
  document.getElementById("modal-title").textContent = sorpresa.titulo;
  document.getElementById("modal-message").textContent = sorpresa.mensaje;

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.getElementById("close-modal").focus();
}

function cerrarModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

function actualizarFechaYContador() {
  const ahora = new Date();
  document.getElementById("today-date").textContent =
    ahora.toLocaleDateString("es-NI", {
      day: "numeric", month: "long", year: "numeric"
    });

  let siguiente = null;
  for (let dia = 1; dia <= 24; dia++) {
    if (!estaDisponible(dia, ahora)) {
      siguiente = fechaDeApertura(dia);
      break;
    }
  }

  if (!siguiente) {
    countdown.textContent = "¡Todas las sorpresas están abiertas! Feliz Navidad, Oney ❤️";
    return;
  }

  const diferencia = Math.max(0, siguiente.getTime() - ahora.getTime());
  const dias = Math.floor(diferencia / 86400000);
  const horas = Math.floor((diferencia % 86400000) / 3600000);
  const minutos = Math.floor((diferencia % 3600000) / 60000);
  const segundos = Math.floor((diferencia % 60000) / 1000);

  countdown.textContent = dias > 0
    ? `La próxima sorpresa llega en ${dias}d ${horas}h ${minutos}m`
    : `La próxima sorpresa se abre en ${horas}h ${minutos}m ${segundos}s`;
}

document.getElementById("close-modal").addEventListener("click", cerrarModal);
document.getElementById("modal-done").addEventListener("click", cerrarModal);
modal.addEventListener("click", (evento) => {
  if (evento.target === modal) cerrarModal();
});
document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && modal.classList.contains("show")) cerrarModal();
});

crearCalendario();
actualizarFechaYContador();
setInterval(() => {
  // Recalcula los bloqueos al llegar la medianoche aunque la página siga abierta.
  crearCalendario();
  actualizarFechaYContador();
}, 1000);
