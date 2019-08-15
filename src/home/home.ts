import { Router } from 'aurelia-router';
import { WebAPI } from '../web-api';
import { autoinject } from 'aurelia-framework';

@autoinject
export class home {

    constructor(private router: Router, private api: WebAPI) {


    }


    books(){
        this.router.navigateToRoute("books");
    }
}