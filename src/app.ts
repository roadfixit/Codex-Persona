import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-framework';



export class App {

  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {

    config.title = 'Codex-Persona';
    config.options.pushState = true;
    config.map([
      { route: ['', 'landing'], moduleId: PLATFORM.moduleName('./routes/landing/index'), nav: false, name: 'landing', title: 'landing' },
      { route: 'landing/login', moduleId: PLATFORM.moduleName('./routes/landing/login'), nav: false, name: 'login' },
      { route: 'landing/register', moduleId: PLATFORM.moduleName('./routes/landing/register'), name: 'register' },
      { route: 'home', moduleId: PLATFORM.moduleName('./routes/home/index'), name: 'home' },
      { route: 'books', moduleId: PLATFORM.moduleName('./routes/books/index'), name: 'books' },
      { route: 'books/add', moduleId: PLATFORM.moduleName('./routes/books/add'), name: 'books-add' },
      { route: 'books/detail/:id', moduleId: PLATFORM.moduleName('./routes/books/detail'), name: 'books-detail' }

    ]);


    this.router = router;
  }


}
