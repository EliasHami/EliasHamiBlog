import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post.model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  post: Post;

  constructor(private postService: PostService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.post = new Post('', new Date(), 0, '');
    const id = this.route.snapshot.params['id'];
    this.postService.getSinglePostFromServer(id).then(
      (post: Post) => {
        this.post = post;
      }
    );
  }

}
