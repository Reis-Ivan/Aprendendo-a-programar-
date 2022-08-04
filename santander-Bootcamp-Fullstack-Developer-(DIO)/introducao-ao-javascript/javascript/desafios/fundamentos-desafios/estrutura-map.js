function getAdmins(map) {
    adms = [];

    for (const [key, value] of map) {
        if (value === 'Admin') {
            adms.push(key);
        }
    }

    return adms
}

const func = new Map();

func.set('Ivan', 'Admin');
func.set('MIchelle', 'Dev');
func.set('Jonas', 'Admin');
func.set('Maria', 'Admin');
func.set('Andressa', 'Dev');

console.log(getAdmins(func));

