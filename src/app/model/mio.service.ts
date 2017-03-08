import { Injectable, EventEmitter } from '@angular/core';
import { Hero } from './hero';


//import { SettingsFields } from './settingsFields';

@Injectable()
export class MioService {
    zchange: EventEmitter<number> = new EventEmitter();
    message: String;

    static isCreating: boolean = false;

    private randomInit: boolean = false;

    private items: any[];
    //public menues: Hero;
    private menues: any;
    public menueIDCount: number = 0;

    public settingItems: any[];



    private selectedCategory: string;



    constructor() { }



    emitNavChangeEvent(number) {
        this.zchange.emit(number);
        console.info("dispatch event ???? " + number);
    }
    getNavChangeEmitter() {
        return this.zchange;
    }


    setMessage(message: string) {
        this.message = message;
    }

    getMessage() {
        return this.message;
    }

    setMenuID(menueIDCount: number) {


        this.menueIDCount++;
        console.info("menueIDCount " + this.menueIDCount);
    }

    getMenuID() {


        //  console.info("!!!!! BEFORE .....  menuid " + this.menueIDCount);
        //  var newMenuID:number = this.menueIDCount++;
        // this.menueIDCount = newMenuID; 
        // console.info("!!!!! menuID???? " + newMenuID + " menuid " + this.menueIDCount);
        return this.menueIDCount;
    }

    setCategory(selectedCategory: string) {

        this.selectedCategory = selectedCategory;
        console.info("##### category set: " + this.selectedCategory);
    }

    getCategory() {
        return this.selectedCategory;
    }

    setSettingItems(items: any[]) {
        this.settingItems = items;
        console.info("setting settingItems ");
        console.info(this.settingItems);
    }

    getSettingItems() {

        console.info("getSettingItems.... " + this.settingItems);

        if (this.settingItems === undefined) {
            console.info("using default settings...");

            let mySettings = [];

            mySettings.push({ "id": 0, "name": "Breakfast", "value": "breakfast", "isChecked": false });
            mySettings.push({ "id": 1, "name": "Lunch", "value": "lunch", "isChecked": false });
            mySettings.push({ "id": 2, "name": "Dinner", "value": "dinner", "isChecked": true });
            mySettings.push({ "id": 3, "name": "Dessert", "value": "dessert", "isChecked": true });
            mySettings.push({ "id": 4, "name": "Beverage", "value": "beverage", "isChecked": true });

            this.settingItems = mySettings;

        }
        console.info(".... returning settings ");
        //console.info(this.settingItems);
        return this.settingItems;
    }


    setItems(items: any[]) {

        console.info("### MODEL: SET MAIN ITEMS after update set random init to true ");
        this.setRandomInit(true);
        this.items = items;
    }

    getItems() {
        console.info("### MODEL: GET MAIN ITEMS... ");
        return this.items;
    }

    setMenuItems(menues: any[]) {
        console.info("##### MODEL setMenuItems");
        console.info(menues);
        this.menues = menues;

        if (this.menueIDCount === 0) {

            this.menueIDCount = this.menues.length;
            console.info("1..INIT :-) ..Model menueIDCount " + this.menueIDCount);

        }




    }

    addMenuItem(menuItem: any[]) {
        console.info("@@@@@@@@@@@ Model add MenuItems this.selectedCategory " + this.selectedCategory);
        //console.info (menuItem);
        this.menues.push(menuItem);

        console.info(this.menues);

        this.emitNavChangeEvent(99);


    }

    deleteMenuItem(idx: number) {
        console.info("@@@@@@@@@@@ Model delte MenuItems this.selectedCategory " + this.selectedCategory);
        console.info("index: " + idx);

        var idxx: number = (idx - 1);

        delete this.menues[idxx];

        console.info(this.menues);
        this.emitNavChangeEvent(99);


    }


    updateMenuItem(idx: number, name: Hero) {
        console.info("@@@@@@@@@@@ Model update MenuItems this.selectedCategory " + this.selectedCategory);
        console.info("index: " + idx);

        var idxx: number = (idx - 1);

        this.menues[idxx].name = name;


        console.info(this.menues);
        this.emitNavChangeEvent(99);


    }

    getMenuItems() {

        console.info("#### MODEL: GET MENU ITEMS...");
        console.info(this.menues);
        return this.menues;
    }
    setRandomInit(value: boolean) {

        this.randomInit = value;
        console.info("~~~~~~~~~~~~~~ RandomInit set to: " + this.randomInit);
    }

    getRandomInit() {

        console.info("~~~~~~~~~~~~~~ Returning randomInit: " + this.randomInit);
        return this.randomInit;
    }
}
