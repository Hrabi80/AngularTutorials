import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn:boolean;
  constructor() { 
    this.isLoggedIn = false;
  }

  ngOnInit(): void {
  }
  login():void{
    this.isLoggedIn = !this.isLoggedIn;
  }
  get loginState():string{
    return `User is ${this.isLoggedIn ? 'logged in' : 'logged out'}`;  
  }

}
