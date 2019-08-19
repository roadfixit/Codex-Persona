import { Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import { ValidationRules, ValidationController } from 'aurelia-validation';
import { WebAPI } from '../web-api';


let attempt = 3;
let array = [{ disabled: true}, {disabled: false}]

interface User {
    id: string;
    name: string;
    password: string;
    confirmPassword: string;
    surName: string;
    email: string;

}

@autoinject
export class login {

    routerConfig;
    user: User = {
        id: '',
        name: '',
        password: '',
        confirmPassword: '',
        surName: '',
        email: ''
    };




    constructor(private router: Router, private controller: ValidationController, private api: WebAPI) {


        ValidationRules.customRule(
            'matchesProperty',
            (value, obj, otherPropertyName) =>
                value === null
                || value === undefined
                || value === ''
                || obj[otherPropertyName] === null
                || obj[otherPropertyName] === undefined
                || obj[otherPropertyName] === ''
                || value === obj[otherPropertyName],
            '${$displayName} must match ${$getDisplayName($config.otherPropertyName)}', otherPropertyName => ({ otherPropertyName })
        );


        ValidationRules

            .ensure('email')
            .required()
            .withMessage("Please enter your email adress")
            .email()
            .withMessage("Your email adress is not valid")

            .ensure('password')
            .required()
            .withMessage("Please enter your password")

            .ensure('confirmPassword')
            .required()
            .withMessage("Please confirm your password")
            .satisfiesRule('matchesProperty', 'password')
            .withMessage("Your passwords do not match!")
            .on(this.user);



    }
    
    attached(){

        this.controller.validate();
    }


    login() {


        const users = JSON.parse(localStorage.getItem('Users'));
        const loginUser = users.find(x => x.email == this.user.email);


        if (attempt !== 0) {

            if (users != null) {
                if (loginUser) {

                    if (this.user.password == loginUser.password) {
                        alert('Success! - you will be redirected towards the homepage')
                        this.router.navigateToRoute("home");
                    } else {
                        alert('Failure! - incorrect password' + '\n' +
                            'Attempts left - ' + attempt + ';');
                        attempt--;
                    }

                } else {
                    alert('Failure! - No user in the DB with this email adress' + '\n' +
                        'Attempts left - ' + attempt + ';');
                    attempt--;
                }

            } else {
                attempt--;
                alert('Login system error! - retry later' + '\n' +
                    'Attempts left - ' + attempt + ';');
            }

        } else {
            alert('Too many login attempts! Login disabled retry later')
            this.canLogin();

        }
    }



    canLogin() {

        if (attempt !== 0) {
            return true;
        } else {
            return false;
        }
    }


}