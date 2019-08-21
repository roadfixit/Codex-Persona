import {inject} from 'aurelia-framework';
import {WebAPI} from '../../web-api';



interface User {

    id: string;
    userName: string;
    password: string;
    surName: string;
    email: string;
    imageSource: string;

}

@inject(WebAPI)
export class detail {
    routeConfig;
    user: User;
    originalUser: User;
  
    constructor(private api: WebAPI) { }
  
    activate(params, routeConfig) {
  
      this.routeConfig = routeConfig;
  
      return this.api.getUserDetails(params.id).then(user => {
        this.user = <User>user;
        this.routeConfig.navModel.setTitle(this.user.userName);
        this.originalUser = JSON.parse(JSON.stringify(this.user));
      });
    }
  
  
    save() {};


  }



