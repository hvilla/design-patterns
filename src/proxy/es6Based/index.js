/**
 * HRVP 2020
 * @description Example of ES6 Proxy with two traps (set and get)
 */
const chalk = require('chalk');
const theCava = ['Aguila', 'BBC', 'Heineken'];

const proxy = new Proxy(theCava, {
    set: function (obj, prop, value) {
        console.log(chalk.redBright(`Adding to ${prop} a ${value}`));
        obj.push(value);
    },
    get(obj, prop, receiver) {
        const regExp = /grabA((?:And)?[a-zA-Z_0-9]+)/g;
        const beersToOrder = regExp.exec(prop)
        if (beersToOrder) {
            return beersToOrder[1].split('And').map(beer => {
                if (!obj.includes(beer)) {
                    return (`Oh Sorry the beer that you have ordered (${beer}) doesnt exists`);
                }
                return `Yup, Ordering a cold beer ${beer}`;
            })
        }
    }
});

console.log(chalk.blueBright('Grabbing A Aguila And Corona Beers'))
console.log(proxy.grabAAguilaAndCorona)
proxy.theCava = 'Corona'
console.log(proxy.grabAAguilaAndCorona)
