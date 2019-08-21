import { Router } from 'aurelia-router';
import { autoinject, observable } from 'aurelia-framework';



interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  releaseYear: string;
  type: string;
  imageSource: string;

}

@autoinject
export class index {
  @observable searchValue;
  books: Book[]=[]; 
  booksCached: Book[]=[]; 
  defaultValue;
  autocompletes;






  constructor(private router: Router) {

    this.books = JSON.parse(localStorage.getItem('Books'));
    this.booksCached = this.books;
    this.defaultValue = model => model.Title;
    this.autocompletes = [];
  
  }

  add() {
    this.router.navigateToRoute("books-add");
  }

  searchValueChanged(newval, oldval) {
    const result = this.books;
    if (this.searchValue) {
      this.executeSearch();
      this.autocompletes = result.filter(x => x.title.includes(newval));

    } else {

      this.autocompletes = [];
      this.books = [];
      this.books = JSON.parse(localStorage.getItem('Books'));
    }

  }


  executeSearch() {

    if (this.searchValue) {

      const sResults = this.booksCached.filter(x => x.title.includes(this.searchValue));
      if (sResults) {
        this.books = sResults;

       

      } else {
        this.books = [];
      }



    } else {
      this.books = [];
      this.books = JSON.parse(localStorage.getItem('Books'));
    }
  }
}