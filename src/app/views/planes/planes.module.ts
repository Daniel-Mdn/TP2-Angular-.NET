import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanesComponent } from './planes.component';
import { PlanesRoutingModule } from './planes.routing.module';



@NgModule({
  declarations: [PlanesComponent],
  imports: [
    CommonModule,
    PlanesRoutingModule
  ]
})
export class PlanesModule { }
