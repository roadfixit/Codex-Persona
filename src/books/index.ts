import { Router } from 'aurelia-router';
import { autoinject, observable } from 'aurelia-framework';


@autoinject
export class index {
  @observable searchValue;
  message;
  listItems;
  defaultValue;
  autocompletes;




  constructor(private router: Router) {
    this.message = 'Book library';

    this.listItems = JSON.parse(localStorage.getItem('Books'));

    this.defaultValue = model => model.Title;

    this.autocompletes = [];
  }

  add() {
    this.router.navigateToRoute("books-add");
  }

  searchValueChanged(newval, oldval) {
    const result = this.listItems;
    if (this.searchValue) {
      this.executeSearch();
      this.autocompletes = result.filter(x => x.Title.includes(newval));

      } else {

      this.autocompletes = [];
      this.listItems = [];
      this.listItems = JSON.parse(localStorage.getItem('Books'));
    }

  }


  executeSearch() {

    if (this.searchValue) {

      const sResults = this.listItems.find(x => x.Title.includes(this.searchValue));
      if(sResults)
      {
        this.listItems = [];
        this.listItems.push(sResults);
  
      } else {
        this.listItems = [];
      }



    } else {
      this.listItems = [];
      this.listItems = JSON.parse(localStorage.getItem('Books'));
    }
  }
}