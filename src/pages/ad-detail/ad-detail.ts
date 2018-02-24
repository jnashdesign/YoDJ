import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Ads } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-ad-detail',
  templateUrl: 'ad-detail.html'
})
export class AdDetailPage {
  ad: any;

  constructor(
    public navCtrl: NavController,
    navParams: NavParams,
    ads: Ads) {
    this.ad = navParams.get('ad');
  }

}
