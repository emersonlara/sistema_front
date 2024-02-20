import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Equipamento } from 'src/app/models/equipamentos';
import { EquipamentoService } from 'src/app/servicos/equipamento.service';

@Component({
  selector: 'app-equipamento-read',
  templateUrl: './equipamento-read.component.html',
  styleUrls: ['./equipamento-read.component.css']
})
export class EquipamentoReadComponent implements  AfterViewInit {

  equipamentos : Equipamento[] = [];

  displayedColumns: string[] = ['id', 'nome','serie','marca','action'];
  dataSource = new MatTableDataSource<Equipamento>(this.equipamentos);

  @ViewChild(MatPaginator) paginator! : MatPaginator;

  constructor(

      private service : EquipamentoService,
      private router : Router
      ){}

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe((resposta  => {
      this.equipamentos = resposta ;
      this.dataSource =   new MatTableDataSource<Equipamento>(this.equipamentos);
      this.dataSource.paginator = this.paginator;
    }))
  }

  navigateToCreate():void{
    this.router.navigate(['equipamentos/create']);
  }

}
