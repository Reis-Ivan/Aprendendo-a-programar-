let nome = 'Ivan';
let sobrenome = 'Reis';

//concatenar
let concatenado = nome.concat(sobrenome);
console.log(concatenado);

concatenado = nome + " " + sobrenome;
console.log(concatenado);

concatenado = nome + "\n" + sobrenome;

concatenado = `${nome} ${sobrenome}`;
console.log(concatenado);

//separar frase
let frase = "Oi, eu sou o Goku!";
let fraseSeparada = frase.split("");
console.log(fraseSeparada);

fraseSeparada = frase.split(" ");
console.log(fraseSeparada);

let quantidadePalavras = frase.split(" ").length;
console.log(quantidadePalavras);
