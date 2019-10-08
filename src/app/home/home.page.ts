import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public items:any;
  constructor(public http: HttpClient) {

    this.getData();

  }

  getData(){
    let url = "https://hplussport.com/api/products/";
    let data = this.http.get(url);
    data.subscribe(result => {
      this.items = result;
    });
  }

}
