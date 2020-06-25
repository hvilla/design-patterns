/**
 * HRVP 2020
 */

const PaymentClass = require('./payment')
const payment = new PaymentClass('5555-5555-5555-5555', 100000);

//Execute Transaction Order
payment.executeTransaction().catch(error => {
    console.log('Internal Error: ', error);
});

//Try to cancel transaction at time defined
setTimeout(function () {
    payment.cancelTransaction();
}, 20000)

//Constantly getting info
setInterval(function () {
    payment.getStatus();
}, 1000)