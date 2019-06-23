import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit, OnDestroy {
  posts: any[];
  postsSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postsSubscription = this.postService.postSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );

    this.postService.getPostFromServer();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }


}
