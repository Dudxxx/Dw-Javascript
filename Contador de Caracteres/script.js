const inputTexto = document.querySelector("#input")
const contador = document.querySelector("[txt-contador]")
const btnContar = document.querySelector("[btn-contar]")

inputTexto.addEventListener("input", () => {
    console.log(String(inputTexto.value).length)
})