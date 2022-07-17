import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  // imagenes
  iesmb: string;
  cac: string;
  egg: string;
  tic: string;

  constructor() {
    this.iesmb = 'assets/imagenes/iesmb.jpg'
    this.cac = 'assets/imagenes/codoacodo.png'
    this.egg = 'assets/imagenes/EGG.jpg'
    this.tic = 'assets/imagenes/poloTICmisiones.jpg'
   }

  ngOnInit(): void {
  }

}
