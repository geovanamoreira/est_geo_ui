import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { ListacagetoriasComponent } from './listacagetorias/listacagetorias.component';


@NgModule({
  declarations: [
    ListacagetoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule
  ]
})
export class CategoriaModule { }
