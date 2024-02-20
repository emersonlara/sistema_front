import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/servicos/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  creds : Credenciais = {
    email : "",
    senha : "" 
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(
            private toast: ToastrService,
            private service: AuthService,
            private router: Router){ /* TODO document why this constructor is empty */ }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  logaroriginal():void{
   this.toast.error('Usuário e/ou senha inválida!','Login');
    this.creds.senha = '';   
    this.router.navigate(['home'])
  }
/*
logar(){
  this.service.successfulLogin('123'); 
  this.router.navigate(['home']);

}
*/

  
  logar() {
    this.service.authenticate(this.creds).subscribe(
      (resposta) => {
        const authorizationHeader = resposta.headers.get('Authorization');
        if (authorizationHeader) {
          const token = authorizationHeader.substring(7);
          this.service.successfulLogin(token);
          this.router.navigate(['']);
        } else {
         this.toast.error('Erro ao obter o token de autenticação');
         // this.router.navigate(['home']);    
        }
      },
      (error) => {
        this.toast.error('Usuário e/ou senha inválidos');
       // this.router.navigate(['home']);
      }
    );
  }


  /*
  logar2() {
    this.service.authenticate(this.creds).subscribe(resposta => {
    this.service.successfulLogin(resposta.headers.get('Authorization').substring(7));
    this.router.navigate([''])
    }, () => {
      this.toast.error('Usuário e/ou senha inválidos');
    })
  }
*/
  validaCampos(): boolean{
   return this.email.valid && this.senha.valid
  }

}
