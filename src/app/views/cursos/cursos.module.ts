import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosRoutingModule, routingComponents } from './cursos.routing.module';



@NgModule({
  declarations: [routingComponents],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
