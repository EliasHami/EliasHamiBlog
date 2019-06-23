import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class PostService {

  postSubject = new Subject<any[]>();
  private posts: any[];

  constructor(private httpClient: HttpClient){

  }

  emitPostsSubject() {
    this.postSubject.next(this.posts.slice());
  }

  getPostById(id: number){
    const post = this.posts.find(
      (s) => {
        return s.id === id;
      }
    );
    return post;
  }

  getPostFromServer(){
    this.httpClient
      .get<any[]>('https://blog5g.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          this.posts = response;
          this.emitPostsSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
