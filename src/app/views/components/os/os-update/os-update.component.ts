import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { OS } from 'src/app/models/os';
import { Tecnico } from 'src/app/models/tecnico';
import { ClienteService } from 'src/app/servicos/cliente.service';
import { OsService } from 'src/app/servicos/os.service';
import { TecnicoService } from 'src/app/servicos/tecnico.service';

@Component({
  selector: 'app-os-update',
  templateUrl: './os-update.component.html',
  styleUrls: ['./os-update.component.css']
})
export class OsUpdateComponent implements OnInit{


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
    private router : Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.os.id  = this.route.snapshot.paramMap.get('id');
    this.findbyid();
    this.listaTecnicos();
    this.listaClientes();
  }

  findbyid():void{
      this.service.findById(this.os.id).subscribe(resposta => {
      this.os = resposta;
      this.converteDados();
    })
  }

  

  update():void{
    this.service.update(this.os).subscribe( resposta => {
      this.service.message("Ordem de serviço alterada com sucesso!");
      this.os = resposta;
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

 converteDados():void{
    if(this.os.status =="ABERTO"){
      this.os.status = 0;
    }else if (this.os.status == "ANDAMENTO"){
      this.os.status =1;
    } else {
       this.os.status =2
    }

    if(this.os.prioridade == "BAIXA") {
      this.os.prioridade = 0;
    }else if (this.os.prioridade == "MEDIA"){
      this.os.prioridade = 1;
    } else {
      this.os.prioridade =2;
   }

   if(this.os.formapagamento == "A VISTA") {
     this.os.formapagamento = 0;
   } else if( this.os.formapagamento == "CARTEIRA") {
     this.os.formapagamento = 1;
   } else if( this.os.formapagamento ==  "CARTÃO DE DÉBITO") {
    this.os.formapagamento = 2;
   } else if( this.os.formapagamento ==  "CARTÃO DE CRÉDITO"){
    this.os.formapagamento = 3;
   } else if( this.os.formapagamento ==  "BOLETO"){
    this.os.formapagamento =  4;
   } else if( this.os.formapagamento ==   "PIX"){
    this.os.formapagamento =  5;
   } else if( this.os.formapagamento ==   "CORTESIA"){
    this.os.formapagamento =  6;
   } else if( this.os.formapagamento ==   "GARANTIA"){
    this.os.formapagamento = 7
   }
 }

}
