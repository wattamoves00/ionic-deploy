import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import {Deploy} from '@ionic/cloud-angular';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, public deploy: Deploy) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      this.deploy.check().then((snapshotAvailable: boolean) => {
          if (snapshotAvailable) {
            this.deploy.download().then(() => {
              return this.deploy.extract();
            }).then(() => {
              this.deploy.load();
            });
          }
        });
      Splashscreen.hide();
    });
  }
}
