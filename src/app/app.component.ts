import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pro_angular' 
  mensajeHijo = ""

  lista = [
    {name: 'abc', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'} ];


    recibeHijo(mensaje: any) { 
      console.log("mensaje",mensaje)
      this.mensajeHijo = mensaje
    }
}


