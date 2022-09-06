import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Modulo01Module } from './modulo01/modulo01.module';
import { Componente02Component } from './componente02.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    Componente02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,Modulo01Module,ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
