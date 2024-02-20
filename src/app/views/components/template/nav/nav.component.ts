import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/servicos/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit{
  
  /*
 constructor(
      private router : Router,
      private authservice : AuthService,
      private totast : ToastrService ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  OnInit():void{}
  logout(){
    this.router.navigate(['login']);
    this.authservice.logout();
    this.totast.info('Logout realizado comn sucesso','Logout',{timeOut:7000});
  }
*/

constructor() { }

ngOnInit(): void {
}
}
