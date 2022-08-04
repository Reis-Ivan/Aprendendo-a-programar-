function somaNumeros(arr) {
    return arr.reduce(function (prev, current) {
        return prev + current
    })
}


const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((inicio, fim) => inicio + fim);
console.log(`Soma com arrow funciton: ${soma}`);
console.log(`Soma com function + callback: ${somaNumeros(numeros)}`);



const produtos = [
    {
        name: 'Notebook',
        price: 3000
    },

    {
        name: 'Headset',
        price: 200,
    },

    {
        name: 'Monitor',
        price: 900,
    },
]

const saldoDisponivel = 5000

function saldoCompra(saldo, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log('Rodada: ', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.price;
    }, saldo);
}

console.log(saldoCompra(saldoDisponivel, produtos));