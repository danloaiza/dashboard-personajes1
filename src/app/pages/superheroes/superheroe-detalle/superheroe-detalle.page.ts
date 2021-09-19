import { SuperHeroe } from 'src/app/interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-superheroe-detalle',
  templateUrl: './superheroe-detalle.page.html',
  styleUrls: ['./superheroe-detalle.page.scss'],
})
export class SuperheroeDetallePage implements OnInit {

  superHeroe: SuperHeroe;

  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.queryParams.subscribe(params => {
      if(params && params.pSuperheroe) {
        this.superHeroe = JSON.parse(params.pSuperheroe);
      }
    });
   }

  ngOnInit() {
  }

}
