import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
  posts: any[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.posts;
  }

}
