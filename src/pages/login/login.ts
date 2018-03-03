import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import * as $ from 'jQuery';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };

  user = {} as User;

  // Our translated text strings
  private loginErrorString: string;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {
      this.translateService.get('LOGIN_ERROR').subscribe((value) => {
        this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin() {
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      localStorage.setItem('location','TRUTH');
      localStorage.setItem('username', 'nightOwlTestUser');
      toast.present();

    $.ajax({
    type: 'GET',
    url: 'https://mydjapp-2b450.firebaseio.com/events.json',
    dataType: 'json',
    success: function(gotInfo) {

      $('#songList').empty();

        var eventInfo 			= 	gotInfo.nightOwlEvent.songList,
            songArray       =   [],
                    i       =   1;

            $.each(eventInfo, function(index, value) {
              var songName        = 	value.title,
                  songArtist      =   value.artist,
                  songImg         =   value.img_url,
                  songRequestor   =   value.user,
                  requestTotal    =   parseInt(value.requestTotal),
                  number          =   i++;

              songArray.push(value);

              });

              localStorage.setItem('Login-songs',JSON.stringify(songArray));
          }
      });



  }
}
