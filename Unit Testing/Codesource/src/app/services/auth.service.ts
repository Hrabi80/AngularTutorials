import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private loginService: LoginService) { }
  isAuth2():boolean {
    return !!localStorage.getItem('token');
  }
  isAuth():boolean {
    return this.loginService.isLogin();
  }
  isAuthenticated(username:string,password:number):boolean{
    if(username&&password){
      return true;
    }else{
      return false;
    }
  }
}
