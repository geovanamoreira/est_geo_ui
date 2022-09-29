import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListacagetoriasComponent } from './listacagetorias/listacagetorias.component';

const routes: Routes = [
  {
    path: '', component: ListacagetoriasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
