/**
 * HRVP 2020
 */

const DonkeyCar = require('./automobiles/DonkeyCar');
const Sport = require('./automobiles/Sport');
const Suv = require('./automobiles/Suv');

class Factory1 {
    static build(CarDefinition) {
        switch (CarDefinition.type) {
            case 'DONKEY_CAR':
                return new DonkeyCar(CarDefinition);
                break;

            case 'SPORT':
                return new Sport(CarDefinition);
                break;

            case 'SUV':
                return new Suv(CarDefinition);
                break;

            default:
                break;
        }
    }
}

module.exports = Factory1;