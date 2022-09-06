import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-componente02',
  templateUrl: './componente02.component.html',
  styleUrls: ['./componente02.component.scss']
})

export class Componente02Component implements OnInit {

  @Input() variableComponente02: any

  @Output() variableOutput = new EventEmitter <any> ();

  constructor() { }


  ngOnInit(): void {
  }

enviarPadre() {
  this.variableOutput.emit("esto envio desde padre")
}
}
