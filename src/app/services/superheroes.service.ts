import { Injectable } from '@angular/core';
import { SuperHeroe } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SuperheroesService {

  superHeroes: SuperHeroe[] = [
    {
      nombre: 'Spiderman',
      editorial:'Marvel Comics',
      poderes: 'Fuerza, rapidez y reflejos proporcionales a una araña.',
      srcImagen: 'assets/img/spiderman.jpg'
    },
    {
      nombre:'Batman',
      editorial: 'DC Comics',
      poderes: 'artes marciales, Escapismo, uso de equipamento, dispositivos y armamento de alta tecnología',
      srcImagen: 'assets/img/batman.jpg'
    }
  ];

  constructor() { }


}
