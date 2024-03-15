/*
Escreva um programa JavaScript que recebe uma frase como entrada e realiza as seguintes operações:

Converte a primeira letra de cada palavra para maiúscula.
Remove os espaços em branco no início e no final da frase.
Substitui todas as ocorrências da palavra "gato" por "cachorro".
Retorna a frase resultante.
Dicas:

Você pode usar o método split() para dividir a frase em palavras.
Use o método charAt() ou toUpperCase() para converter a primeira letra de cada palavra para maiúscula.
Use o método trim() para remover os espaços em branco no início e no final da frase.
Utilize o método replace() para substituir todas as ocorrências da palavra "gato" por "cachorro".
Ao final, junte as palavras de volta em uma única string usando o método join() ou toString().
*/

function processarFrase(frase) {
    // Dividir a frase em palavras
    let palavras = frase.split(" ");

    // Converter a primeira letra de cada palavra para maiúscula
    palavras = palavras.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

    // Remover espaços em branco no início e no final da frase
    let fraseSemEspacos = palavras.join(" ").trim();

    // Substituir todas as ocorrências da palavra "gato" por "cachorro"
    let fraseFinal = fraseSemEspacos.replace(/gato/g, "cachorro");

    return fraseFinal;
}

let entrada = "o gato preto pulou sobre o muro";
let fraseProcessada = processarFrase(entrada);
console.log("Frase Processada:", fraseProcessada);

/*
Escreva um programa JavaScript que recebe uma lista de nomes separados por vírgula e realiza as seguintes operações:

Separa os nomes em um array.
Remove os espaços em branco no início e no final de cada nome.
Verifica se algum nome contém a letra "a" (maiúscula ou minúscula) e, se sim, adiciona "(contém a)" ao final do nome.
Retorna a lista de nomes resultante como uma única string, separada por vírgulas.
Dicas:

Use o método split() para separar os nomes em um array, especificando a vírgula como o separador.
Utilize o método trim() para remover espaços em branco do início e do final de cada nome.
Use o método includes() para verificar se um nome contém a letra "a".
Adicione a string "(contém a)" ao nome se a condição for verdadeira.
Ao final, junte os nomes de volta em uma única string usando o método join().
*/

function processarNomes(nomes) {
    // Separa os nomes em um array
    let nomesArray = nomes.split(",");

    // Remove espaços em branco no início e no final de cada nome
    nomesArray = nomesArray.map(nome => nome.trim());

    // Verifica se algum nome contém a letra "a" e adiciona "(contém a)" ao final do nome
    nomesArray = nomesArray.map(nome => {
        if (nome.toLowerCase().includes("a")) {
            return nome + " (contém a)";
        } else {
            return nome;
        }
    });

    // Retorna a lista de nomes como uma única string separada por vírgulas
    return nomesArray.join(", ");
}

let arrayDeEntrada = "Maria, João, Ana, Pedro, Luana";
let nomesProcessados = processarNomes(arrayDeEntrada);
console.log("Nomes Processados:", nomesProcessados);
