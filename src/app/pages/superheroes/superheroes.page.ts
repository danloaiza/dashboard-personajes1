import { SuperheroesService } from '../../services/superheroes.service';
import { Component, OnInit } from '@angular/core';
import { SuperHeroe } from 'src/app/interfaces/interfaces';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-superheroes',
  templateUrl: 'superheroes.page.html',
  styleUrls: ['superheroes.page.scss']
})
export class SuperheroesPage implements OnInit {

  superHeroes: SuperHeroe[] = [];

  constructor(private superHeroesService: SuperheroesService,
              private router: Router) {}
  ngOnInit(): void {
    this.superHeroes = this.superHeroesService.superHeroes;
  }

  detalleSuperheroe( pSuperheroe: SuperHeroe ) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        pSuperheroe: JSON.stringify(pSuperheroe)
      }
    };

    this.router.navigate(['/tabs/superheroes/superheroe-detalle'], navigationExtras);
  }

}
