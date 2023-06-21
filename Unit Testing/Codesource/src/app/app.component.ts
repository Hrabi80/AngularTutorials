import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngUnitTest';
  constructor(private authService:AuthService){

  }
  hello(){
    return 'Hello World!'
  }
  welcome(){
    return 'welcome :)';
  }
  canLogin(username:string,password:number):boolean{
    return this.authService.isAuthenticated(username,password);
  }
}
