/**
 * HRVP 2020
 */

const {
    CarCatalog
} = require('./automobiles/carCatalog');

class Factory2 {
    static build(CarDefinition) {
        console.log(CarDefinition);

        const CarClass = CarCatalog[CarDefinition.type];
        if (CarClass == 'undefined') {
            throw new Error('Hey this car doesn\'t exist\'s in our catalog');
        }
        return new CarClass(CarDefinition);
    }
}

module.exports = Factory2;