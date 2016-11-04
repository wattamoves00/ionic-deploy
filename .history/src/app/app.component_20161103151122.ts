import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import {Deploy} from '@ionic/cloud-angular';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
    localStorage.setItem('step','1');
    this.deploy.check().then((snapshotAvailable: boolean) => {
    localStorage.setItem('snap','2');
    this.deploy.download().then(() => {
    localStorage.setItem('snap','3');
    return this.deploy.extract().then(() =>{
    localStorage.setItem('snap','4');
    this.deploy.load();
    localStorage.setItem('snap','5');

    });
    });
// When snapshotAvailable is true, you can apply the snapshot
    });
    });
//this.deploy.channel = 'dev';
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
