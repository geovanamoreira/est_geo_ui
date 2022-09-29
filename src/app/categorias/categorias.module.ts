import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ListacagetoriasComponent } from './listacagetorias/listacagetorias.component';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    ListacagetoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class CategoriasModule { }
