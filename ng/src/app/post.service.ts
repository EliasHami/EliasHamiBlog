import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Post } from './post.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class PostService {

  postSubject = new Subject<Post[]>();
  private posts: Post[];

  constructor(private httpClient: HttpClient) {

  }

  emitPostsSubject() {
    this.postSubject.next(this.posts.slice());
  }

  getSinglePostFromServer(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  getPostFromServer() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPostsSubject();
      });
    // this.httpClient
    //   .get<Post[]>('https://blog5g.firebaseio.com/posts.json')
    //   .subscribe(
    //     (response) => {
    //       this.posts = response;
    //       this.emitPostsSubject();
    //     },
    //     (error) => {
    //       console.log('Erreur ! : ' + error);
    //     }
    //   );
  }
}
