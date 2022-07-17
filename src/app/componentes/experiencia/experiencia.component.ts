import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {

  // imagenes
  ems: string;

  constructor() { 
    this.ems = 'assets/imagenes/EMS.png'
  }

  ngOnInit(): void {
  }

}
