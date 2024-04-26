$('#telefone').mask('(00) 90000-0000');

const telefone = document.getElementById('telefone').value;
telefone_att = telefone.replace(/[^0-9]/g, '');
const gerarLink = document.querySelector("#gerapagina");
console.log(gerarLink)

gerarLink.addEventListener("click", function() {
    console.log("...")
    
    const url_base = "https://wa.me/";
    const url_final = url_base + "55" + telefone_att;
    alert(url_final)
  
    
  });