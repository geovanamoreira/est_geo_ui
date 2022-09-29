import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../../core/model';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-listacagetorias',
  templateUrl: './listacagetorias.component.html',
  styleUrls: ['./listacagetorias.component.scss']
})
export class ListacagetoriasComponent implements OnInit {

  //LISTA-TABELA DE CATEGORIAS
  categorias: Observable<Categoria[]>;

  displayedColumns = ['id', 'nomecategorias'];

  constructor(private categoriasService: CategoriasService) {
    this.categorias = this.categoriasService.list();
   }

  ngOnInit(): void {
  }

}
