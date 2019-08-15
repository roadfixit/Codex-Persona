import { Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';


interface User {
    id: number;
    name: string;
    password: string;
    confirmPassword: string;
    surName: string;
    email: string;

}


@autoinject
export class register {
 
    routerConfig;
    users: any;
    user: User; 
    
    constructor(private router: Router) {


    }

    activate(){

            this.users = JSON.parse(localStorage.getItem('Users'));
}


    register(){

        const initialUsers  = this.users || [];
        const finalUsers = {
            'id' : "getId()",
            'userName': this.user.name,
            'password' : this.user.password,
            'surName' : this.user.surName,
            'email' : this.user.email

        };

        initialUsers.push(finalUsers);
         localStorage.setItem('Users', JSON.stringify(initialUsers));
         this.router.navigateToRoute("login");

    }

}