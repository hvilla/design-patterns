/**
 * HRVP 2020
 */
const Factory1 = require('./Factory1');
const Factory2 = require('./Factory2');
const chalk = require('chalk');

const carDefinitions = [
    {
        type: 'donkey_car',
        owner: 'The Old Pello',
        motor: 'QEDM (QEDonkey Motor)',
        brand: 'MLC (Mary Little Casc)'
    },
    {
        type: 'sport',
        owner: 'The R2 Guy',
        motor: 'S-TEC II',
        brand: 'Chevrolet'
    },
    {
        type: 'suv',
        owner: 'The Bot Fedex',
        motor: '1.0 TSI',
        brand: 'Seat'
    }
];

function createCarsFactory1() {
    console.log(chalk.blue('============ PRODUCTION FACTORY 1 STARTED ============'))
    const carsCreated = carDefinitions.map(carDefinition => {
        return Factory1.build(carDefinition)
    })
    console.log(chalk.blue('============ PRODUCTION DONE ============'));
    console.log(chalk.blue('============ TESTING CARS FOR CLIENTS ============'))
    carsCreated.forEach(car => {
        testCar(car);
    })
    console.log(chalk.blue('============ TESTING DONE ============\n'))
}

function createCarsFactory2() {
    console.log(chalk.magenta('============ PRODUCTION FACTORY 2 STARTED ============'))
    const carsCreated = carDefinitions.map(carDefinition => {
        return Factory2.build(carDefinition)
    })
    console.log(chalk.magenta('============ PRODUCTION DONE ============'));
    console.log(chalk.magenta('============ TESTING CARS FOR CLIENTS ============'))
    carsCreated.forEach(car => {
        testCar(car);
    })
    console.log(chalk.magenta('============ TESTING DONE ============\n'))
}

function testCar(car) {
    console.log(chalk.yellow(`============ TESTING CAR FOR CLIENT=(${car.getOwner()}) STARTED ============`));
    car.startEngine();
    car.stopEngine();
    console.log(chalk.yellow(`============ TESTING CAR FOR CLIENT=(${car.getOwner()}) DONE============\n`));
}

createCarsFactory1();
createCarsFactory2();