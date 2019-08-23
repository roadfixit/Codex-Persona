import { Router } from 'aurelia-router';
import { WebAPI } from '../../web-api';
import { autoinject } from 'aurelia-framework';

interface User {
  id: string;
  name: string;
  password: string;
  confirmPassword: string;
  surName: string;
  email: string;
  imageSource: string;


}



@autoinject
export class Index {
    users;
    books;
    user: User;

    constructor(private router: Router, private api: WebAPI) {


    }

    public message: string = 'Welcome to Codex-Persona!';





      async activate() {
        const users = await this.api.getUsers();
        const books = await this.api.getBooks();
        if (users && books) {
          this.users = users;
          this.books = books;
          if(localStorage.length == 0){
            console.log('Data has been loaded into localstorage')
            this.importUsers(); 
            this.importBooks();
          } else {
            console.log('Data already loaded into localstorage')
          }

        }
      }

    // imports the users from our static JSON into local storage

    importUsers() {

        localStorage.setItem('Users', JSON.stringify(this.users));

    }

    importBooks() {

      localStorage.setItem('Books', JSON.stringify(this.books));

  }

    navigateLogin() {
        this.router.navigateToRoute("login");
    }

    navigateRegister() {
        this.router.navigateToRoute("register");
    }


}