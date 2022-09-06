import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import { Componente01Component } from './componente01.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Button, ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [Componente01Component],
  imports: [
    CommonModule,DropdownModule,FormsModule,ReactiveFormsModule,ButtonModule
  ],
  exports: [
    CommonModule,DropdownModule,FormsModule,ReactiveFormsModule,Componente01Component
  ]

})
export class Modulo01Module { }


