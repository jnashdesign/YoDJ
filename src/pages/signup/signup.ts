import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string } = {
    name: 'Test Human',
    email: 'test@example.com',
    password: 'test'
  };

  user = {} as User;

  constructor(
    private AFauth: AngularFireAuth,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {
  }

  async doSignup(user: User) {
    try{
      const result = await this.AFauth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
    }
    catch(e){
      console.error(e);
    }
  }
}
