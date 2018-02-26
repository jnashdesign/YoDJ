import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers/providers';
import * as $ from 'jQuery';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];
  venue: string;
  searchedSongs: any = [];
  searchBar: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public items: Items) {
        this.venue = localStorage.getItem('venue');
        this.currentItems = JSON.parse(localStorage.getItem('songs'));
    }

  setLocation(){
    localStorage.setItem('venue',this.venue);
  }
  getItems() {
    let val = this.searchBar;
    let api_key  =  'c0ecfd45992caa2309d902c828f38280';
    let limit    =  '20';

    if (val == undefined) {
      $('.searchResults').html('Please enter a search term');
    }else{

  $.ajax({
      type:'GET',
      url: `https://ws.audioscrobbler.com/2.0?method=track.search&track=${val}&api_key=${api_key}&format=json&limit=${limit}`,
      dataType: 'json',
      success: function(output) {
        // alert(JSON.stringify(output.results.trackmatches.track));
        $('.searchResults').html('');
        let searchedSongs = output.results.trackmatches.track;
        console.log(JSON.stringify(searchedSongs));

        $.each(searchedSongs, function(index, value) {
            let trackName   = value.name,
                artistName  = value.artist,
                imagePath   = value.image[3]['#text'],
                image       = '<img src="' + imagePath + '"/>';

          if(!imagePath){
            image = '<img src="http://jnashdev.com/myDJApp/img/noImage.png" />'
          }

        $('.searchResults').append(
          `<button ion-item (click)="openItem(item)">
            <ion-avatar item-start><img src="${imagePath}" /></ion-avatar>
            <h2>${trackName}</h2>
            <p>${artistName}</p>
          </button>`);

          $('.searchResults button').off('click').on('click',function (){
            let songName    = $('h2', this).text(),
                artistName  = $('p', this).text(),
                eventName   = localStorage.getItem('venue'),
                userName    = localStorage.getItem('userEmail'),
                img_url     = $(this).find("img").attr("src");

                alert(`${songName} by ${artistName} has been added`);

            $.ajax({
                type:'POST',
                url: `https://us-central1-mydjapp-2b450.cloudfunctions.net/songRequest?songName=${songName}&artistName=${artistName}&image=${img_url}&requestTotal=1&userName=${userName}&eventName=${eventName}`,
                dataType: 'json',
                success: function(result) {
                  if(result.status === "success") {
                      // do something with response.message or whatever other data on success

                      } else if(result.status === "error") {
                          // do something with response.message or whatever other data on error
                      }
                    }
                  });


            })
          })
        }
      });
    }
  }

  // openItem(song: Song) {
  //   this.navCtrl.push('SongDetailPage', {
  //     song: song
  //   });
  // }
  openAccountPage(){
    this.navCtrl.push('UserAccountPage');
  }
}
