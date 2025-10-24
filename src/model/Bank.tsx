export class Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;

    constructor(cardExpire: string, cardNumber: string, cardType: string, currency: string, iban: string) {
        this.cardExpire = cardExpire;
        this.cardNumber = cardNumber;
        this.cardType = cardType;
        this.currency = currency;
        this.iban = iban;
    }
}