//MANIPULAÇÃO DE ARRAYS (ADICIONAR, REMOVER E BUSCAR)

/*
Escreva um programa JavaScript que gerencie uma lista de tarefas (to-do list). O programa deve permitir adicionar novas tarefas, remover tarefas existentes e buscar uma tarefa específica na lista.

Dicas:

Adição de Tarefas:
Para adicionar uma nova tarefa à lista, você pode usar o método push() para adicionar a nova tarefa ao final do array.

Remoção de Tarefas:
Para remover uma tarefa existente da lista, você pode usar o método splice() para remover a tarefa com base em seu índice no array.

Busca de Tarefas:
Para buscar uma tarefa específica na lista, você pode usar o método indexOf() para encontrar o índice da tarefa no array. Se a tarefa existir, o método retornará seu índice; caso contrário, retornará -1.
*/

let listaDeTarefas = ["Estudar JavaScript", "Fazer compras", "Ler um livro"];

// Adicionar uma nova tarefa com metodo PUSH()
listaDeTarefas.push("Limpar a casa");

// Remover uma tarefa existente (por índice)
let indiceRemover = listaDeTarefas.indexOf("Fazer compras"); //ou indexOf(1)
//se o elemento que queremos remover não for encontrado, o indexOf retorna -1
//por isso precisamos saber se o indique que queremos remover é diferente de -1
if (indiceRemover !== -1) {
    //se for diferente de -1
    /*
    usamos splice(argumento 1, argumento 2)
                (indice onde começamos a remover os elementos, numero de elementos a serem removidos)
    */
    listaDeTarefas.splice(indiceRemover, 1);
}

// Buscar uma tarefa específica
let tarefaBuscar = "Estudar JavaScript";
let indiceBuscar = listaDeTarefas.indexOf(tarefaBuscar);
if (indiceBuscar !== -1) {
    console.log(`A tarefa "${tarefaBuscar}" está na posição ${indiceBuscar} da lista.`);
} else {
    console.log(`A tarefa "${tarefaBuscar}" não foi encontrada na lista.`);
}


