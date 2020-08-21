import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { firebaseConfig } from './firebase-config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
    firebase.initializeApp(firebaseConfig);
  }


}
