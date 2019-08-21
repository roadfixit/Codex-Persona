import { Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import { ValidationRules, ValidationController } from 'aurelia-validation';
import { WebAPI } from '../../web-api';


let attempt = 3;

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
export class register {

    routerConfig;
    users: any;
    user: User = {

        id: '',
        name: '',
        password: '',
        confirmPassword: '',
        surName: '',
        email: '',
        imageSource: ''
    };

    constructor(private router: Router, private controller: ValidationController, private api: WebAPI) {


        ValidationRules

            .ensure('name')
            .required()
            .withMessage("Please enter an username")


            .ensure('password')
            .required()
            .withMessage("Please enter a password")

            .ensure('surName')
            .required()
            .withMessage("Please enter a surname")

            .ensure('email')
            .required()
            .withMessage("Please enter an email adress")
            .email()
            .withMessage("Your email adress is not valid")

            .on(this.user);

    }

    activate() {

        this.users = JSON.parse(localStorage.getItem('Users'));
    }

    attached(){

        this.controller.validate();
    }

    generateID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }


    register() {

        const initialUsers = this.users || [];
        const finalUsers = {
            'id': this.api.generateID(),
            'userName': this.user.name,
            'password': this.user.password,
            'surName': this.user.surName,
            'email': this.user.email,
            'imageSource': 'https://i.ibb.co/gJ2y0ZW/user.png'

        };
        const registeredEmail = initialUsers.find(x => x.email == this.user.email);

        if (attempt !== 0) {

            if (registeredEmail) {

                alert('Failure! - Email adress already exists in the DB' + '\n' +
                    'Attempts left - ' + attempt + ';');
                attempt--;


            } else {
                initialUsers.push(finalUsers);
                localStorage.setItem('Users', JSON.stringify(initialUsers));
                alert('Success! - you will be redirected towards the login page')
                this.router.navigateToRoute("login");

            }


        } else {
            alert('Too many registration attempts! Registration disabled retry later')

        }
    }

}