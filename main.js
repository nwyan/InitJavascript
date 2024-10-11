// 1- Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert("Hello world")

// 2- Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let n1 = 3
let n2 = 5

alert(n1 + n2)

// 3- Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let number = 4

if (typeof number == 'number') {
    alert('É um número')
} else {
    alert('Não é um número')
}

// 4- Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string"

let string = 'Uma string'

if (typeof string == 'string') {
    alert("É uma string")
} else {
    alert("Não é uma string")
}

// 5- Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let booleano = true

if (typeof booleano == 'boolean') {
    alert("É um booleano")
} else {
    alert("Não é uma booleano")
}

// 6- Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let sub = n1 - n2

alert(sub)

// 7- Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let mult = n1 * n2

alert(mult)

// 8- Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let div = n1 / n2

alert(div)

// 9- Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let par = 2

if (par % 2 == 0) {
    alert('É um número par')
  } else {
    alert('Não é um número par')
}

// 10- Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let impar = 3

if (impar % 2 != 0) {
    alert('É um número ímpar')
  } else {
    alert('Não é um número ímpar')
}