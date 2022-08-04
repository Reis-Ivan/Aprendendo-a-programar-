const alunos = [
    {
        nome: 'João',
        nota: 5,
        turms: '1B',
    },

    {
        nome: 'Sofia',
        nota: 9,
        turms: '1B',
    },

    {
        nome: 'Paulo',
        nota: 6,
        turms: '2C',
    },

    {
        nome: 'Amanda',
        nota: 2,
        turms: '2C',
    },
];

function alunosAprovados(array, mediaFInal) {

    let aprovados = [];

    for (let i = 0; i < array.length; i++) {
        let { nota, nome } = array[i];

        if (nota >= mediaFInal) {
            aprovados.push(nome);
        }
    }

    return aprovados
}

console.log(alunosAprovados(alunos, 6));