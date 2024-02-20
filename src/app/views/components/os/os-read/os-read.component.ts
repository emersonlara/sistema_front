import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { OS } from 'src/app/models/os';
import { ClienteService } from 'src/app/servicos/cliente.service';
import { OsService } from 'src/app/servicos/os.service';
import { TecnicoService } from 'src/app/servicos/tecnico.service';


@Component({
  selector: 'app-os-read',
  templateUrl: './os-read.component.html',
  styleUrls: ['./os-read.component.css']
})
export class OsReadComponent implements AfterViewInit {

  lista: OS[] = [];


  displayedColumns: string[] = ['id', 'cliente', 'tecnico','abertura','prioridade','status' ,'action'];
  //displayedColumns: string[] = ['tecnico', 'cliente', 'abertura', 'fechamento', 'prioridade', 'status', 'action'];  
  dataSource = new MatTableDataSource<OS>(this.lista);

  @ViewChild(MatPaginator) paginator!: MatPaginator ;

  constructor(
    private service: OsService,
    private router : Router ,
    private tecnicoService:  TecnicoService,
    private clienteService: ClienteService ){ }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe((resposta) =>  {
      //this.lista = resposta;
      resposta.forEach(x =>{
        if(x.status != "EMCERRADO"){
          this.lista.push(x)
        }
      })


      this.listarTecnico();
      this.listarCliente();
      this.dataSource = new MatTableDataSource<OS>(this.lista);
      this.dataSource.paginator = this.paginator;
    })
  }
   

   


   navigateToCreate():void{
    this.router.navigate(['os/create']);
  }


  /*
    subscribe e garantir que todas as chamadas sejam concluídas antes de prosseguir. 
    Uma maneira de fazer isso é usar o operador forkJoin para agrupar todas as chamadas findById e, 
    em seguida, manipular as respostas no subscribe final. 

     Neste código, requests é um array que contém todas as chamadas findById. 
     O forkJoin é usado para aguardar todas as chamadas serem concluídas e obter as respostas. 
     Em seguida, no subscribe, iteramos sobre as respostas e atualizamos o valor tecnico em cada 
     elemento da lista original.

     Certifique-se de importar o operador forkJoin corretamente para que funcione corretamente.
  */

   listarTecnico(): void {
    const requests = this.lista.map((x) => this.tecnicoService.findById(x.tecnico)); 

    forkJoin(requests).subscribe((respostas) => {
      respostas.forEach((resposta, index) => {
        this.lista[index].tecnico = resposta.nome;
      });
    });
  }

  listarCliente():void{
    const requests = this.lista.map((x) => this.clienteService.findById(x.cliente)); 

   forkJoin(requests).subscribe((respostas) => {
      respostas.forEach((resposta, index) => {
        this.lista[index].cliente = resposta.nome;
      });
    });

  }

  prioridade(x :any){
    if(x == 'BAIXA'){
      return 'baixa'
    } else if ( x == 'MEDIA'){
      return  'media'
    }
    else{
      return 'alta'
    }
  }


}