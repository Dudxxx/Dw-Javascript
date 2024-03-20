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


# Tipos de Dados:

Os tipos de dados, está ligado ao tipo de variavel que vai ser armazenada, como exemplo em uma `string` será armazenado alguns caracteres, por exemplo: `"Olá, Mundo!!!"`

# Tipos primitivos

Os tipos primitivos no geral, é composto por 5 tipos diferentes, entre eles;

## `boolean`
O tipo `boolean` recebe o valor verdadeiro e falso, na linguagem de programação `True` ou `False`, facilitando nos momentos que precisamos de um sim ou não para alguma função.

```javascript
let boolean = true;
alert(boolean);
//vai retornar o valor "true" na tela
```

## `number`
O tipo `number`, basicamente recebe um numero, podendo ser o numero 1, ou até mesmo o numero -3,14, numeros no geral.
```javascript
let number = 1490
number = number - (number/2)
alert(number)
//vai retornar o valor "745"
```

## `string`
O tipo `string`, recebe caracteres em sequencia, que forma frases ou coisas do tipo, os numeros de uma string, não recebe o mesmo valor numerico de um tipo `number` apenas é representado
```javascript
let string1 = "Olá Mundo!!!";
let string2 = ", Meu nome é Eduardo";
let string = string1 + string2
alert(string)
//vai retornar a string "Olá Mundo!!!, Meu nome é Eduardo" 
```

## `undefined`
O tipo `undefined`, significa que a variavel ainda mnão foi definida, ou melhor, não foi dado nenhum valor a ela.
```javascript
let undefined;
alert(undefined)
//Não retorna nada, pois ainda não foi dado algum valor. 
```

## `null`
O tipo `null`, significa que ela é nula, propositalmente, ou seja, não exerce nenhum valor, é a mesma coisa do zero na matematica, não mudando absolutamente nada.
```javascript
let nada = null;
alert(nada)
//vai retornar o valor null.
```

# Objetos
Existe 3 tipos de objetos diferentes, entre eles:

## `array`
o array pode ser considerado um lista de valores, conhecida como list, em python
```javascript
let cardapio = ["strogonoff", "arroz", "feijão", "ovo", "batata"]
//basicamente cria uma lista com strings dentro, podendo acessar cada uma delas ou todas a qualquer momento
```
## `object`
é basicamente um coleção de dados, tendo que ser usada entre chaves

```javascript
let pessoa1 = {
  nome: "Eduardo Schimidt",
  idade: 16,
  gmail: "schimidteduardo941@gmail.com"
};
```

## `function`
basciamente podemos criar um bloco, que executa alguma função, por exemplo baskara, em vez de digitar a equação e aplicala a todo momento, podemos simplesmente criar uma função que faça isso, e quando precisarmos, chamamos ela, colocando apenas os numeros desejados.

```javascript
function multiplicação(a, b) {
  if a && b != 0
    return a*b;
} else {
  return "digite valores diferentes de 0"
}
//retorna a multiplicação dos dois valores
```