import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


 constructor(public alerCtrl: AlertController) { }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'New Friend!',
      message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
      buttons: ['Ok']
    });
    alert.present()
  }
  Alert() {
    let alert = this.alerCtrl.create({
      title: 'New Friend!',
      message: 'kenneth',
      buttons: ['Ok']
    });
    alert.present()
  }
}

