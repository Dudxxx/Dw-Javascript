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
  if (numero === "." && calculadora.operandoAtual.includes(".")) return;
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
  if (calculadora.operandoAtual === "" || calculadora.operandoAnterior === "") return;

  let resultado;

  switch (calculadora.operador) {
    case "+":
      resultado = parseFloat(calculadora.operandoAnterior) + parseFloat(calculadora.operandoAtual);
      break;
    case "-":
      resultado = parseFloat(calculadora.operandoAnterior) - parseFloat(calculadora.operandoAtual);
      break;
    case "*":
      resultado = parseFloat(calculadora.operandoAnterior) * parseFloat(calculadora.operandoAtual);
      break;
    case "÷":
      resultado = parseFloat(calculadora.operandoAnterior) / parseFloat(calculadora.operandoAtual);
      break;
    default:
      resultado = "Operador inválido";
  }

  calculadora.operandoAnterior = resultado.toString();
  calculadora.operandoAtual = "";
  calculadora.operador = "";
  atualizaDisplay(calculadora);
}

// Função para apagar o último dígito
function apagaDigito(calculadora) {
  if (calculadora.operandoAtual === "") return;
  calculadora.operandoAtual = calculadora.operandoAtual.slice(0, -1);
  atualizaDisplay(calculadora);
}

//operações matematicas


atualizaDisplay(calculadora)