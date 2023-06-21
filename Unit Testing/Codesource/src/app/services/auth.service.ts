import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private loginService: LoginService,
              private http: HttpClient) { }
  
  getPost(postId:number):Observable<Post>{
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
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
