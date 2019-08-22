import {inject, autoinject} from 'aurelia-framework';
import {WebAPI} from '../../web-api';
import { Router } from 'aurelia-router';



interface User {

    id: string;
    userName: string;
    password: string;
    surName: string;
    email: string;
    role: string;
    imageSource: string;

}

@autoinject
export class detail {
    routeConfig;
    users: any;
    user: User = {

      id: '',
      userName: '',
      password: '',
      surName: '',
      email: '',
      role: '',
      imageSource: ''
    };
    originalUser: User;
  
    constructor(private router: Router, private api: WebAPI) { }
  
    activate(params, routeConfig) {
  
      this.routeConfig = routeConfig;
  
      return this.api.getUserDetails(params.id).then(user => {
        this.user = <User>user;
        this.routeConfig.navModel.setTitle(this.user.userName);
        this.originalUser = JSON.parse(JSON.stringify(this.user));
        this.users = JSON.parse(localStorage.getItem('Users'));
      });
    }
  
  
    save() {
      let saved = this.users.findIndex(x => x.id == this.user.id);
      this.users.splice(saved, 1, this.user)
      localStorage.setItem('Users', JSON.stringify(this.users));
  
      alert('Success! - you will be redirected towards the user list')
      this.router.navigateToRoute("users");


    };


  }



