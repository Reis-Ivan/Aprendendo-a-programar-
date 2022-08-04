function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos
        } anos de idade.`;
}

const pessoa = {
    nome: 'Ivan',
    idade: 28,
}

console.log(calculaIdade.call(pessoa, 10));
console.log(calculaIdade.apply(pessoa, [13])); //apply recebe uma lista como segundo argumento
