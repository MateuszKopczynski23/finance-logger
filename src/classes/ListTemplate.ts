import {ListTemplateItemPosition} from "../enums/ListTemplateItemPosition.js";
import {HasFormatter} from "../interfaces/HasFormatter.js";

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: HasFormatter, heading: string, position: ListTemplateItemPosition) {
    const li = document.createElement('li');

    const h4 = document.createElement('h4');
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement('p');
    p.innerText = item.format();
    li.append(p);

    position === ListTemplateItemPosition.START
        ? this.container.prepend(li)
        : this.container.append(li);
  }
}