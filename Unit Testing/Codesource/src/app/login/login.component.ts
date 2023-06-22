import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn:boolean;
  title:string;
  @Output() submitData: EventEmitter<User> = new EventEmitter<User>(); // Initialize submitData property

  constructor() { 
    this.isLoggedIn = false;
    this.title= "hello world"
  }

  ngOnInit(): void {
  }
  loginOld():void{
    this.isLoggedIn = !this.isLoggedIn;
  }
  login(email:string,password:string):void{
    this.isLoggedIn = !this.isLoggedIn;
    this.submitData.emit({email,password});
  }
  get loginState():string{
    return `User is ${this.isLoggedIn ? 'logged in' : 'logged out'}`;  
  }

}
