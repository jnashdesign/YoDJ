import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-song-detail',
  templateUrl: 'song-detail.html'
})
export class SongDetailPage {
  item: any;

  constructor(
    public navCtrl: NavController,
    navParams: NavParams,
    items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }

}
