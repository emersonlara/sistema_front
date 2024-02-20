import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { enviroment } from 'src/environments/environment';
import { Categoria } from '../models/categoria';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  baseUrl: String = enviroment.baseUrl;


  constructor(
    private http: HttpClient,
    private snack: MatSnackBar

  ) { }

  findAll(): Observable<Categoria[]> {
    const url = this.baseUrl + '/categorias';
    return this.http.get<Categoria[]>(url);
  }

  findById(id: any):Observable<Categoria>{
    const url  = this.baseUrl + "/categorias/"+ id;
    return this.http.get<Categoria>(url);
  }


  create(categoria: Categoria): Observable<Categoria> {
    const url = this.baseUrl + '/categorias';
    return this.http.post<Categoria>(url, categoria);
  }

  update(categoria: Categoria): Observable<Categoria> {
    const url = this.baseUrl + '/categorias/'+categoria.id;
    return this.http.put<Categoria>(url,categoria);
  }

  delete(id:any):Observable<void>{
    const url = this.baseUrl + '/categorias/'+id;
    return this.http.delete<void>(url);

  }

  
  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }




}
