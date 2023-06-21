import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
describe('Auth service post',()=>{
  let service : AuthService;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientModule], // import httpClientModule in test
    });
    service = TestBed.inject(AuthService);
  })
  //DoneFn is methode to be called when the asy methode is done
  it('should get the data succesfully',(done:DoneFn)=>{
    service.getPost(1).subscribe((post:Post)=>{
      expect(post.id).toEqual(1);
      done(); // call the done function here
    })
  })
})
// mock data is to make fake data and expect the return data to be like the mock
describe('AuthService with mock data',()=>{
  let service :AuthService;
  let httpMock: HttpTestingController;
  const mockpost = {
    userId: 1,
    id: 2,
    title: "my title",
    body: "my body",
  };
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  
  it('getPost must get data as expected',()=>{
    service.getPost(1).subscribe((data:Post)=>{
      console.log("data is ", data);
      expect(data).toEqual(mockpost);
    })

    // Simulating a request.
    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts/1');
    console.log("req is ====> ",req);
    // Other test example
    expect(req.request.method).toEqual('GET');
    // resolve the request
    req.flush(mockpost);
    // verify that there is no unmatched outstanding requests 
    httpMock.verify();
  })
})

/* before http client course
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
*/