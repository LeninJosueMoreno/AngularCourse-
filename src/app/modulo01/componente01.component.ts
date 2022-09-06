import { Component, Input, OnInit } from '@angular/core';


interface City {
  name: string,
  code: string
}


@Component({
  selector: 'app-componente01',
  templateUrl: './componente01.component.html',
  styleUrls: ['./componente01.component.scss']
})
export class Componente01Component implements OnInit {

@Input() variable2: any= ""
@Input() vaRiableDown: any=null

  variable01="hola holaaaa"

  cities!: City[];

  selectedCity!: City;

  constructor() { this.cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'} ]} 

  ngOnInit(): void {
  }

}
