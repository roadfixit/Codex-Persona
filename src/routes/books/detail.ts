import {inject} from 'aurelia-framework';
import {WebAPI} from '../../web-api';



interface Book {

    id: string;
    title: string;
    author: string;
    description: string;
    releaseYear: string;
    type: string;
    imageSource: string;

}

@inject(WebAPI)
export class detail {
    routeConfig;
    book: Book;
    originalBook: Book;
  
    constructor(private api: WebAPI) { }
  
    activate(params, routeConfig) {
  
      this.routeConfig = routeConfig;
  
      return this.api.getBookDetails(params.id).then(book => {
        this.book = <Book>book;
        this.routeConfig.navModel.setTitle(this.book.title);
        this.originalBook = JSON.parse(JSON.stringify(this.book));
      });
    }
  
  
    save() {};


  }



