import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { OS } from 'src/app/models/os';
import { Tecnico } from 'src/app/models/tecnico';
import { ClienteService } from 'src/app/servicos/cliente.service';
import { OsService } from 'src/app/servicos/os.service';
import { TecnicoService } from 'src/app/servicos/tecnico.service';

@Component({
  selector: 'app-os-create',
  templateUrl: './os-create.component.html',
  styleUrls: ['./os-create.component.css']
})
export class OsCreateComponent implements OnInit{


  tecnicos: Tecnico[] = []
  clientes: Cliente[] = []
  os : OS = {
    tecnico : '',
    cliente : '',
    observacoes : '',
    status : '',
    prioridade: '',
    formapagamento: '',
    valorservico : 0
  }
  amountControl = new FormControl();

  constructor(
    private tecnicoService : TecnicoService,
    private clieteService : ClienteService,
    private service: OsService,
    private router : Router
  ){}

  ngOnInit(): void {
      this.listaTecnicos();
      this.listaClientes();
  }

  create():void{
    this.service.create(this.os).subscribe(resposta => {
      this.service.message("Ordem de serviço salva com sucesso!")
      this.router.navigate(['os']);
    })
  }

  cancel():void{
    this.router.navigate(['os']);
  }

  listaTecnicos():void{
    this.tecnicoService.findAll().subscribe(resposta => {
      this.tecnicos = resposta;

    } )
  }

  listaClientes():void{
     this.clieteService.findAll().subscribe(resposta => {
       this.clientes = resposta;
     })
  }

  getCurrencySymbol() {
    const currencyCode = 'BRL';
    const locale = 'pt-BR';

    return getCurrencySymbol(currencyCode, 'wide', locale);
  }

}
