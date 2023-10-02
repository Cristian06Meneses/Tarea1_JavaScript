const textoAgregarTarea = document.getElementById("textoAddtarea");
const botonAgregarTarea = document.getElementById("botonAddTarea");
const textoAgregado = document.getElementById("listaTareas");

botonAgregarTarea.addEventListener("click", function () {
    const nuevoTexto = textoAgregarTarea.value;
    if (nuevoTexto.trim() !== "") {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span>${nuevoTexto}</span>
            <button class="delete">Eliminar</button>
        `;
        textoAgregado.appendChild(nuevoElemento);
        textoAgregarTarea.value = "";
    }
});

textoAgregado.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }
});

textoAgregado.addEventListener("change", function (event) {
    if (event.target.classList.contains("checkbox")) {
        const nuevoTexto = event.target.nextElementSibling;
        if (event.target.checked) {
            nuevoTexto.style.textDecoration = "line-through";
        } else {
            nuevoTexto.style.textDecoration = "none";
        }
    }
});