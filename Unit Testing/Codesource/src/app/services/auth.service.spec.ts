import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { LoginService } from './login.service';

describe('check returning value for isAuth',()=>{
  let auth : AuthService;
  beforeEach(()=>{ 
    auth = new AuthService(new LoginService);  //a new instance before each test
  });
  afterEach(()=>{
    localStorage.removeItem('token'); // remove token after each test
  })
  it('must return true if the user is logged in ',()=>{
    localStorage.setItem('token','mytoken');
    expect(auth.isAuth()).toBeTruthy(); //expect to return true
  });

  it('must return false if the user is not logged in ',()=>{
    expect(!auth.isAuth()).toBeFalsy(); //expect to return false
  });
  it('getting fake data using spy',()=>{
    const myspy = jasmine.createSpyObj('',['myAuth']); // create a fake service
    myspy.myAuth.and.returnValue(new LoginService().isLogin() + 'x') ; // create a fake return
    expect(myspy.myAuth()).toBe('truex','wrong data'); // check of expecation
  })
})
