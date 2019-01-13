import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public texto: any;
  public dateOfevent:string= new Date().toISOString();
  fecha () {
    this.texto =this.dateOfevent.substr(0,10);
    console.log("Fecha seleccionada ", this.dateOfevent.substr(0,10));
  }
  constructor(public navCtrl: NavController) {

  }

}
