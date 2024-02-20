import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicos/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authservice : AuthService,
    private router : Router){

  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    //return false;
    let authenticated = this.authservice.isAuthenticated();
    if(authenticated){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
