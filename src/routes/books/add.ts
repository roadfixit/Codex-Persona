import { Router } from 'aurelia-router';
import { autoinject } from "aurelia-framework";
import { ValidationRules, ValidationController } from 'aurelia-validation'
import { WebAPI } from '../../web-api';


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
export class add {
    routerConfig;
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

    attached(){

        this.controller.validate();
    }

    submit() {

        const initialBooks = this.books || [];
        const finalBooks = {
            'id': this.api.generateID(),
            'title': this.book.title,
            'author': this.book.author,
            'description': this.book.description,
            'releaseYear': this.book.releaseYear,
            'type': this.book.type,
            'imageSource': 'https://i.ibb.co/CbDjDGv/iconfinder-book-285636-2.png'

        };

        const addedTitle = initialBooks.find(x => x.title == this.book.title);
        const addedAuthor = initialBooks.find(x => x.author == this.book.author);

        if (addedTitle && addedAuthor) {
            alert('Failure! - Book already exists in the database');
        } else {

            initialBooks.push(finalBooks);
            localStorage.setItem('Books', JSON.stringify(initialBooks));
            this.router.navigateToRoute("books");

        }

    }

}