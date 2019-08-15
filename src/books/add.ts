import { Router } from 'aurelia-router';
import { autoinject } from "aurelia-framework";
import { ValidationRules, ValidationController } from 'aurelia-validation'
import { WebAPI } from '../web-api';


interface Book {
    id: string;
    Title: string;
    Author: string;
    Description: string;
    ReleaseYear: string;
    Type: string;
    imageSource: string;

}

@autoinject
export class add {
    routerConfig;
    books: any;
    book: Book = {

        id: '',
        Title: '',
        Author: '',
        Description: '',
        ReleaseYear: '',
        Type: '',
        imageSource: ''

    };


    constructor(private router: Router, private controller: ValidationController, private api: WebAPI) {

        ValidationRules

            .ensure('Title')
            .required()
            .withMessage("Please enter a title")


            .ensure('Author')
            .required()
            .withMessage("Please enter an author")

            .ensure('Description')
            .required()
            .withMessage("Please enter a description")

            .ensure('ReleaseYear')
            .required()
            .withMessage("Please enter the release year")

            .ensure('Type')
            .required()
            .withMessage("Please enter the type")



            .on(this.book);

    }

    activate() {

        this.books = JSON.parse(localStorage.getItem('Books'));
    }

    submit() {

        const initialBooks = this.books || [];
        const finalBooks = {
            'id': this.api.generateID(),
            'Title': this.book.Title,
            'Author': this.book.Author,
            'Description': this.book.Description,
            'ReleaseYear': this.book.ReleaseYear,
            'Type': this.book.Type,
            'imageSource': 'https://i.ibb.co/CbDjDGv/iconfinder-book-285636-2.png'

        };

        const addedTitle = initialBooks.find(x => x.Title == this.book.Title);
        const addedAuthor = initialBooks.find(x => x.Author == this.book.Author);

        if (addedTitle && addedAuthor) {
            alert('Failure! - Book already exists in the database');
        } else {

            initialBooks.push(finalBooks);
            localStorage.setItem('Books', JSON.stringify(initialBooks));
            this.router.navigateToRoute("books");

        }

    }

}