//Filtre e retorne todos os números pares de um array.
function filtaPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numeros.filter((num) => num % 2 === 0));
console.log(filtaPares(numeros));