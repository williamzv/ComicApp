import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor( private router: Router ) { }

  buscarHeroe( termino: string ) {
    // console.log('Texto a buscar: ', termino);
    this.router.navigate( ['/buscar', termino] );
  }
}
