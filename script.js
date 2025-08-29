function cambiarOrden() {
    const contenedor = document.getElementById("cols");
    const estilo = window.getComputedStyle(contenedor).columnCount;

    if (estilo === "2") {
        contenedor.style.columnCount = "1";
    } else {
        contenedor.style.columnCount = "2";
    }
}

function cambiarTitulo() {
    const titulo = document.getElementById("titulo");
    if (titulo.textContent === "Cien años de soledad") {
        titulo.textContent = "HTML & CSS: Curso práctico avanzado";
    } else {
        titulo.textContent = "Cien años de soledad";
    }
}

function cambiarColor() {
    const titulo = document.getElementById("titulo");
    const subtitulos = document.querySelectorAll("h3");

    const colorActual = window.getComputedStyle(titulo).color;

    if (colorActual === "rgb(20, 88, 88)" || colorActual === "rgb(30, 123, 123)") {
        titulo.style.color = "#2e7d32";
        subtitulos.forEach(st => (st.style.color = "#2e7d32"));
    } else {
        titulo.style.color = "#145858";
        subtitulos.forEach(st => (st.style.color = "#1e7b7b"));
    }
}

let portadaOriginal = true;
function agregarImagen() {
    const img = document.getElementById("portada");
    if (!img) return;

    if (portadaOriginal) {
        img.src = "Portada2.jpg";
    } else {
        img.src = "Portada1.jpg";
    }
    portadaOriginal = !portadaOriginal;
}
