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
    {id: 6, nomecategorias: 'Bebidas Gaseificadas'},
    {id: 7, nomecategorias: 'Sucos'},
    {id: 8, nomecategorias: 'Comidas em Conserva (Lata)'},
    {id: 9, nomecategorias: 'Importados'},
    {id: 7, nomecategorias: 'Temperos'},
    {id: 7, nomecategorias: 'Frios'},
    ];

  displayedColumns = ['nomecategorias'];
  constructor() { }

  ngOnInit(): void {
  }

}
