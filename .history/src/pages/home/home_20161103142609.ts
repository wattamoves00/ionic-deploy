import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Deploy} from '@ionic/cloud-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public deploy: Deploy) {

  }

}
