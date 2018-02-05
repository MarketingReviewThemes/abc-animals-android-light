import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {LetterDetailsPage} from '../pages/letter-details/letter-details';
import { Market } from '@ionic-native/market';


@Component({
    templateUrl: 'app.html'
})
export class ABCAnimals {
    @ViewChild(Nav) nav: Nav;
    leftHandedToggle: boolean = false;
    interface: boolean = false;

    rootPage: any = HomePage;

    pages: Array<{title: string, component: any}>;

    constructor(public platform: Platform,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                public market: Market) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Home', component: HomePage}
        ];

    }

    goToFullVersion() {
        this.market.open('tretana.games');
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    toggleInterface() {
        if(this.leftHandedToggle) {

        }
    }

}
