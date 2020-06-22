/**
 * HRVP 2020
 */

const BasicCar = require('./BasicCar')

class Suv extends BasicCar {
    constructor(CarDefinition) {
        super(CarDefinition.doors, CarDefinition.horsePower);
        this.motor = CarDefinition.motor;
        this.brand = CarDefinition.brand;
        this.owner = CarDefinition.owner;
    }

    getOwner() {
        return this.owner;
    }

    startEngine() {
        console.log(`The Car ${this.brand} with motor=(${this.motor}) with ${this.getHorsePower()}HP is on`);
    }

    stopEngine() {
        console.log(`The Car ${this.brand} with motor=(${this.motor}) is off`);
    }

    _seatBrandedAddons() {
        const listOfAddons = ['LCD Display', 'GPS'];
        return listOfAddons;
    }
}

module.exports = Suv;