/*
RETORNAR NOVO ARRAY COM NUMEROS PARES
Escreva um programa JavaScript que recebe uma lista de números e retorna um novo array contendo apenas os números pares da lista.

Dicas:

Você pode usar um loop for ou for...of para iterar sobre os elementos da lista.
Para verificar se um número é par, você pode usar o operador de módulo %. Se o resto da divisão por 2 for igual a 0, o número é par.
Você pode usar um array vazio e o método push() para adicionar os números pares encontrados ao novo array.
No final, você terá um novo array contendo apenas os números pares da lista original.
*/
function encontrarPares(lista) {
    //devemos iniciar um array vazio para guardar os numeros pares
    let pares = [];

    for (let numero of lista) {
        if (numero % 2 === 0) {
            pares.push(numero);
        }
    }

    return pares;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = encontrarPares(numeros);
console.log("Números Pares:", numerosPares);

/*
SOMAR TODOS OS IMPARES
Tarefa:
Escreva um programa JavaScript que recebe uma lista de números e retorna a soma de todos os números ímpares da lista.

Dicas:

Você pode usar um loop for ou for...of para iterar sobre os elementos da lista.
Para verificar se um número é ímpar, você pode usar o operador de módulo %. Se o resto da divisão por 2 for diferente de 0, o número é ímpar.
Você pode usar uma variável para acumular a soma dos números ímpares encontrados durante a iteração.
No final, você terá a soma de todos os números ímpares da lista.
*/

function somarImpares(lista) {
    let soma = 0;

    for (let numero of lista) {
        if (numero % 2 !== 0) {
            soma += numero;
        }
    }

    return soma;
}

let somaImpares = somarImpares(numeros);
console.log("Soma dos Números Ímpares:", somaImpares);

/*
RETORNAR APENAS STRINGS COM MAIS DE 5 CARACTERES
Tarefa:
Escreva um programa JavaScript que recebe uma lista de elementos (que podem ser números ou strings) e retorna um novo array contendo apenas os elementos que são strings e têm um comprimento maior que 5 caracteres.

Dicas:

Você pode usar um loop for ou for...of para iterar sobre os elementos da lista.
Para verificar se um elemento é uma string, você pode usar o operador typeof.
Para verificar o comprimento de uma string, você pode usar a propriedade length.
Você pode usar um array vazio e o método push() para adicionar os elementos que atendem aos critérios ao novo array.
No final, você terá um novo array contendo apenas as strings que têm um comprimento maior que 5 caracteres.
*/
function filtrarStringsLongas(lista) {
    //começar com uma string vazia para armazenar novos dados
    let resultado = [];

    for (let elemento of lista) {
        if (typeof elemento === 'string' && elemento.length > 5) {
            resultado.push(elemento);
        }
    }

    return resultado;
}

let elementos = [1, "apple", "banana", 12345, "elephant", "grape", "watermelon"];
let stringsLongas = filtrarStringsLongas(elementos);
console.log("Strings com mais de 5 caracteres:", stringsLongas);

/*
OPERAÇÕES COM MÉTODOS DE ARRAYS
Tarefa:
Escreva um programa JavaScript que recebe uma lista de números e realiza as seguintes operações:

Adiciona um novo número ao final da lista.
Remove o primeiro número da lista.
Adiciona um novo número no início da lista.
Remove o último número da lista.
Ordena a lista em ordem crescente.
Retorna a lista resultante.
Dicas:

Você pode usar os métodos push() e shift() para adicionar um novo número ao final da lista e remover o primeiro número, respectivamente.
Para adicionar um novo número no início da lista e remover o último número, você pode usar os métodos unshift() e pop().
Use o método sort() para ordenar a lista em ordem crescente.
Ao final, retorne a lista resultante.
*/
function manipularLista(lista, novoNumero) {
    // Adicionar um novo número ao final da lista
    lista.push(novoNumero);

    // Remover o primeiro número da lista
    lista.shift();

    // Adicionar um novo número no início da lista
    lista.unshift(novoNumero * 2); // Exemplo: Multiplica o novo número por 2 para demonstração

    // Remover o último número da lista
    lista.pop();

    // Ordenar a lista em ordem crescente
    lista.sort((a, b) => a - b);

    return lista;
}

let novoNumero = 11;

let listaManipulada = manipularLista(numeros, novoNumero);
console.log("Lista Manipulada:", listaManipulada);

/*
USO DOS METODOS SPLICE E SLICE
Tarefa:
Escreva um programa JavaScript que recebe uma lista de números e realiza as seguintes operações:

Remover os dois primeiros números da lista.
Criar uma cópia do array original contendo apenas os números entre o terceiro e o quinto índice, inclusive.
Substituir os elementos do terceiro ao quinto índice do array original pelos números 10, 11 e 12, respectivamente.
Retornar ambos os arrays resultantes.
Dicas:

Você pode usar o método splice() para remover os dois primeiros elementos da lista e substituir os elementos do terceiro ao quinto índice.
Use o método slice() para criar uma cópia de parte do array original, especificando os índices do terceiro ao quinto.
Ao final, retorne tanto a lista modificada quanto a cópia criada.
*/

function manipularArray(lista) {
    // Remover os dois primeiros números da lista
    let numerosRemovidos = lista.splice(0, 2);

    // Criar uma cópia do array original contendo apenas os números entre o terceiro e o quinto índice
    let copiaArray = lista.slice(2, 5);

    // Substituir os elementos do terceiro ao quinto índice pelos números 10, 11 e 12, respectivamente
    lista.splice(2, 3, 10, 11, 12);

    return {
        listaModificada: lista,
        copiaArray: copiaArray
    };
}

let resultado = manipularArray(numeros);
console.log("Lista Modificada:", resultado.listaModificada);
console.log("Cópia do Array:", resultado.copiaArray);
