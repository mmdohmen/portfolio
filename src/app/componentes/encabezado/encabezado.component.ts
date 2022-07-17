import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {

  // imagenes
  fondo: string;
  zeta: string;

  constructor() { 
    this.fondo = '/assets/imagenes/fondo.jpeg'
    this.zeta = 'assets/imagenes/zeta.jpg'
  }

  ngOnInit(): void {
  }

}
