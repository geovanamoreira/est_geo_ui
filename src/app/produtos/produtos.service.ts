import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = '/assets/produtos.json';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Produto[]>(this.API);
  }
}
