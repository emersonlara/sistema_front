import { Injectable } from '@angular/core';
import { Equipamento } from '../models/equipamentos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { enviroment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {
 

  baseUrl: String = enviroment.baseUrl;


  constructor(
    private http: HttpClient,
    private snack: MatSnackBar

  ) { }

  findAll(): Observable<Equipamento[]> {
    const url = this.baseUrl + '/equipamentos';
    return this.http.get<Equipamento[]>(url);
  }

  findById(id:any):Observable<Equipamento>{
    const url = this.baseUrl + '/equipamentos/'+id;
    return this.http.get<Equipamento>(url);

  }

  create(equipamento:Equipamento):Observable<Equipamento>{
    const url  = this.baseUrl + "/equipamentos";
    return this.http.post<Equipamento>(url,equipamento);
  }

  update(equipamento:Equipamento):Observable<Equipamento>{
    const url  = this.baseUrl + "/equipamentos/"+equipamento.id;
    return this.http.put<Equipamento>(url,equipamento);
  }
 
  delete(id:any):Observable<void>{
    const url = this.baseUrl + '/equipamentos/'+id;
    return this.http.delete<void>(url);

  }


  message(msg : String ):void {
    this.snack.open(`${msg}`,'OK',{
      horizontalPosition:'end',
      verticalPosition:'top',
      duration:3000    
    })
  }

}
