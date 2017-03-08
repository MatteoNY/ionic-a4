/*
  class: SettingsPage. 
  author: M.Carbone (c)2016 - FEB
  version: 0.1 beta
*/
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { MioService } from '../../app/model/mio.service';


import { SettingsFields } from './settingsFields';
//import { ListMenuPage } from './list-menu/list-menu';


@Component({
  selector: 'settings-page',
  templateUrl: './settings.html'

})
export class SettingsPage {

  public selectedCategory: string;
  public submitted: boolean = false;
  public mySettings: any[];
  private nav;

  constructor(public navCtrl: NavController, public navParams: NavParams, private mService: MioService) {
    this.nav = navCtrl;

    this.navParams = navParams;

    // selectedCategory = SingletonService.getInstance().getCategory();  
    // console.info(selectedCategory);

    this.mySettings = [];
    this.mySettings = mService.getSettingItems();
    console.info(this.mySettings);

  }


  onSubmit() {
    console.info("OK click!!!");
    this.submitted = true;
    this.mService.setSettingItems(this.mySettings);

    // ??? later! this.nav.setRoot(ListMenuPage);
    //this.rootPage = ListMenuPage;
    //this.nav.push(ListMenuPage);
    //this.navParams.get('listdetails').goback(this);
    this.nav.pop();

  }


}
