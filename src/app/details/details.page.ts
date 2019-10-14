import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public item = {
            name:"",
            description:"",
            image:"",
            id:""
          }


  constructor(private router: Router) {

    this.item.name = this.router.getCurrentNavigation().extras.state.name;
    this.item.description = this.router.getCurrentNavigation().extras.state.description;
    this.item.image = this.router.getCurrentNavigation().extras.state.image;
    this.item.id = this.router.getCurrentNavigation().extras.state.id;


   }

   abrirDetalles(item) {
    console.log(item.description);

    this.router.navigate(['compra'], { state: { 
    name: item.name,
    description: item.description,
    image: item.image,
    id: item.id, }});

  }

  ngOnInit() {

  

  }

}
