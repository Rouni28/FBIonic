import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public texto: any;
  public mobileDevice : boolean = false;
  public dateOfevent:string= new Date().toISOString();
  fecha () {
    this.texto =this.dateOfevent.substr(0,10);
    console.log("Fecha seleccionada ", this.dateOfevent.substr(0,10));
  }
  constructor(public navCtrl: NavController) {
    this.detectmob();
    //console.log(this.mobileDevice);
  }

  detectmob() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       this.mobileDevice = true;
     }
    else {
      this.mobileDevice = false;
     }
   }

}
