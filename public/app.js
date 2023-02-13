import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { ListTemplateItemPosition } from "./enums/ListTemplateItemPosition.js";
const form = document.querySelector('.form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!toFrom.value || !details.value || !amount.valueAsNumber)
        return;
    let doc;
    let values = [toFrom.value, details.value, amount.valueAsNumber];
    type.value === 'invoice'
        ? doc = new Invoice(...values)
        : doc = new Payment(...values);
    list.render(doc, type.value, ListTemplateItemPosition.END);
    clearForm();
});
function clearForm() {
    toFrom.value = '';
    details.value = '';
    amount.value = '';
}
