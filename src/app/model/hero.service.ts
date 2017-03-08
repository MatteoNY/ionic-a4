
import { Injectable } from '@angular/core';
//mport { Http, URLSearchParams, Response, Headers, RequestOptions, Jsonp } from "@angular/http";
import { Http } from "@angular/http";

//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/map';


//import { Hero } from './hero';



@Injectable()
export class HeroService {

  public API_KEY: string = '';
  public API_URL: string = 'build/model/data.json';
  public params: string;
  public pageSize: number = 50;
  public requestUrl: string;
  public randomInit: boolean;


  constructor(public http: Http) {
    this.params = `?apikey=${this.API_KEY}&page_limit=${this.pageSize}`;
    this.requestUrl = this.API_URL + this.params;

  }

  ciao(value) {
    this.pageSize = value;
    // alert("ciao matteo...." + this.pageSize);

  }

  getCiao() {

    //  alert("ciao return matteo...." + this.pageSize);
    return this.pageSize;

  }

  setRandomInit(value) {

    this.randomInit = value;
    console.info("randomInit set to: " + this.randomInit);
  }

  getRandomInit() {

    console.info("returning randomInit: " + this.randomInit);
    return this.randomInit;
  }

  fetch() {

    //  let self = this;

    console.info("url req.. " + this.requestUrl);
    // return this.http.get('http://localhost:8100/build/model/data.json');

    return this.http.get(this.requestUrl);

  }



}
