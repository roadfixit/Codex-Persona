import {RouterConfiguration, Router} from 'aurelia-router';
import {PLATFORM} from 'aurelia-framework';



export class App {

  router: Router;

  configureRouter(config: RouterConfiguration, router: Router){

    config.title = 'Codex-Persona';
    config.options.pushState = true;
    config.map([
      { route: ['','index'], moduleId: PLATFORM.moduleName('./home/index'), nav: false, name:'index', title: 'index'},
      { route: 'login',     moduleId: PLATFORM.moduleName('./home/login'), nav: false, name:'login' },
      { route: 'register',  moduleId: PLATFORM.moduleName('./home/register'), name:'register' },  
      { route: 'home',  moduleId: PLATFORM.moduleName('./home/home'), name:'home' },
      { route: 'books',  moduleId: PLATFORM.moduleName('./books/index'), name:'books' },
      { route: 'books-add',  moduleId: PLATFORM.moduleName('./books/add'), name:'books-add' }   

    ]);
 

    this.router = router;
  }

  
}
