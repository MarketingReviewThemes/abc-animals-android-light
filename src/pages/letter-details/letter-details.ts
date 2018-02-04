import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

import {DataShareProvider} from '../../providers/data-share/data-share';


/**
 * Generated class for the LetterDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-letter-details',
    templateUrl: 'letter-details.html',
})
export class LetterDetailsPage {

    constructor(public navCtrl: NavController, public dataShare: DataShareProvider, public platform: Platform) {
    }

    ionViewDidLoad() {
        this.dataShare.unloadAllLetters();
    }

    gotoBack() {
        this.navCtrl.pop();
        this.dataShare.unloadAllLetters();
    }

    playAudio() {
        this.dataShare.playLetterAudio();
    }


    gotoPrev() {
        this.dataShare.unloadAllLetters();

        for(let i = 0; i <= this.dataShare.abcSet.length; i++) {

            if(this.dataShare.currentLetter.id == this.dataShare.abcSet[i].id) {
                
                if(this.dataShare.currentLetter.id == "a") i = this.dataShare.abcSet.length;

                this.dataShare.currentLetter.id = this.dataShare.abcSet[i - 1].id;
                this.dataShare.currentLetter.name = this.dataShare.abcSet[i - 1].name;
                this.playAudio();
                break;
            }

        }
    }


    gotoNext() {
        this.dataShare.unloadAllLetters();

        for(let i = 0; i <= this.dataShare.abcSet.length; i++) {

            if(this.dataShare.currentLetter.id == this.dataShare.abcSet[i].id) {

                //If last letter
                if(this.dataShare.currentLetter.id == "z") i = -1;

                this.dataShare.currentLetter.id = this.dataShare.abcSet[i + 1].id;
                this.dataShare.currentLetter.name = this.dataShare.abcSet[i + 1].name;
                this.playAudio();
                break;
            }
        }
    }

}