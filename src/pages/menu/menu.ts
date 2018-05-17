import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, ViewController, Platform, List } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { Slides } from 'ionic-angular';
import {ItemPage} from '../item/item';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage{

    posts: any;
    sectionsList: string[] = [];
    menuKeys: any;
    sec: any;

    constructor(public platform: Platform,
                public params: NavParams,
                public navCtrl: NavController,
                public viewCtrl: ViewController,
                public modalCtrl: ModalController){

        this.posts = this.params.get('menuJSON');
        console.log(this.posts);

        this.menuKeys = Object.keys(this.posts);

        this.menuKeys.map(key =>{
            console.log(key);
            this.sec = this.posts[key];
            console.log(this.sec);
            this.sectionsList.push(this.sec.section);
            console.log(this.sec.section);
        })
        console.log(this.sectionsList);
    }

    openSection(sectionKey) {
        console.log(sectionKey);
        var data = {sectionJSON: this.params.get('menuJSON'), sectionKey: sectionKey};
        console.log(data)
        // let modal = this.modalCtrl.create(ItemPage, data);
        // modal.present();
        this.navCtrl.push(ItemPage,data);
    }

    dismiss(){
        this.viewCtrl.dismiss();
    }
}

