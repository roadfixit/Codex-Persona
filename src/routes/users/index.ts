import { Router } from 'aurelia-router';
import { autoinject, observable } from 'aurelia-framework';

interface User {

    id: string;
    userName: string;
    password: string;
    surName: string;
    email: string;
    roleId: string;
    imageSource: string;
  
  }


@autoinject
export class index {
@observable searchValue;
users: User[]=[];
usersCached: User[]=[]; 
defaultValue;
autocompletes;


constructor(private router: Router){

    this.users = JSON.parse(localStorage.getItem('Users'));
    this.usersCached = this.users;
    this.defaultValue = model => model.Title;
    this.autocompletes = [];

}

// add() {
//     this.router.navigateToRoute("users-add");
//   }

searchValueChanged(newval, oldval) {
    const result = this.users;
    if (this.searchValue) {
      this.executeSearch();
      this.autocompletes = result.filter(x => x.userName.includes(newval));

    } else {

      this.autocompletes = [];
      this.users = [];
      this.users = JSON.parse(localStorage.getItem('Users'));
    }
}


    executeSearch() {

        if (this.searchValue) {
    
          const sResults = this.usersCached.filter(x => x.userName.includes(this.searchValue));
          if (sResults) {
            this.users = sResults;
    
           
    
          } else {
            this.users = [];
          }
    
    
    
        } else {
          this.users = [];
          this.users = JSON.parse(localStorage.getItem('Users'));
        }
      }

      // work in progress
      add(){

      }

  }



