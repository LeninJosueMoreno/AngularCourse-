import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-componente02',
  templateUrl: './componente02.component.html',
  styleUrls: ['./componente02.component.scss']
})
export class Componente02Component implements OnInit {

@Input()variableComponente02 : any 


  constructor() { }


  ngOnInit(): void {
  }

}
