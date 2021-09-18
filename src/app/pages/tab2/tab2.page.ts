import { SuperheroesService } from './../../services/superheroes.service';
import { Component, OnInit } from '@angular/core';
import { SuperHeroe } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  superHeroes: SuperHeroe[] = [];

  constructor(private superHeroesService: SuperheroesService) {}
  ngOnInit(): void {
    this.superHeroes = this.superHeroesService.superHeroes;
  }

}
