import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   let token = localStorage.getItem('token');

   if(token){
    const clonereq = request.clone({headers: request.headers.set('Autorization',`Bearer${token}`)});
    return next.handle(clonereq);
   }else{
    return next.handle(request);
   }
  }
}

export const AutInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi: true
     
  }

]
