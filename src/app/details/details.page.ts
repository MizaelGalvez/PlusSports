import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  @Input() item:any;

  constructor(private router: Router) {

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.item = JSON.parse(params.special);
      }
   }

  ngOnInit() {
  }

}
