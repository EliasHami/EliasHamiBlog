import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-brand">
          <li routerLinkActive="active"><a routerLink="">5G Blog</a></li>
        </div>
        <div class="navbar-collapse">
          <ul class="nav navbar-nav">
          <li routerLinkActive="active"><a routerLink="posts">Trie par defaut</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
