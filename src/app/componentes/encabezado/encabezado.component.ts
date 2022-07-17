import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {

  // datos
  miPorfolio :any;

  // imagenes
  fondo: string;
  zeta: string;

  constructor(private datosPorfolio:PorfolioService) { 
    this.fondo = '/assets/imagenes/fondo.jpeg'
    this.zeta = 'assets/imagenes/zeta.jpg'
  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      console.log(data)
      this.miPorfolio = data
    });
  }

}
