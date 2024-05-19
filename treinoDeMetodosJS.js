/*
Exercício 1: Contagem de Vogais
Crie uma função que receba uma string como entrada e retorne o número de vogais presentes na string.

Dicas:

Você pode usar o método split() para dividir a string em um array de caracteres.
Em seguida, você pode usar o método filter() para filtrar apenas as vogais.
Finalmente, basta retornar o comprimento do array resultante.
*/
const texto = "Não vai se atrasar. Cantico do congresso 2023";
function quantidadeDeVogais() {
    const textoDividido = texto.split('');
    const vogais = textoDividido.filter((caractere) => {
        return 'aeiouAEIOU'.includes(caractere); //usei o includes para verificar se existe uma vogal inclusa entre os caracteres das palavras
    })
    return vogais.length;
}

console.log(quantidadeDeVogais());

/*-------------------------------------*/

/*
Exercício 2: Reversão de String
Crie uma função que receba uma string como entrada e retorne a mesma string, mas com as letras em ordem reversa.

Dicas:

Você pode usar o método split() para dividir a string em um array de caracteres.
Em seguida, use o método reverse() para inverter a ordem dos elementos no array.
Por fim, utilize o método join() para juntar os caracteres em uma única string novamente.
*/
function reverterString() {
    const textoReverso = texto.split('').reverse();
    return textoReverso.join('')
}
console.log(reverterString());

/*-----------------------------------*/

/*
Exercício 3: Fatorial
Crie uma função que receba um número como entrada e retorne o fatorial desse número.

Dicas:

Use um loop, como for ou while, para iterar de 1 até o número fornecido.
Mantenha uma variável para armazenar o resultado do fatorial.
Em cada iteração do loop, multiplique o número atual pelo resultado atual do fatorial.
*/
function calculoFatorial(numero) {
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }

    return resultado;
}

console.log(calculoFatorial(5));

/*-----------------------------------*/

/*
Exercício 4: Palíndromo
Crie uma função que verifique se uma string é um palíndromo (ou seja, se pode ser lida da mesma forma de trás para frente).

Dicas:

Você pode usar o método split() para dividir a string em um array de caracteres.
Em seguida, use o método reverse() para inverter a ordem dos elementos no array.
Por fim, compare a string original com a versão invertida para verificar se são iguais.
*/

function verificarSePalindromo(texto) {
    const textoAoContrario = texto.split('').reverse().join(''); // Converte o array de caracteres de volta para uma string

    if (texto !== textoAoContrario) {
        console.log(`O texto "${texto}" não é um palíndromo.`);
    } else {
        console.log(`O texto "${texto}" é um palíndromo.`);
    }
}

const texto2 = "socorram-me subi no onibus em marrocos";
verificarSePalindromo(texto2);
