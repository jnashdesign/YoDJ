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
  location: string;
  number: any;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController) {
      this.location = localStorage.getItem('location');
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

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
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
