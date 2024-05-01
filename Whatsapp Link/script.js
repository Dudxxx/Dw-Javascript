

const telefone = document.getElementById('telefone');
var telefone_att = ""
const gerarLink = document.querySelector("#gerapagina");
const mostrarLink = document.querySelector("#geralink")
var container = document.querySelector("#container_exibir");
var texto = document.querySelector("#linktela")

telefone.addEventListener("input", ()=>{
  // Limpa todos os caracteres que não são dígitos
  let numeroTelefone = telefone.value.replace(/\D/g, "").substring(0,11);

  if (numeroTelefone.length > 0) {
    let telefoneFormatado = `(${numeroTelefone.substring(0, 2)})${numeroTelefone.substring(2, 7)}-${numeroTelefone.substring(7, 11)}`;
  
    telefone.value = telefoneFormatado;
  }
});

gerarLink.addEventListener("click", () => {
    //tira os caracteres: "()-"
    telefone_att = telefone.value.replace(/[^0-9]/g, '');
    //complementa o link
    const url_base = "https://wa.me/";
    const url_final = url_base + "55" + telefone_att;


    //copia o link na barra de tranferencia
    navigator.clipboard.writeText(url_final).then
    //abre o link
    abreLink(url_final)
  });


function abreLink(link) {
  const abrir = window.open(link, "_blank")
  abrir.focus
}
  //telefone.value.replace(/[^0-9]/g, '');


mostrarLink.addEventListener("click", () => {
    //tira os caracteres: "()-"
    telefone_att = telefone.value.replace(/[^0-9]/g, '');
    //complementa o link
    const url_base = "https://wa.me/";
    const url_final = url_base + "55" + telefone_att;

    texto = strin



    if(container.style.display === "none"){
      container.style.display = "block";
    }else {
      container.style.display = "none";
    }
}) 
