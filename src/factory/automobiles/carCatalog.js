/**
 * HRVP 2020
 */

const DonkeyCar = require('./DonkeyCar');
const Sport = require('./Sport');
const Suv = require('./Suv');

const TypeOfAutomobiles = {
    DONKEY_CAR: 'donkey_car',
    SPORT: 'sport',
    SUV: 'suv'
};

const CarCatalog = {};

CarCatalog[TypeOfAutomobiles.DONKEY_CAR] = DonkeyCar;
CarCatalog[TypeOfAutomobiles.SPORT] = Sport;
CarCatalog[TypeOfAutomobiles.SUV] = Suv;

module.exports = {
    TypeOfAutomobiles,
    CarCatalog
};