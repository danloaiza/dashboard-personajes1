import { Villano } from './../../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villano-detalle',
  templateUrl: './villano-detalle.page.html',
  styleUrls: ['./villano-detalle.page.scss'],
})
export class VillanoDetallePage implements OnInit {

  villano: Villano;

  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.queryParams.subscribe(params => {
      if(params && params.pVillanoDetalle) {
        this.villano = JSON.parse(params.pVillanoDetalle);
      }
    });
  }

  ngOnInit() {
  }

}
