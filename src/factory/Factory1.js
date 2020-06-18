/**
 * HRVP 2020
 */

const DonkeyCar = require('./automobiles/DonkeyCar');
const Sport = require('./automobiles/Sport');
const Suv = require('./automobiles/Suv');

class Factory1 {
    static build(CarDefinition) {
        console.log(CarDefinition);

        switch (CarDefinition.type) {
            case 'donkey_car':
                return new DonkeyCar(CarDefinition);
                break;

            case 'sport':
                return new Sport(CarDefinition);
                break;

            case 'suv':
                return new Suv(CarDefinition);
                break;

            default:
                throw 'Hey this car doesn\'t exist\'s in our catalog';
                break;
        }
    }
}

module.exports = Factory1;