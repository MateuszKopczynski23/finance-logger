import {Invoice} from "./classes/Invoice.js";
import {Payment} from "./classes/Payment.js";
import {ListTemplate} from "./classes/ListTemplate.js";
import {ListTemplateItemPosition} from "./enums/ListTemplateItemPosition.js";
import {HasFormatter} from "./interfaces/HasFormatter.js";

const form = document.querySelector('.form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  if (!toFrom.value || !details.value || !amount.valueAsNumber) return;

  let doc: HasFormatter;
  let values: [string, string, number] = [toFrom.value, details.value, amount.valueAsNumber]

  type.value === 'invoice'
      ? doc = new Invoice(...values)
      : doc = new Payment(...values);

  list.render(doc, type.value, ListTemplateItemPosition.END);

  clearForm();
})

function clearForm(): void {
  toFrom.value = '';
  details.value = '';
  amount.value = '';
}