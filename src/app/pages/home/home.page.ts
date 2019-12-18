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
export class HomePage {
  url='http://127.0.0.1:5000/test';

  goof=true;
  getData(){
      this.http.get(this.url)
      .subscribe((cat) => {
        console.log(JSON.stringify(cat))
     }); 
  }

  // checkOwnership(input){
  //   this.http.post("http://127.0.0.1:5000/checkOwnership", JSON.stringify(input))
  //     .subscribe((name) => {
  //       console.log(JSON.stringify(name))
  //    }); 
  // }
  getUserInform(){
      this.http.get("http://127.0.0.1:5000/getUserTest")
        .subscribe((name) => {
          console.log(JSON.stringify(name))
       }); 
    }

  constructor(private http: HttpClient, private nativeHttp: HTTP, private plt: Platform, private loadingCtrl: LoadingController) {
    // var input=document.getElementById('input').nodeValue;
  }

}
