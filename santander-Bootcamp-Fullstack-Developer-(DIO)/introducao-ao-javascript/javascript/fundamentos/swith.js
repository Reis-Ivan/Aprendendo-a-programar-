function menu(id) {
    switch (id) {
        case 1:
            return 'Sopa';
        case 2:
            return 'Salada';
        case 3:
            return 'Carne';
        default:
            return 'Água';
    }
}

console.log(menu(1))
console.log(menu(3))
console.log(menu())