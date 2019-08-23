import { inject, autoinject } from "aurelia-framework";
import { WebAPI } from "../../web-api";
import { Router } from "aurelia-router";

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
    id: "",
    title: "",
    author: "",
    description: "",
    releaseYear: "",
    type: "",
    imageSource: ""
  };
  originalBook: Book;

  constructor(private router: Router, private api: WebAPI) {}

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
    let saved = this.books.findIndex(x => x.id == this.book.id);
    this.books.splice(saved, 1, this.book);
    localStorage.setItem("Books", JSON.stringify(this.books));

    alert("Success! - you will be redirected towards the book list");
    this.router.navigateToRoute("books");
  }
}
