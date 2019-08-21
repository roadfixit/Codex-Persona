import {inject, autoinject} from 'aurelia-framework';
import {WebAPI} from '../../web-api';
import { Router } from 'aurelia-router';



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
export class detail {
    routeConfig;
    books: any;
    book: Book = {

        id: '',
        title: '',
        author: '',
        description: '',
        releaseYear: '',
        type: '',
        imageSource: ''
    };
    originalBook: Book;
  
    constructor(private router: Router, private api: WebAPI) { }
  
    activate(params, routeConfig) {
  
      this.routeConfig = routeConfig;
  
      return this.api.getBookDetails(params.id).then(book => {
        this.book = <Book>book;
        this.routeConfig.navModel.setTitle(this.book.title);
        this.originalBook = JSON.parse(JSON.stringify(this.book));
        this.books = JSON.parse(localStorage.getItem('Books'));
      });
    }
  
    
  
    save() {

      const initialBooks = this.books || [];
      const finalBooks = {
          'id': this.api.generateID(),
          'title': this.book.title,
          'author': this.book.author,
          'description': this.book.description,
          'releaseYear': this.book.releaseYear,
          'imageSource': 'https://i.ibb.co/CbDjDGv/iconfinder-book-285636-2.png'

      };
      const registeredTitle = initialBooks.find(x => x.email == this.book.title);
      const registeredAuthor = initialBooks.find(x => x.email == this.book.author);


          if (registeredTitle && registeredAuthor) {

              alert('Failure! - Book already exists in the DB');

          } else {
              initialBooks.push(finalBooks);
              localStorage.setItem('Books', JSON.stringify(initialBooks));
              alert('Success! - you will be redirected towards the book list')
              this.router.navigateToRoute("books");

          }



    };


  }



