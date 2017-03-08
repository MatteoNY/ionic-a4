/*
  class: SettingsPage. 
  author: M.Carbone (c)2016 - FEB
  version: 0.1 beta
*/

import {Component, EventEmitter, Output} from '@angular/core';
import { FormGroup }   from '@angular/forms';
 

import { SettingsFields }    from './settingsFields'; 
 



@Component({
  selector: 'settings-form',
  templateUrl: './settings.html'
  
})
export class SettingsFormComponent {



//	@Output() open: EventEmitter<any> = new EventEmitter();
//	@Output() close: EventEmitter<any> = new EventEmitter();


	model: SettingsFields;

	//model = new SettingsFields(0, 'Lunch', 'lunch', false);


 //	constructor() { }
  
 	//model = new SettingsFields(0, 'Breakfast', 'breakfast', false);
	//  console.log('My hero is called ' + this.model.label);

	submitted = false;
	onSubmit() { 

		console.info("onSubmit I'm here!@@@@ ");

		this.submitted = true; 

	}
	
	// TODO: Remove this when we're done
	//get diagnostic() { return JSON.stringify(this.model); }


//	active = true;

//	newSetting() {
//		this.model = new SettingsFields(0, 'Lunch', 'lunch', false);
///		this.active = false;
	//	setTimeout(() => this.active = true, 0);//
//	}
	//////// NOT SHOWN IN DOCS ////////

	// Reveal in html:
	//   Name via form.controls = {{showFormControls(heroForm)}}
//	showFormControls(form: NgForm) {
//
//		return form && form.controls['name'] &&
//			form.controls['name'].value; 
//	}

  /////////////////////////////

}
