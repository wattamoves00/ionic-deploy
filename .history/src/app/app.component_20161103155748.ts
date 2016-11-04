import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';

import {Deploy} from '@ionic/cloud-angular';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;
 

  constructor(
    platform: Platform,
    public deploy: Deploy) {


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
//this.deploy.channel = 'dev';
});
});
// When snapshotAvailable is true, you can apply the snapshot
});
});
  }
}
