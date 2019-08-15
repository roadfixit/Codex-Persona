import { Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';


@autoinject
export class index {
    message;
    bookItems;
    defaultValue;



    constructor(private router: Router){
        this.message = 'Book library';
        
        this.bookItems = JSON.parse(localStorage.getItem('Books'));
        
        this.defaultValue = model => model.Title;
      }

      add(){
        this.router.navigateToRoute("books-add");
      }
}