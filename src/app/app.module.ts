import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {ABCAnimals} from './app.component';
import {HomePage} from '../pages/home/home';
import { LetterDetailsPage } from '../pages/letter-details/letter-details';


import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { NativeAudio } from '@ionic-native/native-audio';
import { Market } from '@ionic-native/market';
import { DataShareProvider } from '../providers/data-share/data-share';

@NgModule({
  declarations: [
    ABCAnimals,
    HomePage,
    LetterDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ABCAnimals),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ABCAnimals,
    HomePage,
    LetterDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    Market,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataShareProvider
  ]
})
export class AppModule {
}
