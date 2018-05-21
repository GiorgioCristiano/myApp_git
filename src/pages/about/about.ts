import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, ViewController, Platform, List } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { Slides } from 'ionic-angular';
import {ItemPage} from '../item/item';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { PopoverController } from 'ionic-angular';
import {PopoverPage} from '../PopoverPage/PopoverPage';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  restaurantKey: void;
  posts: any;
  sectionsList: string[] = [];
  keys: any;
  menuKeys: any;
  sec : any;

  constructor(public platform: Platform,
    public params: NavParams,
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public afDb: AngularFireDatabase,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController){


this.posts = this.params.get('menuJSON');
this.restaurantKey =  this.params.get('restaurantKey');

this.menuKeys = Object.keys(this.posts);

this.menuKeys.map(key =>{
    console.log(key);
    this.sec = this.posts[key];
    console.log(this.sec);
    this.sectionsList.push(this.sec.section);
    console.log(this.sec.section);
    this.posts[key].keys = [];
    Object.keys(this.posts[key].items).map(keyItem =>{
        console.log("aaa", keyItem);
        this.posts[key].keys.push(keyItem);
    });

})


console.log('ooooooo');
}





openSection(sectionNum) {
var data = {sectionJSON: this.params.get('menuJSON')[sectionNum], sectionsList:this.sectionsList, sectionNum: sectionNum};
console.log(data)
let modal = this.modalCtrl.create(ItemPage, data);
modal.present();
}

dismiss(){
this.viewCtrl.dismiss();
}
my(section, ind){
  console.log(ind);
  console.log(section);
}

removeItem(section, item){
  console.log(item);
  console.log(section);
  var ss = '/restaurants/'+this.restaurantKey+'/menu_with_photo/' + section + '/items/' + item;
  this.afDb.object(ss).remove();
  console.log(ss);
  console.log(this);
}
editItem(section, item){
  console.log(item);
  console.log(section);
  var ss = '/restaurants/'+this.restaurantKey+'/menu_with_photo/' + section + '/items/' + item;
  console.log(ss);
  console.log(this);
}

presentPopover(myEvent,key) {
  var data = {sectionKey: key, restaurantKey: this.restaurantKey};
  console.log(data);
  let popover = this.popoverCtrl.create(PopoverPage, data);
  popover.present({
    ev: myEvent
  });
}

}


