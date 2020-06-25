/**
 * HRVP 2020
 * @description Example for Factory Pattern (Creational Patterns)
 */
const Factory1 = require('./Factory1');
const Factory2 = require('./Factory2');
const chalk = require('chalk');

const carDefinitions = [{
        type: 'donkey_car',
        owner: 'The Old Pello',
        motor: 'QEDM (QEDonkey Motor)',
        brand: 'MLC (Mary Little Casc)',
        horsePower: 1
    },
    {
        type: 'sport',
        owner: 'The R2 Guy',
        motor: 'S-TEC II',
        brand: 'Chevrolet',
        horsePower: 144
    },
    {
        type: 'suv',
        owner: 'The Bot Fedex',
        motor: '1.0 TSI',
        brand: 'Seat',
        horsePower: 300
    }
];




function createCarsFactory(Factory) {
    console.log(chalk.magenta(`============ PRODUCTION ${Factory.name} STARTED ============`));
    const carsCreated = carDefinitions.map(carDefinition => {
        return Factory.build(carDefinition)
    })
    console.log(chalk.magenta('============ PRODUCTION DONE ============'));
    console.log(chalk.magenta('============ TESTING CARS FOR CLIENTS ============'));
    carsCreated.forEach(car => {
        testCar(car);
    })
    console.log(chalk.magenta('============ TESTING DONE ============\n'));
}

function testCar(car) {
    console.log(chalk.yellow(`============ TESTING CAR FOR CLIENT=(${car.getOwner()}) STARTED ============`));
    car.startEngine();
    car.stopEngine();
    console.log(chalk.yellow(`============ TESTING CAR FOR CLIENT=(${car.getOwner()}) DONE============\n`));
}

createCarsFactory(Factory1);
createCarsFactory(Factory2);