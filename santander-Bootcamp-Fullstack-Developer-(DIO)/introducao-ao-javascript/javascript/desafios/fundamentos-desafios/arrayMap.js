//Sem this

const numeros = [1, 2, 3];

console.log(numeros.map((num) => num * 5));

//Com this

const pessoa = {
    idade: 25,
};

const anos = [5, 10, 20];

function somaIdade(arr, thisArg) {
    return arr.map(function (num) {
        return num + this.idade
    }, thisArg)
}

console.log(somaIdade(anos, pessoa));
