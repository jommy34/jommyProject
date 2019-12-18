import { Component } from '@angular/core';
import {AlertController, NavController, Platform, LoadingController} from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import{ finalize } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
interface UserData {
  id: string;
  username: string;
  email: string;
  password: string;
  songOwn: [];
}
export class HomePage {
  url='https://arcane-peak-42559.herokuapp.com/';

  getUserInform(){
    let result:any;
      this.http.get("https://arcane-peak-42559.herokuapp.com/getUser")
        .subscribe((userInform) => {
          // console.log(JSON.stringify(name))
          // var currentUser: { [id: string]: UserData; } = userInform;
          result = userInform;
       }); 
    }

  constructor(private http: HttpClient, private nativeHttp: HTTP, private plt: Platform, private loadingCtrl: LoadingController) {
    // var input=document.getElementById('input').nodeValue;
  }

}
