import { Component } from '@angular/core';

@Component({
  selector: 'app-princing',
  templateUrl: './princing.component.html',
  styleUrls: ['./princing.component.css']
})
export class PrincingComponent {
  esAnual: boolean = true; 

  cambiarTipoPrecio(esAnual: boolean) {
    this.esAnual = esAnual;
  }
}
