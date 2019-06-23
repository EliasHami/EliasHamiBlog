import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  title: string;
  content: string;
  createdAt: Date;

  constructor(private postService: PostService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.title = this.postService.getPostById(+id).title;
    this.content = this.postService.getPostById(+id).content;
    this.createdAt = this.postService.getPostById(+id).created_at;
  }

}
