import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import * as $ from 'jQuery';

@IonicPage()
@Component({
  selector: 'page-request-list',
  templateUrl: 'request-list.html'
})
export class RequestListPage {
  currentItems: Items[];
  items:any;
  venue: string;
  number: any;
  songName: string;
  artistName: string;
  eventName: string;
  userName: string;
  img_url: string;
  requestTotalNum: any;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController) {
      this.venue = localStorage.getItem('venue');
      this.currentItems = JSON.parse(localStorage.getItem('songs'));
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    var $songList = $('#songList'),
        $songListCard = $songList.children('ion-card');

      $songListCard.sort(function(a,b){
        var an = parseInt(a.getAttribute('id')),
            bn = parseInt(b.getAttribute('id'));
        if(an > bn) {
          return -1;
        }
        if(an < bn) {
          return 1;
        }
      });
      $songListCard.detach().appendTo($songList);

      let num = 1;
      $('#songList ion-card .number').each(function(){
        $(this).html(num++);
      });

  }

// requestAgain(){
//   $('.requestAgain').off('click').on('click',function (){
//     let songName          = $(this).data('title'),
//         artistName        = $(this).data('artist'),
//         eventName         = localStorage.getItem('venue'),
//         userName          = localStorage.getItem('userEmail'),
//         img_url           = $(this).data('img_url'),
//         requestTotalNum   = $(this).data('requestTotal');
//
//         alert(`${songName} by ${artistName} has been added`);
//
//     $.ajax({
//         type:'POST',
//         url: `https://us-central1-mydjapp-2b450.cloudfunctions.net/songRequest?songName=${songName}&artistName=${artistName}&image=${img_url}&requestTotal=1&userName=${userName}&eventName=${eventName}`,
//         dataType: 'json',
//         success: function(result) {
//           if(result.status === "success") {
//               // do something with response.message or whatever other data on success
//
//               } else if(result.status === "error") {
//                   // do something with response.message or whatever other data on error
//               }
//             }
//           });
//
//
//     })
// }

  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('SongDetailPage', {
      item: item
    });
  }
  openAccountPage(){
    this.navCtrl.push('UserAccountPage');
  }
}
