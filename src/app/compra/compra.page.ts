import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {


 public item = {
            name:"",
            description:"",
            image:"",
            id:""
          }




constructor(private router: Router, public alertController: AlertController) { 
 this.item.name = this.router.getCurrentNavigation().extras.state.name;
    this.item.description = this.router.getCurrentNavigation().extras.state.description;
    this.item.image = this.router.getCurrentNavigation().extras.state.image;
    this.item.id = this.router.getCurrentNavigation().extras.state.id;


  }


async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Pago REALIZADO',
      subHeader: 'Felicidades',
      message: 'compra exitosa de tu producto',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {

  }

}
