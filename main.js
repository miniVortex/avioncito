window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const boton = document.createElement("button");
    boton.textContent = "¿Querés una pista?";
    boton.style.marginTop = "20px";

    const pista = document.createElement("p");
    pista.textContent = "A veces lo más obvio está oculto a simple vista... tenes que inspeccionar bien.";
    pista.style.display = "none";
    pista.style.color = "#f55";
    pista.style.fontStyle = "italic";

    boton.addEventListener("click", () => {
      pista.style.display = "block";
    });

    document.body.appendChild(boton);
    document.body.appendChild(pista);
  }, 10000);
});

//¿Qué tal algo que te redirija a algun login? ¿Quizá algun html?

let A = 0, B = 0;
const donut = document.getElementById('donut');

function renderDonut() {
  const b = [];
  const z = [];
  const width = 80;
  const height = 22;
  const chars = '.,-~:;=!*#$@';

  for (let k = 0; k < width * height; k++) {
    b[k] = ' ';
    z[k] = 0;
  }

  for (let j = 0; j < 6.28; j += 0.07) {
    for (let i = 0; i < 6.28; i += 0.02) {
      const c = Math.sin(i),
            d = Math.cos(j),
            e = Math.sin(A),
            f = Math.sin(j),
            g = Math.cos(A),
            h = d + 2,
            D = 1 / (c * h * e + f * g + 5),
            l = Math.cos(i),
            m = Math.cos(B),
            n = Math.sin(B),
            t = c * h * g - f * e;

      const x = Math.floor(width / 2 + 30 * D * (l * h * m - t * n));
      const y = Math.floor(height / 2 + 15 * D * (l * h * n + t * m));
      const o = Math.floor(x + width * y);
      const N = Math.floor(8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));

      if (height > y && y > 0 && x > 0 && width > x && D > z[o]) {
        z[o] = D;
        b[o] = chars[N > 0 ? N : 0];
      }
    }
  }

  let output = '';
  for (let i = 0; i < b.length; i++) {
    output += b[i];
    if ((i + 1) % width === 0) output += '\n';
  }
  donut.textContent = output;

  A += 0.04;
  B += 0.08;
  requestAnimationFrame(renderDonut);
}

renderDonut();