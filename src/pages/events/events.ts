import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Ad } from '../../models/ad';
import { Ads } from '../../providers/providers';
import * as $ from 'jQuery';

@IonicPage()
@Component({
  selector: 'events-settings',
  templateUrl: 'events.html'
})
export class EventsPage {
  currentAds: Ads[];
  ads: any;
  venue: string;
  page: string = 'main';

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController) {
      this.venue = localStorage.getItem('venue');
      this.currentAds = JSON.parse(localStorage.getItem('ads'));
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
  }

  openAd(ad: Ads) {
    this.navCtrl.push('AdDetailPage', {
      ad: ad
    });
  }

  ngOnChanges() {
    console.log('Ng All Changes');
  }
  openAccountPage(){
    this.navCtrl.push('UserAccountPage');
  }
}
