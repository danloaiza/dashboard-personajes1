import { Villano } from './../../interfaces/interfaces';
import { VillanosService } from '../../services/villanos.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-villanos',
  templateUrl: 'villanos.page.html',
  styleUrls: ['villanos.page.scss']
})
export class VillanosPage implements OnInit{

  villanos: Villano[] = [];
  constructor(private villanoService: VillanosService,
              private router: Router) {}

  ngOnInit(): void {
    this.villanos = this.villanoService.villanos;
  }

  detalleVillano( pVillano: Villano ) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        pVillanoDetalle: JSON.stringify(pVillano)
      }
    };

    this.router.navigate(['/tabs/villanos/villano-detalle'], navigationExtras);
  }

}
