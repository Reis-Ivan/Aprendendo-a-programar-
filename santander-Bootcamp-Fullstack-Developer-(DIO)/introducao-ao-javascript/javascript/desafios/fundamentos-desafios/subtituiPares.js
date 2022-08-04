function substitiuPares(array) {
    if (!array.length) {
        return console.log(-1)
    }
    else {
        for (i = 0; i < array.length - 1; i++) {
            if (array[i] % 2 == 0 && array[i] != 0) {
                array[i] = 0;
            }
        }
        return array
    }
}




let array = [1, 3, 4, 6, 80, 33, 23, 90];
let array_vazio = [];

console.log(substitiuPares(array));
console.log(substitiuPares(array_vazio));

