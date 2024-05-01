

const telefone = document.getElementById('telefone');
var telefone_att = ""
const gerarLink = document.querySelector("#gerapagina");
const mostrarLink = document.querySelector("#geralink")
var container = document.querySelector("#container_exibir");
var texto = document.querySelector("#linktela")
var copiarlink = document.querySelector("#copiarLink")

telefone.addEventListener("input", ()=>{
  // Limpa todos os caracteres que não são dígitos
  let numeroTelefone = telefone.value.replace(/\D/g, "").substring(0,11);
  
  if (!/^\d+$/.test(numeroTelefone)) {
    telefone.value = ""; // Limpa o valor do campo se não contiver apenas números
} else {
    // Formata o número de telefone (caso necessário)
    if (numeroTelefone.length > 0) {
        let telefoneFormatado = `(${numeroTelefone.substring(0, 2)})${numeroTelefone.substring(2, 7)}-${numeroTelefone.substring(7, 11)}`;
        telefone.value = telefoneFormatado;
    }
    if(telefone.value.length === 14) {
      telefone.style.background = "rgb(47, 168, 47)"
    }else {
      telefone.style.background = "white"
    }
    
}
telefone.addEventListener("click", () => {
  container.style.display = "none"
})
});

gerarLink.addEventListener("click", () => {
    //tira os caracteres: "()-"
    if(telefone.value.length === 14) {
      telefone_att = telefone.value.replace(/[^0-9]/g, '');
      //complementa o link
      const url_base = "https://wa.me/";
      const url_final = url_base + "55" + telefone_att;


      //copia o link na barra de tranferencia
      navigator.clipboard.writeText(url_final).then
      //abre o link
      abreLink(url_final)
    }
  });


function abreLink(link) {
  const abrir = window.open(link, "_blank")
  abrir.focus
}
  //telefone.value.replace(/[^0-9]/g, '');


mostrarLink.addEventListener("click", () => {
    //tira os caracteres: "()-"
    if(telefone.value.length === 14) {
        telefone_att = telefone.value.replace(/[^0-9]/g, '');
      //complementa o link
      const url_base = "https://wa.me/";
      const url_final = url_base + "55" + telefone_att;

      texto.textContent = url_final;
      

      container.style.display = "none";
      if(container.style.display === "none"){
        container.style.display = "block";
      }else {
        container.style.display = "none";
      }
    }else {

    }
    
}) 

copiarlink.addEventListener("click", () => {
  const textocopia = texto.textContent;
    navigator.clipboard.writeText(textocopia).then(() => {
        copiarlink.textContent = "Link copiado para área de transferência!";
        copiarlink.style.color = "black";
    });
})
