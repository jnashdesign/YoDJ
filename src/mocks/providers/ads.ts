import { Injectable } from '@angular/core';
import { Ad } from '../../models/ad';

@Injectable()
export class Ads {
  ads: Ad[] = [];

  defaultAd: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };

  constructor() {}

  updateSongListArray(){
     return new Promise((resolve, reject) => {
       let ads = JSON.parse(localStorage.getItem('songs'));
       this.ads = [];
       for (let ad of ads) {
         this.ads.push(new Ad(ad));
       }
       resolve('Songs Added to Array');
     });
   }

  query(params?: any) {
    if (!params) {
      return this.ads;
    }

    return this.ads.filter((ad) => {
      for (let key in params) {
        let field = ad[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return ad;
        } else if (field == params[key]) {
          return ad;
        }
      }
      return null;
    });
  }

  add(ad: Ad) {
    this.ads.push(ad);
  }

  delete(ad: Ad) {
    this.ads.splice(this.ads.indexOf(ad), 1);
  }
}
