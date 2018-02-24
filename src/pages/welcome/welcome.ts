import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { MainPage } from '../pages';
import { AngularFireAuth } from 'angularfire2/auth';
import * as $ from 'jQuery';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  // account: { name: string, email: string, password: string } = {
  //   name: 'testUser',
  //   email: 'test@example.com',
  //   password: 'test'
  // };

  user = {} as User;
  email:string;
  password:string;
  location:string;

  constructor(
    private AFauth: AngularFireAuth,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {
      this.location = 'TRUTH Nightclub';
    //   this.translateService.get('LOGIN_ERROR').subscribe((value) => {
    //     this.loginErrorString = value;
    // })
  }

  // Attempt to login in through our User service
  async doLogin(user: User) {
  try{
    const result = await this.AFauth.auth.signInWithEmailAndPassword(user.email,user.password);

    console.log(result);

    localStorage.setItem('userName', result.displayName);
    localStorage.setItem('userEmail', result.email);
    localStorage.setItem('userPhoto', result.photoURL);
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('location','TRUTH Nightclub');
    localStorage.setItem('username', 'nightOwlTestUser');

    $.ajax({
        type: 'GET',
        url: 'https://mydjapp-2b450.firebaseio.com/events.json',
        dataType: 'json',
        success: function(res) {
          localStorage.setItem('songs',JSON.stringify(res.testEvent2));
          this.currentItems = JSON.stringify(res.testEvent2);
        }
    });

    // Logged in
    let toast = this.toastCtrl.create({
      message: `Logged in as ${result.email}`,
      duration: 3000,
      position: 'top'
    });
    toast.present();

    this.navCtrl.push(MainPage);

  }
  catch(err){
    console.error(err);
    // Unable to log in
    let toast = this.toastCtrl.create({
      message: err,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}

  async doSignup(user: User) {
    try{
      const result = await this.AFauth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);

      localStorage.setItem('userName', result.displayName);
      localStorage.setItem('userEmail', result.email);
      localStorage.setItem('userPhoto', result.photoURL);
      localStorage.setItem('loggedIn', 'true');

      // Signed up
      let toast = this.toastCtrl.create({
        message: 'Account created as TestUser',
        duration: 3000,
        position: 'top'
      });
      toast.present();

      this.navCtrl.push(MainPage);
    }
    catch(err){
      console.error(err);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: err,
        duration: 3000,
        position: 'top'
      });
      toast.present();

    }
  }

  loginClick() {
    $('.loginButton').show();
    $('.welcomeButtons').hide();
    $('.signupLink').show();
    $('.loginLink').hide();
    $('.signupButton').hide();
  }

  signupClick() {
    $('.loginButton').hide();
    $('.welcomeButtons').hide();
    $('.signupLink').hide();
    $('.loginLink').show();
    $('.signupButton').show();
  }

}
