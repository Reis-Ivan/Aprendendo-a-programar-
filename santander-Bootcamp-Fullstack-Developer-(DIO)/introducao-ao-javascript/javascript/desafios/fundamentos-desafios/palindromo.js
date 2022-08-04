//Solução 1
function palindromo(string) {

    if (!string) return;
    console.log(`Solução 1: ${string}-> ${string === string.split("").reverse().join("")}`);
}

palindromo('asmsa');
palindromo('abacaxi');

function palindromo2(string) {
    let stringReverse = "";

    for (i = string.length - 1; i > -1; i--) {
        stringReverse = stringReverse.concat(string[i]);
    };
    console.log(`Solução 2: ${string}-> ${string === stringReverse}`)
}

palindromo2('asmsa');
palindromo2('abacaxi');