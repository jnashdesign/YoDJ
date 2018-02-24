import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Ad } from '../../models/ad';
import { Ads } from '../../providers/providers';
import * as $ from 'jQuery';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'events-settings',
  templateUrl: 'events.html'
})
export class EventsPage {
  currentAds: Ads[];
  ads: any;
  // // Our local settings object
  // options: any;
  location: string;
  // settingsReady = false;
  // form: FormGroup;

  // profileSettings = {
  //   page: 'profile',
  //   pageTitleKey: 'SETTINGS_PAGE_PROFILE'
  // };

  page: string = 'main';
  // pageTitleKey: string = 'SETTINGS_TITLE';
  // pageTitle: string;
  //
  // subSettings: any = EventsPage;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController) {
      this.location = localStorage.getItem('location');
      this.currentAds = JSON.parse(localStorage.getItem('ads'));
  }

  // getAds() {
  //   $.ajax({
  //       type: 'GET',
  //       url: 'https://mydjapp-2b450.firebaseio.com/ads.json',
  //       dataType: 'json',
  //       success: function(res) {
  //         localStorage.setItem('ads',JSON.stringify(res));
  //       }
  //   });
  // }

  // _buildForm() {
  //   let group: any = {
  //     option1: [this.options.option1],
  //     option2: [this.options.option2],
  //     option3: [this.options.option3]
  //   };
  //
  //   switch (this.page) {
  //     case 'main':
  //       break;
  //     case 'profile':
  //       group = {
  //         option4: [this.options.option4]
  //       };
  //       break;
  //   }
  //   this.form = this.formBuilder.group(group);
  //
  //   // Watch the form for changes, and
  //   this.form.valueChanges.subscribe((v) => {
  //     this.settings.merge(this.form.value);
  //   });
  // }

  ionViewDidLoad() {
    // Build an empty form for the template to render
    // this.form = this.formBuilder.group({});
  }

  ionViewWillEnter() {
    // Build an empty form for the template to render
    // this.form = this.formBuilder.group({});
    //
    // this.page = this.navParams.get('page') || this.page;
    // this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;
    //
    // this.translate.get(this.pageTitleKey).subscribe((res) => {
    //   this.pageTitle = res;
    // })

    // this.settings.load().then(() => {
      // this.getAds();
      // this.location = localStorage.getItem('location');
      // this.settingsReady = true;
      // this.options = this.settings.allSettings;

      // this._buildForm();
    // });
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
