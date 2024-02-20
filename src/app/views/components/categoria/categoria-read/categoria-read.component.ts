import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/servicos/categoria.service';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})

export class CategoriaReadComponent  implements  AfterViewInit {

  categorias : Categoria[] = [];

  displayedColumns: string[] = ['id', 'descricao','action'];
  dataSource = new MatTableDataSource<Categoria>(this.categorias);

  @ViewChild(MatPaginator) paginator! : MatPaginator;

  constructor(

      private service : CategoriaService,
      private router : Router
      ){}

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe((resposta  => {
      this.categorias = resposta ;
      this.dataSource =   new MatTableDataSource<Categoria>(this.categorias);
      this.dataSource.paginator = this.paginator;
    }))
  }

  navigateToCreate():void{
    this.router.navigate(['categorias/create']);
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
