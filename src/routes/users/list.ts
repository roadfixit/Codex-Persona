import {bindable, autoinject} from 'aurelia-framework';

@autoinject
export class List {
  @bindable value;
  selectedId = 0;

  select(value) {
    this.selectedId = value.id;
    return true;
  }


}
