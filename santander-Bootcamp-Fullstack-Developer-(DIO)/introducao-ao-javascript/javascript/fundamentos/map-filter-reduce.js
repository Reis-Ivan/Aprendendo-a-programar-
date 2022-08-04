//map / filter- cria-se novo array
const array = [1, 2, 3, 4, 5,];
console.log(array.map((item) => item * 2));
console.log(array.filter((item) => (item % 2 == 0)));

//filter - cria-se novo array
const frutas = ['maçã fuki', 'maçã verde', 'limão', 'laranja'];
console.log(frutas.filter((fruta) => fruta.includes('maçã')));

