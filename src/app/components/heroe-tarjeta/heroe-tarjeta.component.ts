import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.scss']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() idx: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private router: Router ) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe() {
    this.router.navigate(['/heroe', this.idx]);
    // Otra opcion es invocar a la funcion verHeroe() del componenta padre con un .emit()
    // this.heroeSeleccionado.emit( this.idx );
  }
}
