/**
 * HRVP 2020
 */

const BasicCar = require('./BasicCar');

class DonkeyCar extends BasicCar {
    constructor(CarDefinition) {
        super(CarDefinition.doors, CarDefinition.horsePower, CarDefinition.motor);
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

module.exports = DonkeyCar;