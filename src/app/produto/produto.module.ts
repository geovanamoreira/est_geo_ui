import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ListaprodutosComponent } from './listaprodutos/listaprodutos.component';


@NgModule({
  declarations: [
    ListaprodutosComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
