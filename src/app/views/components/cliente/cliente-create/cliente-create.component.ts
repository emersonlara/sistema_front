import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/servicos/cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent {
  private unsubscribe$: Subject<void> = new Subject<void>();

  cliente : Cliente = {
    id: '',
    nome: '',
    cpf: '',
    telefone:''
    /*       
    endereco: undefined,
    numero: undefined,
    cep: undefined,
    estado: undefined,
    cidade: undefined,
    celular: undefined,
    email: undefined
    */
  }

  nome = new FormControl('',[Validators.minLength(5)])
  cpf  = new FormControl('',[Validators.minLength(11)])
  telefone = new FormControl('',[Validators.minLength(11)])
  

  constructor(
    private router: Router,
    private service: ClienteService
  ) { }


  cancel(): void {
    this.router.navigate(['clientes']);
  }

  /*
  create(): void {
    this.service.create(this.tecnico).subscribe((resposta) => {
      this.router.navigate(['tecnicos']);
      this.service.message('Técnico salvo com sucesso!');
    }, err => {
      /// console.log(err)
      if (err.error.error.match('já cadastrado')) {
        this.service.message(err.error.error);
      } else if (err.error.errors[0].message === 'número do registro de contribuinte individual brasileiro (CPF) inválido'){
       //  console.log(err.error.errors[0].message);
        console.log(err);
      }
    })
  }

*/
/*
create(): void {
  this.service.create(this.tecnico)
    .pipe(
      tap(() => {
        this.router.navigate(['tecnicos']);
        this.service.message('Técnico salvo com sucesso!');
      }),
      catchError((err) => {
        if (err.error.error.match('já cadastrado')) {
          this.service.message(err.error.error);
        } else if (err.error.errors[0].message === 'número do registro de contribuinte individual brasileiro (CPF) inválido'){
          this.service.message("CPF inválido!");
        }
        return throwError(err);
      })
    )
    .subscribe();
}
*/

create(): void {
  this.service.create(this.cliente).subscribe((resposta) => {
    this.router.navigate(['clientes']);
    this.service.message('Cliente salvo com sucesso!');
  }, err => {
    if (err?.error?.error?.match('já cadastrado')) { // Usa a sintaxe opcional de encadeamento de operadores '?' para verificar se 'err', 'error' e 'error.match' são definidos antes de tentar acessá-los
      this.service.message(err.error.error);
    } else if (err?.error?.errors?.[0]?.message === 'número do registro de contribuinte individual brasileiro (CPF) inválido'){ // Usa a sintaxe opcional de encadeamento de operadores '?' para verificar se 'err', 'error', 'errors', [0] e 'message' são definidos antes de tentar acessá-los
      this.service.message("CPF inválido!");
    }
  })
}


errorValidName() {
  if(this.nome.invalid) {
    return 'O nome deve ter entre 5 e 100 caracteres!';
  }
  return false;
}

errorValidCpf() {
  if(this.cpf.invalid) {
    return 'O CPF deve ter entre 11 e 15 caracteres';
  }
  return false;
}

errorValidTelefone() {
  if(this.telefone.invalid) {
    return 'O telefone deve ter entre 11 e 18 caracteres!';
  }
  return false;
}

}


