const inputTexto = document.querySelector("#input")
const divContador = document.querySelector("[txt-contador]")
const btnContar = document.querySelector("[btn-contar")

inputTexto.addEventListener("input", palavras)

btnContar.addEventListener("click", mudaBtn)

function palavras() {
    switch (btnContar.innerText) {
        case "Contar Caracteres":
            divContador.innerText = String(inputTexto.value).length + " caracteres"
            break;
        default:
            divContador.innerText = String(inputTexto.value).trim(-1).split(/\s+/).length + " Palavras"
            break;
    }
}

function mudaBtn() {
    switch (btnContar.innerText) {
        case "Contar Caracteres":
            btnContar.innerText = "Contar Palavras"
            palavras()
            break;
        default:
            btnContar.innerText = "Contar Caracteres"
            palavras()
    }
}




