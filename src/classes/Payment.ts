import {HasFormatter} from "../interfaces/HasFormatter";

export class Payment implements HasFormatter {
  constructor(
      readonly recipient: string,
      private details: string,
      public amount: number = 200
  ) {}

  format() {
    return `${this.recipient} is owed ${this.amount}$ for ${this.details}`;
  }
}