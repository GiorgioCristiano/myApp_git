import { Component } from '@angular/core';

import { NavController, ModalController, NavParams, ViewController, Platform } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import {RestaurantPage} from '../restaurant/restaurant';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any;

  constructor(public navCtrl: NavController, public afDb: AngularFireDatabase, public modalCtrl: ModalController) {
    this.afDb.list('/basic_info').valueChanges().subscribe(
      data => {
          this.posts = data;
          console.log(data);
      },
      err => {
          console.log("Error! :(");
      }
    )

  }

  openRestaurant(restaurantNum) {
    var menu;

    console.log('/restaurants/'.concat(this.posts[restaurantNum].link_menu));
    // this.afDb.list('/restaurants/'.concat(this.posts[restaurantNum].link_menu)).valueChanges().subscribe(
    this.afDb.object('/restaurants/'.concat(this.posts[restaurantNum].link_menu)).snapshotChanges().map(action => {
      const $key = action.payload.key;
      const data = {$key, ...action.payload.val()};
      return data;
    }).subscribe(
      item => {
        console.log(item);
        menu = {restaurantJSON: item};
        console.log(menu)
        let modal = this.modalCtrl.create(RestaurantPage, menu);
        modal.present();
      },
      err => {
        console.log('Error! :(');
      }
    );
  }

}
