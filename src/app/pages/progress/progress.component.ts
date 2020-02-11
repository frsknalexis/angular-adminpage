import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  leyendaAzul: string = 'Progress Azul';

  leyendaVerde: string = 'Progress Verde';

  progreso1: number = 20;

  progreso2: number = 30;

  constructor() { }

  ngOnInit() {
  }

  actualizarProgreso1(event: number) {
    console.log('Evento: ', event);
    this.progreso1 = event;
  }

  actualizarProgreso2(event: number) {
    this.progreso2 = event;
  }

  /*
  cambiarValor(valor: number) {

    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
  }
  */
}
