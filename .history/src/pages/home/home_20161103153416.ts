import { Component } from '@angular/core';
import { TabsPage } from '../pages/tabs/tabs';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
local: Storage;

  constructor(public navCtrl: NavController, public storage: Storage) {

  }
 startApp() {
    this.storage.set('intro', true);
    this.navCtrl.push(TabsPage);
  }
}
