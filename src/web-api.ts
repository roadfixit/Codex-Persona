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
          email:x.email,
          imageSource: x.imageSource
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
          title:x.title,
          author:x.author,
          description:x.description,
          releaseYear:x.releaseYear,
          type: x.type,
          imageSource: x.imageSource
        }});
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }

  getBookDetails(id){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let found = books.filter(x => x.id == id)[0];
        resolve(JSON.parse(JSON.stringify(found)));
        this.isRequesting = false;
      }, latency);
    });
  }

  getUserDetails(id){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let found = users.filter(x => x.id == id)[0];
        resolve(JSON.parse(JSON.stringify(found)));
        this.isRequesting = false;
      }, latency);
    });
  }

generateID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }





}
