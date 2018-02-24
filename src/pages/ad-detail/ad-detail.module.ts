import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { AdDetailPage } from './ad-detail';

@NgModule({
  declarations: [
    AdDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AdDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    AdDetailPage
  ]
})
export class AdDetailPageModule { }
