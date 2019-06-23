import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostService } from './post.service';
import { PostViewComponent } from './post-view/post-view.component';
import { Routes, RouterModule } from '@angular/router';
import { SinglePostComponent } from './single-post/single-post.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'posts/:id', component: SinglePostComponent },
  { path: '', component: PostViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo : 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    FooterComponent,
    PostViewComponent,
    SinglePostComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
