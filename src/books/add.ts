import { Router } from 'aurelia-router';
import { autoinject } from "aurelia-framework";


interface Book {
    id: number;
    Title: string;
    Author: string;
    Description: string;
    ReleaseYear: string;
    Type: string;
    imageSource: string;

}

@autoinject
export class add{
    routerConfig;
    books: any;
    book: Book;
    
   
    constructor(private router: Router){

    }

    activate(){

        this.books = JSON.parse(localStorage.getItem('Books'));
}
    
    submit(){

        const initialBooks  = this.books || [];
        const finalBooks = {
            'id' : "getId()",
            'Title': this.book.Title,
            'Author' : this.book.Author,
            'Description' : this.book.Description,
            'ReleaseYear' : this.book.ReleaseYear,
            'Type': this.book.Type,
            'imageSource': 'https://i.ibb.co/CbDjDGv/iconfinder-book-285636-2.png'

        };

        initialBooks.push(finalBooks);
        localStorage.setItem('Books', JSON.stringify(initialBooks));
        this.router.navigateToRoute("books");
    }

    back(){
        this.router.navigateToRoute("books-add");
    }
}