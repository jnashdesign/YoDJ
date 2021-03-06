import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { UserAccountPage } from './user-account';

@NgModule({
  declarations: [
    UserAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(UserAccountPage),
    TranslateModule.forChild()
  ],
  exports: [
    UserAccountPage
  ]
})
export class UserAccountPageModule { }
