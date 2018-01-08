import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LetterDetailsPage } from '../../pages/letter-details/letter-details';
import { DataShareProvider } from '../../providers/data-share/data-share';


import set = Reflect.set;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public showLettersSet : boolean = false;


  constructor(private navCtrl: NavController,
              private dataShare: DataShareProvider) { }

  ionViewDidLoad() {
    setTimeout(() => {
      this.showLettersSet = true;
    }, 1000);
  }


  setCurrentLetter(event) {

    if (event.target.alt) {
      this.dataShare.currentLetter.id = event.target.alt;
      this.dataShare.currentLetter.name = event.target.title;
      this.dataShare.playLetterAudio();
    }
  }

  gotoLetterDetailsPage() {
    this.navCtrl.push(LetterDetailsPage);
  }

}
