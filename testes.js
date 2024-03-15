/*
SOMAR APENAS NUMEROS PARES
Escreva um programa JavaScript que recebe um array de números e calcula a soma de todos os números pares presentes no array.

Dica:
Você pode usar um loop for para iterar sobre o array e verificar se cada elemento é par. Se for par, você pode adicionar esse número a uma variável que armazena a soma dos números pares.
*/

const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let somaDosPares = 0;

for (let i = 0; i < arrayDeNumeros.length; i++) {
    //um numero será par se o seu resto for zero ao ser dividido por 2
    if (arrayDeNumeros[i] % 2 === 0) {
        somaDosPares += arrayDeNumeros[i];
    }
}
console.log("A soma dos números pares é:" + " " + somaDosPares);

/*
CONTAGEM DE NUMEROS IMPARES
Escreva um programa JavaScript que recebe um array de números e conta quantos números ímpares estão presentes no array.

Dica:
Assim como no exercício anterior, você pode usar um loop for para iterar sobre o array e verificar se cada elemento é ímpar. Se for ímpar, você pode incrementar um contador para contar quantos números ímpares existem no array.
*/

let contadorNumerosImpares = 0;

for (let i = 0; i < arrayDeNumeros.length; i++) {
    //para saber se um numero é impar basta saber se o resto é diferente de zero
    if (arrayDeNumeros[i] % 2 !== 0) {
        contadorNumerosImpares++;
    }
}

console.log(`Exsitem ${contadorNumerosImpares} numeros impares.`);

/*
CALCULAR A MÉDIA
Escreva um programa JavaScript que recebe um array de números e calcula a média dos números presentes no array.

Dica:
Você pode usar um loop for para iterar sobre o array e somar todos os números presentes nele. Em seguida, divida a soma pelo número total de elementos no array para obter a média.
*/

let mediaDosNumeros = 0;
let somaDosNumeros = 0;
for (let i = 0; i < arrayDeNumeros.length; i++) {
    somaDosNumeros += arrayDeNumeros[i]
}
//para calcular a média é preciso dividir a soma dos valores pela quantidade de numeros do array
mediaDosNumeros = somaDosNumeros / arrayDeNumeros.length;

console.log(`A média dos números do array é: ${mediaDosNumeros}`);

/*
ENCONTRAR O MAIOR NUMERO
Escreva um programa JavaScript que recebe um array de números e encontre o maior número presente no array.

Dica:
Você pode usar um loop for para iterar sobre o array e comparar cada número com o maior número encontrado até o momento. Inicialize uma variável para armazenar o maior número e, durante o loop, atualize essa variável se um número maior for encontrado.
*/

//para não correr o risco de dar errado caso haja um numero negativo
//devemos iniciar o maior numero a partir do indice zero do array de numeros
let maiorNumero = arrayDeNumeros[0];
for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] > maiorNumero) {
        maiorNumero = arrayDeNumeros[i]
    }
}

console.log(`O maior número do array é: ${maiorNumero}`);

/*
CONTAR QUANTAS VOGAIS EXISTEM EM UMA STRING
Escreva um programa JavaScript que recebe uma string e conta quantas vogais (a, e, i, o, u) estão presentes nessa string.

Dica:
Você pode usar um loop for para iterar sobre cada caractere da string e verificar se ele é uma vogal. Se for uma vogal, você pode incrementar um contador para contar quantas vogais existem na string.
*/
let frase = "acidodesoxiribonucleico";
const vogais = "a e i o u"
let contadorVogais = 0;

for (let i = 0; i < frase.length; i++) {
    //utilizar o metodo .includes() para ver se uma das vogais está presente na frase
    if (vogais.includes(frase[i])) {
        //a cada vogal existente, adiciona 1 unidade ao contador
        contadorVogais++
    }
}

console.log(contadorVogais)

/*
INVERTER A ORDEM DE UMA STRING
Escreva um programa JavaScript que recebe uma string e inverte a ordem das palavras nela contidas.

Dica:
Você pode dividir a string em uma matriz de palavras usando o método split(), inverter a ordem dos elementos dessa matriz e, em seguida, unir os elementos de volta em uma string usando o método join(). Isso ajudará você a inverter a ordem das palavras na string.
*/
frase = "Teste para inverter string";
//OBS.: os métodos split() e join() precisam de um separador dentro deles para separar as palavras
//na resposta abaixo utilizei espacos vazios
const dividirPalavras = frase.split(' ')
const reverterString = dividirPalavras.reverse()
const reunirString = reverterString.join(' ');
console.log(reunirString)

/*
PALÍDROMO
Escreva um programa JavaScript que recebe uma frase e verifica se ela é um palíndromo.

Dica:
Um palíndromo é uma palavra, frase, número ou qualquer outra sequência de caracteres que se lê da mesma forma para frente e para trás, ignorando espaços, pontuação e diferenciação entre maiúsculas e minúsculas.

Você pode remover os espaços e a pontuação da frase, converter tudo para minúsculas e, em seguida, verificar se a frase invertida é igual à frase original.
*/
let fraseOriginal = "A sogra má e amargosa";
let novaFrase = fraseOriginal.replace(/\s+/g, ''); // Remove todos os espaços da frase
let fraseMaiuscula = novaFrase.toUpperCase(); // Converte a frase para maiúsculas
let fraseInvertida = fraseMaiuscula.split('').reverse().join(''); // Inverte a ordem dos caracteres

if (novaFrase === fraseInvertida) {
    console.log('A frase é um palíndromo.');
} else {
    console.log('A frase não é um palíndromo.');
}

/*
VERFIFICAR QUANTAS VEZES CADA LETRA APARECE EM UMA STRING
Escreva um programa JavaScript que recebe uma frase e conta quantas vezes cada letra aparece nela.

Dica:
Você pode usar um objeto para armazenar as contagens de cada letra na frase. Itere sobre cada caractere da frase e, para cada caractere, verifique se ele já existe no objeto de contagem. Se existir, incremente a contagem; caso contrário, inicialize a contagem para 1. No final, você terá um objeto contendo a contagem de cada letra na frase.

Espero que esta atividade seja útil para continuar praticando! Se precisar de mais orientações ou exemplos, estou aqui para ajudar.
*/

frase = "banana";
let contagemLetras = {};

// Iteração sobre a frase
for (let i = 0; i < frase.length; i++) {
    let letra = frase[i].toLowerCase(); // Convertendo para minúsculas para ignorar a diferenciação entre maiúsculas e minúsculas

    // Verificar se a letra já está presente no objeto de contagem
    if (contagemLetras[letra]) {
        // Se a letra já existe, incrementar a contagem
        contagemLetras[letra]++;
    } else {
        // Se a letra não existe, inicializar a contagem como 1
        contagemLetras[letra] = 1;
    }
}

// Imprimir a contagem de cada letra
for (let letra in contagemLetras) {
    console.log(`A letra ${letra} aparece ${contagemLetras[letra]} vezes na frase.`);
}

