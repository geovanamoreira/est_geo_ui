import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../core/model';

@Component({
  selector: 'app-listacagetorias',
  templateUrl: './listacagetorias.component.html',
  styleUrls: ['./listacagetorias.component.scss']
})
export class ListacagetoriasComponent implements OnInit {

  //LISTA-TABELA DE CATEGORIAS
  categoria: Categoria[] = [
    {id: 1, nomecategorias: 'Frutas'},
    {id: 2, nomecategorias: 'Bebidas Alcoólicas'},
    {id: 3, nomecategorias: 'Produtos de Limpeza'},
    {id: 4, nomecategorias: 'Higiêne Pessoal'},
    {id: 5, nomecategorias: 'Açougue'},
    {id: 2, nomecategorias: 'Bebidas Gaseificadas'}
    ];

  displayedColumns = ['nomecategorias'];
  constructor() { }

  ngOnInit(): void {
  }

}
