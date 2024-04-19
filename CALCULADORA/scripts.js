const btnBotoes = document.querySelectorAll("[btn-numero]");
const btnOperacoes = document.querySelectorAll("[btn-operador]");
const btnIgual = document.querySelector("[btn-igual]");
const btnDelete = document.querySelector("[btn-delete]");
const btnAC = document.querySelector("[btn-ac]");

// Selecionando as divs que exibem os valores
const bufferElemento = document.querySelector("[txt-buffer]");
const displayElemento = document.querySelector("[txt-display]");

// Objeto para armazenar os dados da calculadora
const calculadora = {
  operandoAnterior: "",
  operandoAtual: "",
  operador: "",
  bufferTextoElemento: bufferElemento,
  displayTextoElemento: displayElemento,
};

/******************************************************
* Associar funções aos eventos dos elementos HTML
******************************************************/

// Botão AC
document.addEventListener("keydown", (evento) => {
  let teclapress = evento.key
  let numeros = "0123456789."
  let op = "*+-÷/"
  if (numeros.includes(teclapress)) {
    adicionaNumero(calculadora, teclapress)
  } else if (op.includes(teclapress)){
    escolheOperador(calculadora, teclapress == "/" ? "÷": teclapress)
  }else if (teclapress == "Enter") {
    executaCalculo(calculadora)
  }else if (teclapress == "Escape"){
    limpaVariaveis(calculadora)
  }else if (teclapress == "Backspace") {
    apagaDigito(calculadora)
  }
});

btnAC.addEventListener("click", () => {
  limpaVariaveis(calculadora);
});

// Botão Delete
btnDelete.addEventListener("click", () => {
  apagaDigito(calculadora);
});

// Botão de igual
btnIgual.addEventListener("click", () => {
  executaCalculo(calculadora);
  calculadora.operador = "="
});

// Botões dos números
for (let btn of btnBotoes) {
    btn.addEventListener("click", () => {
        adicionaNumero(calculadora, btn.innerHTML)
    })
}

// Botões dos operadores
for (let btn of btnOperacoes) {
    btn.addEventListener("click", () => {
        escolheOperador(calculadora, btn.innerHTML)
    })
}

/******************************************************
* Regras da aplicação
******************************************************/

// Atualiza o display da calculadora
function atualizaDisplay(calculadora) {
  calculadora.bufferTextoElemento.innerHTML = calculadora.operandoAnterior+ calculadora.operador;
  calculadora.displayTextoElemento.innerHTML = calculadora.operandoAtual;
}

// Limpa os atributos do objeto calculadora e atualiza o display
function limpaVariaveis(calculadora) {
  calculadora.operandoAnterior = "";
  calculadora.operandoAtual = "";
  calculadora.operador = "";
  atualizaDisplay(calculadora);
}

// Função para adicionar um número ao operandoAtual
function adicionaNumero(calculadora, numero) {
  calculadora.operandoAtual += numero;
  atualizaDisplay(calculadora);
}

// Função para escolher o operador
function escolheOperador(calculadora, operador) {
  if (calculadora.operandoAtual === "") return;

  if (calculadora.operandoAnterior !== "") {
    
    executaCalculo(calculadora);
  }

  calculadora.operador = operador;
  calculadora.operandoAnterior = calculadora.operandoAtual;
  calculadora.operandoAtual = "";
  atualizaDisplay(calculadora);
}

// Função para executar o cálculo
function executaCalculo(calculadora) {
  //if (isNaN(calculadora.operandoAnterior)) return
  //if (isNaN(calculadora.operandoAtual)) return
  //if (calculadora.operador == "") return

  let resultado;

  switch (calculadora.operador) {
    case "+":
      resultado = parseFloat(calculadora.operandoAnterior) + parseFloat(calculadora.operandoAtual);
      break;
    case "-":
      resultado = parseFloat(calculadora.operandoAnterior) - parseFloat(calculadora.operandoAtual);
      break;
    case "x":
      resultado = parseFloat(calculadora.operandoAnterior) * parseFloat(calculadora.operandoAtual);
      break;
    case "÷":
      resultado = parseFloat(calculadora.operandoAnterior) / parseFloat(calculadora.operandoAtual);
      break;
    default:
      resultado = "Operador inválido";
  }


  calculadora.operandoAnterior = "";
  calculadora.operandoAtual = resultado.toString()
  calculadora.operador = ""


  atualizaDisplay(calculadora);
}

// Função para apagar o último dígito
function apagaDigito(calculadora) {
  if (calculadora.operador === "=") return
  calculadora.operandoAtual = calculadora.operandoAtual.slice(0, -1);
  atualizaDisplay(calculadora);
}

atualizaDisplay(calculadora)