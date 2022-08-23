import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaprodutosComponent } from './listaprodutos/listaprodutos.component';

const routes: Routes = [
  {
    path: '', component: ListaprodutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
