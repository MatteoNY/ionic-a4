import { Component } from '@angular/core';
import { Hero } from './hero';
import { SingletonService } from './../model/singleton.service';


@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero" padding>


<img class="media-object" src="build/img/{{hero.category}}.svg" style="max-width:49px;" title="{{hero.category}}" *ngIf="hero.category != undefined "/>


      <h1>{{hero.name}}</h1>
  <!--    <div><label>ID: </label>{{hero.id}}</div> -->
      <ul>
        <li><label>Name: </label>
        
        <input [(ngModel)]="hero.name" placeholder="name"/>
        </li>
        <!--
         <li>
         <label>Category: </label>
         <input [(ngModel)]="hero.category" placeholder="category" />
          </li>
 -->
<li>

          <label for="heroCategory">Category</label>
          <select id="heroCategory" class="form-control" #t (change)="callType(t.value)" required [(ngModel)]="hero.category">
           
            <option *ngFor="#cat of categories" [value]="cat">{{cat}}</option>
          </select>
        

</li>



      </ul>

  
 <!--
 // <div class="form-group">
 //          <label for="heroCategory">Category</label>
 //          <select id="heroCategory" class="form-control" #t (change)="callType(t.value)" required [(ngModel)]="hero.category">
           
 //            <option *ngFor="#cat of categories" [value]="cat">{{cat}}</option>
 //          </select>
 //        </div>
 -->
<!--
<button (click)="deleteItem($event, hero.name, hero.id)">Delete</button>
<button (click)="saveItem($event, hero.name, hero.id, hero.category, t.value )">SAVE</button>
-->
    </div>
  `,
  inputs: ['hero']
})
export class HeroDetailComponent {
  public hero: Hero;

  public categories = ['breakfast', 'lunch', 'dinner', 'dessert'];
  public category: any;

  constructor() {


    this.category = {
      type: "breakfast",
      name: 'something to eat'
    };

  }



callType(value){

 // debugger;
  console.log("~~~~~~~~ got value.... " + value);
  //this.category.type = value;
}


  deleteItem(event:Event, name:Hero, id:Hero) {

    //console.info(event);

 
  console.info(SingletonService.getInstance().getCategory()) ;

    console.info("delete? " + event, name, id);

    SingletonService.getInstance().deleteMenuItem(id);

    event.preventDefault();
  }

  saveItem(event: Event, name: Hero, id: Hero, category:Hero, value:any) {

    //console.info(event);

    

 
    console.info(SingletonService.getInstance().getCategory());

    console.info("edit/save? " + event, name, id, " ciao " + category, " value???? " + value);

    SingletonService.getInstance().updateMenuItem(id, name);

    event.preventDefault();
  }



}
