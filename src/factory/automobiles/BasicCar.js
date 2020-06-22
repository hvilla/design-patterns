/**
 * HRVP 2020
 */

class BasicCar {
    constructor(doors, horsePower, motor) {
        this.tires = 4;
        this.doors = doors;
        this.horsePower = horsePower;
        this.motor = motor;
    }

    getTires() {
        return this.tires;
    }

    getDoors() {
        return this.doors;
    }

    setDoors(doors) {
        this.doors = doors;
    }

    getHorsePower() {
        return this.horsePower;
    }

    setHorsePower(horsePower) {
        this.horsePower = horsePower;
    }
}

module.exports = BasicCar;