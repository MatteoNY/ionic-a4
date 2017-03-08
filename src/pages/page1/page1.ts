import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { HeroService } from '../../app/model/hero.service';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 implements OnInit  {

  public mioData:Observable<any>;
    selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private mioService:HeroService) {

 // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }

ngOnInit(): void { 

this.mioData = this.mioService.fetch();
 // console.log ("this.mioData ", this.mioData );

}


onSelect(e:Event, selectedItem:any):void {
  console.log ("@onselect... ", selectedItem);
}

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page1, {
      item: item
    });
  }


// -class
}
