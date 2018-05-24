import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import {ItemPage} from '../pages/item/item';
import {MenuPage} from '../pages/menu/menu';
import {PopoverPage} from '../pages/PopoverPage/PopoverPage';
 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


////////// Firebase 
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule, FirebaseAppProvider } from 'angularfire2';
import {FIREBASE_CONFIG} from './firebase.credentials';
import { DataProvider } from '../providers/data/data';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ItemPage,
    MenuPage,
    RestaurantPage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG), 
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ItemPage,
    MenuPage,
    RestaurantPage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    DataProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
