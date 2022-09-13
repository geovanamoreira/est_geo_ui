import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { ListacagetoriasComponent } from './listacagetorias/listacagetorias.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    ListacagetoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    MatTableModule
  ]
})
export class CategoriaModule { }
