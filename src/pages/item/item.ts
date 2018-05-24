import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, NavParams, ViewController, Platform, Content} from 'ionic-angular';
import 'rxjs/add/operator/map';

import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {

    @ViewChild('scroll') scroll:any;
    @ViewChild('sectionInUse') sectionInUse:any;

    allItems: any;
    items: any;
    section: any;
    sections: any;
    sectionKey: any;
    sectionKeys: any;
    sectionJSON: any;
    itemKeys: any;

    actualScrollLeft: any;

    constructor(public platform: Platform,
                public params: NavParams,
                public viewCtrl: ViewController,
                public navCtrl: NavController) {  

        this.sectionKey = this.params.get("sectionKey");
        this.sectionJSON = this.params.get("sectionJSON");
            this.sectionKeys = Object.keys(this.sectionJSON);
            this.allItems = this.sectionJSON[this.sectionKey];
            this.items = this.allItems.items;
            console.log(this.items);
        if(this.items != null){ 
            this.itemKeys = Object.keys(this.items);
            this.section = this.allItems.section;
            // this.items.photoKeys = [];
            // if(this.items.photos != null){
            //     this.items.photoKeys = Object.keys(this.items.photos);
            // }
        }else{
            this.allItems = null;
            this.items = null;
            this.itemKeys = null;
            this.section = null;
        }
        console.log(this.sectionKey);
        console.log(this.allItems);
        console.log(this.items);

    }

    goToOtherSection(sectionKey) {
        var data;
        data = {sectionKey: sectionKey, sectionJSON: this.sectionJSON};
        this.navCtrl.push(ItemPage, data);
    }

    dismiss(){
        this.navCtrl.pop();
    }

    ngAfterViewInit() {
        console.log("After View Init");
        console.log("Scoll element: ", this.scroll);
        console.log("Section in use: ", this.sectionInUse);
    
            this.scroll._scrollContent.nativeElement.scrollLeft = this.sectionInUse.nativeElement.offsetLeft +
                                                                  this.sectionInUse.nativeElement.clientWidth/2 - 
                                                                  this.scroll._scrollContent.nativeElement.clientWidth/2;
    }

}
