/**
 * HRVP 2020
 */

const { TypeOfAutomobiles, CarCatalog } = require('./automobiles/CarCatalog');

class Factory2 {
    static build(CarDefinition) {
        const CarClass = TypeOfAutomobiles[CarDefinition.type];
        if (CarClass == 'undefined') {
            throw new Error('Hey this car doesnt exist\'s in our catalog');
        }
        return new CarCatalog(CarDefinition);
    }
}

module.exports = Factory2;