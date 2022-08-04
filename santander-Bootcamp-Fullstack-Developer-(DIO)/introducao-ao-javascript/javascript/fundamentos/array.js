//Lista iteravel de elementos

let array = [1, 2, 3, 4, 5];
console.log(array);

array.push(6); //adiciona elemento
console.log(array);

array.pop(); //remove último elemento
console.log(array);
array.shift(); //remove primeiro elemento
console.log(array);
array.unshift(6); //adiciona elemento no inicio
console.log(array);

//iteravel
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

