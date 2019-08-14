import userData from '../static/userData.json';
import bookData from '../static/bookData.json';

let latency = 200;
let id = 0;

function getId(){
  return ++id;
}

let users = userData;
let books = bookData;

export class WebAPI {
  isRequesting = false;
  


  getUsers(){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = users.map(x =>  { return {
          id:x.id,
          userName:x.userName,
          password:x.password,
          surName:x.surName,
          email:x.email
        }});
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }

  getBooks(){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = books.map(x =>  { return {
          id:x.id,
          Title:x.Title,
          Author:x.Author,
          Description:x.Description,
          ReleaseYear:x.ReleaseYear
        }});
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }



}
