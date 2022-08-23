import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'categorias'
  },

  {
    path: 'categorias',
    loadChildren: ()=> import('./categoria/categoria.module').then(m => m.CategoriaModule)
  },

  {
    path: 'produtos',
    loadChildren: ()=> import('./produto/produto.module').then(m => m.ProdutoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
