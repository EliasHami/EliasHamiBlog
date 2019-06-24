import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    const firebaseConfig = {
      apiKey: 'AIzaSyAcTWRFE4tV9wi43C-B0UwDtJyhxq4atRs',
      authDomain: 'blog5g.firebaseapp.com',
      databaseURL: 'https://blog5g.firebaseio.com',
      projectId: 'blog5g',
      storageBucket: '',
      messagingSenderId: '1068744934612',
      appId: '1:1068744934612:web:fd956b78f33c99ce'
    };
    firebase.initializeApp(firebaseConfig);
  }
}
