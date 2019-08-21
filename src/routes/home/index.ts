import { Router } from 'aurelia-router';
import { WebAPI } from '../../web-api';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Index {

    constructor(private router: Router, private api: WebAPI) {


    }


    books(){
        this.router.navigateToRoute("books");
    }

    users(){
        this.router.navigateToRoute("users");
    }
}