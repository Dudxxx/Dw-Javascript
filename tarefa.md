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
basciamente podemos criar um bloco, que executa alguma função, por exemplo baskara, em vez de digitar a equação e aplica-lá a todo momento, podemos simplesmente criar uma função que faça isso, e quando precisarmos, chamamos ela, colocando apenas os numeros desejados.

```javascript
function multiplicação(a, b) {
  if a && b != 0
    return a*b;
} else {
  return "digite valores diferentes de 0"
}
//retorna a multiplicação dos dois valores
```

# Operadores básicos

Os operadores básicos, são extremamente importantes para qualquer programa a ser feito, pois ajudam absurdamente na logica, os quatro tipos deles são:

## `Aritméticos`
Os aritméticos são a matematica basica por assim dizer, contendo adição, subtração entre outros

```javascript
let x = 0
x = x + 1
x = x - 1
x = x * x
x = x / x
x = 10 % 3

//contendo a possibilidade de adicionar ou subtrair apenas um
x++
x--

```
## `De Comparação`
Principalmente usado nos "if" os de comparação fazem justo ao nome, não sendo responsaveis por adicionar ou diminuir uma variavel, apenas comparar com outra variavel ou algo do tipo;

```javascript

    2 == 2 // Verdadeiro, poís os dois são iguais
    "2" === 2 // falso, pois os dois não são do mesmo tipo, um sendo number e o outro uma string
    1 != 2 // veradadeiro, pois o 1 é diferente do 2
    3 > 2 // verdadeiro, pois o 3 é maior que o 2
    1 < 2 // verdadeiro pois o 1 é menor que o 2
    3 >= 3 // verdadeiro pois o 3 entra na condição do 3 ser maior ou igual a 3
    2 <= 3 // verdadeiro pois o dois está dentro das condições, o dois é menor que 3
```
## `Lógicos`
Dentro do python, os operadores logicos são conhecidos como, "and" ou "or";

```javascript
let x = 10
let y = 45
function diferente(a, b) {
  if (a != 20 && b != 20) {
    alert("diferente")
  }
}
function ou(a, b) {
  if (a == 10 || b == 10) {
    alert("um dos valores são iguais a 10")
  }
}
function not(numero) {
  return !(numero % 2);
}
diferente(x, y)
ou(x, y)
console.log(not(2)) // o resto da divisão é 0 então é verdadeiro
console.log(not(3)) // o resto da divisão é impar então da falso

```
## `typeof`
mostra para o usuario o tipo de dado de um valor desejado
```javascript
var x = 10
var string = "Olá Mundo"
var boolean = new Boolean(false)

console.log(typeof x)
console.log(typeof string)
console.log(typeof boolean)
```

## exemplo com tudo
```javascript
// Declaração de variáveis
const nome = "Eduardo Pinheiro Schimiidt";
const idade = 16;
// Exibindo informações na tela
console.log(`Olá, ${nome}!`);
console.log(`Você tem ${idade} anos, o que equivale a ${idade * 12} meses.`);
// Criando e manipulando um array
const listaDeHobbies = ["Ler", "Jogar videogame", "Praticar esportes"];

// Exibindo a lista de hobbies
console.log("Seus hobbies são:");
for (const hobby of listaDeHobbies) {
  console.log(`--- ${hobby}`);
}

// Criando e manipulando um objeto
const filmeFavorito = {
  titulo: "O Rei Leão",
  anoLancamento: 1994,
};

// Exibindo informações do filme favorito
console.log(`Seu filme favorito é ${filmeFavorito.titulo} (${filmeFavorito.anoLancamento})`);

// Operações matemáticas
var num1 = 10;
var num2 = 5;
var num3 = 25

console.log(`Soma: ${num1} + ${num2} + ${num3} = ${num1 + num2 + num3}`);
console.log(`Diferença: ${num1} - ${num2} = ${num1 - num2}`);
console.log(`Produto: ${num1} * ${num2} = ${num1 * num2}`);
console.log(`Quociente: ${num1} / ${num2} = ${num1 / num2}`);

// Comparações
const num4 = 15;
const num5 = 10;

console.log(`${num4} === ${num5}: ${num4 === num5}`); // Igualdade estrita
console.log(`${num4} !== ${num5}: ${num4 !== num5}`); // Desigualdade estrita
console.log(`${num4} > ${num5}: ${num4 > num5}`); // Maior que
console.log(`${num4} < ${num5}: ${num4 < num5}`); // Menor que
console.log(`${num4} >= ${num5}: ${num4 >= num5}`); // Maior ou igual que
console.log(`${num4} <= ${num5}: ${num4 <= num5}`); // Menor ou igual que

// Operadores lógicos
const bool1 = true;
const bool2 = false;

console.log(`${bool1} && ${bool2}: ${bool1 && bool2}`); // E
console.log(`${bool1} || ${bool2}: ${bool1 || bool2}`); // Ou

// Operador typeof
console.log(`typeof nome: ${typeof nome}`); // String
console.log(`typeof idade: ${typeof idade}`); // Number
console.log(`typeof eEstudante: ${typeof eEstudante}`); // Boolean
console.log(`typeof listaDeHobbies: ${typeof listaDeHobbies}`); // Object
console.log(`typeof filmeFavorito: ${typeof filmeFavorito}`); // Object
console.log(`typeof num1: ${typeof num1}`); // Number
console.log(`typeof num2: ${typeof num2}`); // Number
console.log(`typeof bool1: ${typeof bool1}`); // Boolean
console.log(`typeof bool2: ${typeof bool2}`); // Boolean

```
