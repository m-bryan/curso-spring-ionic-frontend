import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  login() {
    this.navCtrl.setRoot('CategoriasPage');
  }

  //desabilita menu na pagina de login
  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  
  //habilita menu na pagina de login
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

}
