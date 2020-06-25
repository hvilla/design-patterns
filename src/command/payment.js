/**
 * HRVP 2020
 */

const chalk = require('chalk');
class Payment {
    constructor(cardNumber, cost) {
        this.cardNumber = cardNumber;
        this.transaction = null;
        this.transactionUserStatus = 'ORDERED';
        this.cost = cost;
    }

    async executeTransaction() {
        this._handleTransaction();
    }

    async _executeInitialTransaction() {
        console.log(`Executing payment transaction for credit card number=(${this.cardNumber})`);

        const self = this;
        this.transactionUserStatus = 'PENDING';
        this.transaction = new Promise(() => {
            setTimeout(() => self._executeBankTransaction(), 5000);
        });

    }

    _getAmountOfCardInBank() {
        console.log(`Looking for bank info of credit card number=(${this.cardNumber})`);
        return Math.random() * 10000;
    }

    async _executeBankTransaction() {
        console.log('Executing transaction', this.transactionUserStatus);
        const currentAmount = this._getAmountOfCardInBank();
        if (currentAmount > this.cost) {
            this.transactionUserStatus = 'APPROVED';
        } else if (this.transactionUserStatus == 'PENDING') {
            this.transactionUserStatus = 'CANCELED';
        }
        this._handleTransaction();
    }

    async _handleTransaction() {
        switch (this.transactionUserStatus) {
            case 'ORDERED':
                this._executeInitialTransaction();
                break;
            case 'PENDING':
                console.log(chalk.blueBright('The payment is in bank approval'))
                break;
            case 'APPROVED':
                console.log(chalk.greenBright('Payment Approved By Bank!!!'))
                break;
            case 'CANCELED':
                console.log(chalk.redBright('Payment Canceled By Bank!!!'))
                break;
            case 'ABORTED':
                console.log(chalk.yellowBright('Payment Aborted By User!!!'))
                break;
        }
    }

    async cancelTransaction() {
        console.log('Try to cancel transaction')
        if (this.transactionUserStatus == 'PENDING') {
            this.transactionUserStatus = 'ABORTED';
        } else {
            console.log(chalk.magentaBright('Payment Processed Has Expired'))
        }
    }

    async getStatus() {
        this._handleTransaction();
    }
}

module.exports = Payment;