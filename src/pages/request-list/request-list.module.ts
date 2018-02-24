import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { RequestListPage } from './request-list';

@NgModule({
  declarations: [
    RequestListPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestListPage),
    TranslateModule.forChild()
  ],
  exports: [
    RequestListPage
  ]
})
export class ListMasterPageModule { }
