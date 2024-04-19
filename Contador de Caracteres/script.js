const inputTexto = document.querySelector("#input")
const contador = documento.querySelector("[txt-contador]")
const btnContar = documento.querySelector("[btn-contar]")

inputTexto.addEventListener("input", () => {
    console.log(String(inputTexto.value).length)
})