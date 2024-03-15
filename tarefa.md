# Variáveis
as variáveis são responsaveis por armazenar e dar um "nome" para um valor, permitindo a manipulação dela e o uso ao longo do codigo; Um otimo exemplo, é que dois programadores fizeram o mesmo codigo, um fez um variável com o numero 5, e usou a variável trinta vezes ao longo do codigo, outro programador foi escrevendo o numero 5, e escreveu trinta vezes ao longo do codigo, e em algum momento os dois precisam mudar o numero 5 para o numero 10, é obvio que o programador que definiu a variavel, vai fazer isso muito mais rapido.


# Declaração de variáveis

a declaração de variáveis, serve para criarmos as variáveis, o que é bem obvio, existem 3 tipos diferentes de declarações, sendo elas : `let`, `var` e `const`

## `let`
A variável `let`, é uma variável de bloco, ou seja, se criada dentro de um `for`, só podera ser vista dentro desse for, o que é bem intuitivo
## `var`
A variável `var` é o contrario da `let`, sendo global, ou seja, se criada dentro do for, pode ser usada fora também

## `const`
A variável `const`, como o proprio nome fala, é usada pra criar variaveis contantes, ou seja, após ser criada e dado um certo valor, não é mais alterada ao longo do codigo em sí.

## exemplo

```javascript

function var() {
  var nome = "João"
  if (true) {
    var sobrenome = "Silva"
  }
  console.log(nome + " " + sobrenome)
}
exemploVar();
//neste caso vai dar certo, mesmo com o "var" sendo declarado dentro do bloco, poís é uma função global


function exemploLet() {
  let nome = "Maria"
  if (true) {
    let sobrenome = "Oliveira"
  }
  console.log(nome)
  console.log(sobrenome)

}

exemploLet();
  //o "console.log(nome);" está correto, porém o "console.log(sobrenome)" vai dar erro, já que foi definida dentro de um bloco


const n1 = 3

function exemploConst() {
  const n2 = 7
  n2 = n1 + n2
}

exemploConst();
//vai dar erro pois o "n2" é uma constante, e não pode ser alterada. 
```
