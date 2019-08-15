export class index {
    message;
    bookItems;
    defaultValue;



    constructor(){
        this.message = 'Book library';
        
        this.bookItems = JSON.parse(localStorage.getItem('Books'));
        
        this.defaultValue = model => model.Title;
      }
}