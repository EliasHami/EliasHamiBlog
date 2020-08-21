import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { PostService } from './post.service';
import { Routes, RouterModule } from '@angular/router';
import { SinglePostComponent } from './single-post/single-post.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/post/:id', component: SinglePostComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo : 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FooterComponent,
    SinglePostComponent,
    FourOhFourComponent,
    LandingPageComponent,
    NavComponent,
    HeaderComponent,
    BlogComponent
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
