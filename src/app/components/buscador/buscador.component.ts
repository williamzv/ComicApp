import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['key'];
      this.heroes = this._heroesService.buscarHeroes(params['key']);
      console.log(this.heroes);
    });
  }

}
