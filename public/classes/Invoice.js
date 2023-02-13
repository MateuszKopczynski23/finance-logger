export class Invoice {
    constructor(client, details, amount = 200) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount}$ for ${this.details}`;
    }
}
