/* q1 */
console.log("***Q1***")

let variavel = 'Ola'
console.log(`Minha primeira variavel: ${variavel}`);

/* q2 */
console.log("***Q2***")

const listaCompras = ['cafe', 'leite', 'acucar']

console.log('Usando For: ')
for (let i = 0; i < listaCompras.length; i++) {
    console.log(listaCompras[i])
}

console.log('Usando Foreach:')
listaCompras.forEach((item) => {
    console.log(item)
})

console.log('Usando For...of')
for (const item of listaCompras) {
    console.log(item)
}

/* q3 */
console.log("***Q3***")
var frutas = ['maca', 'banana', 'laranja', 'uva']
console.log(`acessando o terceiro elemento: ${frutas[2]}`)

/* q4 */
console.log("***Q4***")

function areaQuadrado(lado) {
    console.log(`A area de um quadrado de lado ${lado}m é: ${lado ** 2}m²`)
}

areaQuadrado(2)

/* q5 */
console.log("***Q5***")

let a = 10;
let b = 12;
let c = 7;

let soma = a + b
console.log(`a soma de ${a} + ${b} é: ${soma}`)

if (soma > c) {
    console.log(`O valor da soma (${soma}) é maior que c (${c})`)
} else if (soma == c) {
    console.log(`O valor da soma (${soma}) é igual a c (${c})`)
} else {
    console.log(`O valor da soma (${soma}) é menor que c (${c})`)
}

/* q6 */
console.log("***Q6***")
let numero = "5"
soma = numero + 10
console.log(soma)

/* q7 */
console.log("***Q7***")
a = 5
b = 8

if (a == b) {
    c = a + b
} else {
    c = a * b
}

console.log(c)

/* q8 */
console.log("***Q8***")
for (var contador = 0; contador < 5; contador++) {

}

console.log('q8: ' + contador)

// com a declaracao feita em var, o valor de contador é lido fora do bloco for e exibido normalmente. Com a declaração usando let a tentativa de ler o valor de contador fora do bloco for causa um erro de variavel nao definida

/* q9 */
console.log("***Q9***")

function antSuc(valor) {
    console.log(`Numero: ${valor}`)
    console.log(`Antecessor: ${valor - 1}`)
    console.log(`Sucessor: ${valor + 1}`)
}

antSuc(375)

/* q10 */
console.log("***Q10***")

var x = 10
function minhaFuncao() {
    var y = 5
    console.log(x + y)
}
minhaFuncao()

/* q11 */
console.log("***Q11***")

numero = "5"
if (numero === 5) {
    console.log("O numero é igual a 5")
} else if (numero == 5) {
    console.log("O numero é igual a 5 com conversao de tipo")
} else {
    console.log("O numero nao é igual a 5")
}

/* questao 12 */
console.log("***Q12***")

const meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const pares = []

meuArray.forEach((valor) => {
    if (valor % 2 == 0) {
        pares.push(valor)
    }
})

// for(let i=0; i<meuArray.length;i++){
//     if (meuArray[i] % 2 == 0) {
//         pares.push(meuArray[i])
//     }
// }

console.log(pares)

/* questao 13 */
console.log("***Q13***")

function media(a, b, c) {
    return (a + b + c) / 3
}

let resultado = (media(7, 10, 9)).toFixed(2)

if (resultado >= 7) {
    console.log(`Media ${resultado}, resultado: Aprovado`)
} else if (resultado >= 5) {
    console.log(`Media ${resultado}, resultado: Recuperacao`)
} else {
    console.log(`Media ${resultado}, resultado: Reprovado`)
}

/* questao 14 */
console.log("***Q14***")

function imc(peso, altura) {
    return peso / (altura * altura)
}

let meuImc = (imc(80, 1.8)).toFixed(2)

if (meuImc < 18.5) {
    console.log(`IMC ${meuImc}, resultado: Abaixo do peso`)
} else if (meuImc >= 18.5 && meuImc < 25) {
    console.log(`IMC ${meuImc}, resultado: Ideal`)
} else if (meuImc >= 25 && meuImc < 30) {
    console.log(`IMC ${meuImc}, resultado: Sobrepeso`)
} else if (meuImc >= 30 && meuImc < 40) {
    console.log(`IMC ${meuImc}, resultado: Obesidade`)
} else {
    console.log(`IMC ${meuImc}, resultado: Ob Morbida`)
}

/* questao 15 */
console.log("***Q15***")

function tabuada(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
}

tabuada(8)

/* questao 16 */
console.log("***Q16***")

function divisao(a, b) {
    try {
        if (b == 0) {
            throw new RangeError('Impossivel divisão por zero')
        } else {
            console.log(a / b)
        }
    } catch (error) {
        console.error('Erro: ' + error.message)
    }
}
divisao(10, 0)
divisao(10, 2)

/* questao 17 */
console.log("***Q17***")

function calculaGasolina(distancia) {
    const preco_gasolina = 5.24
    const autonomia = 9.8

    let valor = ((distancia / autonomia) * preco_gasolina).toFixed(2)

    console.log(`Para fazer ${distancia}kms voce deve abastecer ${valor * 2}R$`)
}
calculaGasolina(2900)
calculaGasolina(300)

/* questao 18 */
console.log("***Q18***")

function fatorial(num) {
    try {
        if (num < 0) {
            throw new RangeError('Não é possível calcular o fatorial de números negativos');
        } else if (num === 0) {
            console.log('O fatorial de zero é 1');
        } else {
            let resultado = 1;
            for (let i = 1; i <= num; i++) {
                resultado *= i;
            }
            console.log(`O fatorial de ${num} é ${resultado}`);
        }
    } catch (error) {
        console.error('Erro foi: ' + error.message);
    }
}

fatorial(5);
fatorial(0);
fatorial(1);
fatorial(-10)

/* q19 */
console.log("***Q19***")

const arrayQ19 = [12, 36, 52, 77]
const arrayResult = []

arrayQ19.forEach((item) => {
    let resultado = item + 7
    arrayResult.push(resultado)
})

console.log(arrayResult)

/* q20 */
console.log("***Q20***")

let identidade = false
let motorista = false

if (identidade || motorista) {
    console.log('Esta apto a fazer a prova')
} else {
    console.log('Nao esta apto a fazer a prova')
}

/* q21 */
console.log("***Q21***")

frutas = ["maca", "banana", "laranja"]
console.log(frutas[3])

// a saida sera undefined pois acessamos uma posição que nao tem valor definido no array. indice 0 = maca. indice 1 = banana. indice 2 = laranja. indice 3 = ?
/*exercicio_js.js
Exibindo exercicio_js.js…
Resposta do exercicio de JS 1
Luis Fellipe
•
20 de mar.
Para ver os resultados
coloque os arquivos na mesma pasta
abra o exercicio_js.html
e visualize no console do navegador

exercicio_js.html
HTML

exercicio_js.js
JavaScript
Comentários da turma*/
