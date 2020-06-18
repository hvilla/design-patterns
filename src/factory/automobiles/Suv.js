/**
 * HRVP 2020
 */

const BasicCar = require('./BasicCar')

class Sport extends BasicCar {
    constructor(CarDefinition) {
        super(CarDefinition.doors, CarDefinition.housePower);
        this.motor = CarDefinition.motor;
        this.brand = CarDefinition.brand;
        this.owner = CarDefinition.owner;
    }

    getOwner() {
        return this.owner;
    }

    startEngine() {
        console.log(`The Car ${this.brand} with motor=(${this.motor}) is on`);
    }

    stopEngine() {
        console.log(`The Car ${this.brand} with motor=(${this.motor}) is off`);
    }
}

module.exports = Sport;