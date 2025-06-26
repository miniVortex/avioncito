const fechaInicio = new Date("2025-05-31T00:00:00").getTime();;
const fechaObjetivo = new Date("2025-06-27T00:00:00").getTime();

function actualizar() {
  const ahora = new Date().getTime();
  const total = fechaObjetivo - fechaInicio;
  const transcurrido = ahora - fechaInicio;
  const restante = fechaObjetivo - ahora;

  const porcentaje = Math.min(100, Math.max(0, (transcurrido / total) * 100));
  const frame = Math.floor(porcentaje / 20); // 0 a 5

  // Actualizar porcentaje
  document.getElementById("porcentaje").textContent = `${Math.floor(porcentaje)}%`;
  document.getElementById("barraProgreso").style.width = `${porcentaje}%`;

  // Actualizar contador
  if (restante <= 0) {
    document.getElementById("contador").textContent = "¡Es el momento! ❤️";
    setTimeout(() => window.location.href = "templates/main.html", 3000);
  } else {
    const dias = Math.floor(restante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((restante % (1000 * 60)) / 1000);

    document.getElementById("contador").textContent =
      `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  }

  requestAnimationFrame(actualizar);
}

actualizar();
