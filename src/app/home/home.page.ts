import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public items:any;

  constructor( public http: HttpClient, private router: Router) {

    this.getData();

  }

  getData(){
    let url = "https://hplussport.com/api/products/";
    let data = this.http.get(url);
    data.subscribe(result => {
      this.items = result;
    });
  }

  abrirDetalles(item) {
    console.log(item.description);
    let nombre = item.name;

    this.router.navigate(['details'], item);

  }


}
