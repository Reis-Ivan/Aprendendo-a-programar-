function tabuada(num) {
    let arrayNum = []
    for (let i = 0; i <= 10; i++) {
        arrayNum.push(num * i);
    }
    return arrayNum
}
console.log("Exemplo For: ")
console.log(tabuada(5));

function dados(objeto) {
    // for in para objetos
    for (propriedade in objeto) {
        console.log(propriedade + ": " + objeto[propriedade]);
    }
}

const pessoa = {
    nome: 'Ivan',
    idade: '28',
    altura: '1,75',
    signo: 'aquário'
}
console.log("Exemplo For-In: ")
dados(pessoa);

function logArray(nums) {
    console.log(nums);
    //for of para string e arrays
    for (item of nums) {
        console.log(item);
    }
}
const numeros = [10, 20, 30, 40];
console.log("Exemplo For-of: ")
logArray(numeros);

console.log("Exemplo While: ")
function exemploWhile() {
    let num = 0;
    while (num <= 5) {
        console.log(num);
        num++;
    }
}
exemploWhile();