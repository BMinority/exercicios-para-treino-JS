const numeros = [1, 2, 3];

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 20) + 1;
}

const novosNumeros = [];
for (let i = 0; i < 3; i++) {
    novosNumeros.push(gerarNumeroAleatorio());
}

const resultado = numeros.some(numero => novosNumeros.includes(numero));

if (resultado) {
    console.log('Parabéns');
} else {
    console.log('Não foi dessa vez.');
}
